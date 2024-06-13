<template>
  <!-- 견종백과 '리스트' -->
  <div class="dictionaryList">
    <ul>
      <!-- v-for를 사용해서 dictionaryList(현재는 script의 data에 dictionaryList 배열)를 뿌려줌 -->
      <li v-for="(el, i) in dictionaryList" :key="i">
        <router-link :to="`/dictionary/${el.breedIdx}`">
          <div class="img">
            <img :src="checkImagePath(el.imagePath)" :alt="el.name" />
          </div>
          <div class="info">
            <div class="type">
              <h4>견종</h4>
              <p>{{ el.name }}</p>
            </div>

            <div class="weight">
              <h4>평균 체중</h4>

              <div class="gender">
                <div class="male">
                  <img src="../../assets/images/icon/icon_dogHead_male.svg" alt="수컷" />
                  <span>{{ el.weightMale }}</span>
                </div>

                <div class="female">
                  <img src="../../assets/images/icon/icon_dogHead_female.svg" alt="수컷" />
                  <span>{{ el.weightFemale }}</span>
                </div>
              </div>
            </div>

            <div class="keyword">
              <h4>Keyword</h4>
              <ul>
                <!-- <li v-for="(keyword, j) in el?.hashtag" :key="j">
                  <span>#{{ keyword }}</span>
                </li> -->
                <li>
                  <span>#{{ el?.hashtag }}</span>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
// import baseURL from '@/store/baseUrl';

export default {
  methods: {
    getImage(imageName) {
      return require(`${imageName}`);
    },
    checkImagePath(path) {
      if (!path) {
        return require('../../assets/images/noImg.png');
      }
      const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
      const extension = path.split('.').pop().toLowerCase();
      if (validExtensions.includes(extension)) {
        return path;
      } else {
        return require('../../assets/images/noImg.png');
      }
    },
  },
  setup() {
    const dictionaryList = ref(null);

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/breed/list`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        console.log(response);

        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        
        try {
          const res = await response.json();
          const { code, data, msg } = res;

          if (code !== '200') {
            console.error('API 오류:', msg);
          } else {
            dictionaryList.value = data;
            console.log(dictionaryList.value);
          }
        } catch (error) {
          console.log('json 오류', error);
        }
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };

    onMounted(fetchData);

    return { dictionaryList };
  },
};
</script>

<style lang="scss" scoped>
.dictionaryList {
  > ul {
    > li {
      > a {
        display: flex;
        justify-content: space-between;
        gap: 13px;
        // height: 124px;
        margin-bottom: 20px;
        // overflow: hidden;

        .img {
          width: 165px;
          height: 124px;
          border-radius: 10px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .info {
          flex: 1 1 0%;
          font-size: 0.75rem;

          > div {
            h4 {
              color: #8d8d8d;
            }
          }

          .type {
            p {
              font-size: 0.875rem;
              font-weight: 700;
            }
          }

          .weight {
            .gender {
              display: flex;

              div {
                display: flex;
                &:first-child {
                  margin-right: 0.75rem;
                }

                img {
                  width: 0.875rem;
                  margin-right: 4px;
                }

                span {
                  font-weight: 700;
                }
              }
            }
          }

          .keyword {
            > ul {
              display: flex;
              flex-wrap: wrap;
              overflow: hidden;

              li {
                margin-right: 6px;
                font-weight: 700;
                color: #f2ae49;
                line-height: 1.25;
              }
            }
          }
        }
      }
    }
  }
}
</style>
