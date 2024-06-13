<template>
  <!-- 견종백과 '디테일'  -->
  <div class="dictionaryDetail">
    <div class="type">
      <div class="img">
        <img :src="imgPath" :alt="dogName" />
      </div>

      <h4>댕댕이 이름</h4>
      <p>{{ dogName }}</p>
    </div>

    <div class="informationBox">
      <div class="from">
        <h4>출신</h4>

        <div class="flag">
          <div class="img">
            <img src="../../assets/images/icon_flag_unitedKingdom.svg" alt="영국" />
          </div>
          <span>{{ origin }}</span>
        </div>
      </div>

      <div class="information">
        <div class="infromation__inner">
          <h3>Information to Together</h3>

          <ul>
            <li>
              <h4>사회성</h4>

              <!-- 그래프 -->
              <!-- 인라인 태그 width값으로 조절 -->
              <ul class="progressbar">
                <li>
                  <span class="css-progressbar bar" :style="{ width: sociability.width + '%' }">
                    <span class="text">{{ sociability.text }}</span>
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <h4>입질</h4>

              <ul class="progressbar">
                <li>
                  <span class="css-progressbar bar" :style="{ width: aggression.width + '%' }">
                    <span class="text">{{ aggression.text }}</span>
                  </span>
                </li>
              </ul>
            </li>

            <li>
              <h4>난이도</h4>

              <ul class="progressbar">
                <li>
                  <span class="css-progressbar bar" :style="{ width: difficulty.width + '%' }">
                    <span class="text">{{ difficulty.text }}</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <button type="button" class="mainBtn">연령대 급식 사료량</button>
    </div>

    <div class="charactorBox">
      <h3>Charactor</h3>

      <div class="textBox__container">
        <div class="character textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_paw.svg" alt="강아지 발자국" />
          </div>

          <pre>{{ personality }}</pre>
        </div>

        <div class="textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_dogPark.svg" alt="강아지" />
          </div>

          <pre></pre>
        </div>

        <div class="textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_colorLens.svg" alt="파레트" />
          </div>

          <pre></pre>
        </div>

        <div class="textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_cognitive.svg" alt="뇌" />
          </div>

          <pre></pre>
        </div>
      </div>
    </div>

    <div class="care">
      <h3>How to Care</h3>

      <div class="textBox__container">
        <div class="beware textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_dogService.svg" alt="강아지 산책" />
          </div>

          <pre>{{ careInfo }}</pre>
        </div>

        <div class="textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_dog.svg" alt="강아지" />
          </div>

          <pre></pre>
        </div>

        <div class="textBox">
          <div class="icon">
            <img src="../../assets/images/icon/icon_bacteria.svg" alt="박테리아" />
          </div>

          <pre></pre>
        </div>
      </div>
    </div>

    <div class="disease">
      <h3>대표적인 유전병</h3>

      <ul>
        <!-- <li v-for="(el, i) in geneticDiseases" :key="i">
          <a href="#">
            <span>{{ el }}</span>
            <img src="../../assets/images/icon/icon_questionMark.svg" alt="물음표" />
          </a>
        </li> -->
        <li>
          <a href="#">
            <span>{{ geneticDiseases }}</span>
            <img src="../../assets/images/icon/icon_questionMark.svg" alt="물음표" />
          </a>
        </li>
      </ul>
    </div>

    <a href="#" class="mainBtn"> 유전자 검사하러 가기 </a>
  </div>
</template>

<script>
import { onMounted, ref, watchEffect } from 'vue';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // 화면에 보여질 데이터
    let imgPath = ref(require('../../assets/images/noImg.png'));
    let dogName = ref('');
    let origin = ref('');
    let sociability = ref({ width: 33, text: '나쁨' });
    let aggression = ref({ width: 33, text: '나쁨' });
    let difficulty = ref({ width: 33, text: '나쁨' });
    let personality = ref('');
    let careInfo = ref('');
    let geneticDiseases = ref('');

    // 그래프 text와 width값 확인
    const getProgressData = (item) => {
      let width = 0;
      let text = '';

      switch (item) {
        case '좋음':
        case '1':
          width = 99;
          text = '좋음';
          break;
        case '보통':
        case '2':
          width = 66;
          text = '보통';
          break;
        case '나쁨':
        case '3':
          width = 33;
          text = '나쁨';
          break;
        default:
          width = 33;
          text = '나쁨';
          break;
      }

      return { width, text };
    };

    // 이미지 확인
    const checkImagePath = (path) => {
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
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/breed/list`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });
        console.log(response);

        // id
        const idValue = props.id;
        const propsId = parseInt(idValue);

        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }

        const res = await response.json();
        const { code, data, msg } = res;

        if (code !== '200') {
          console.error('API 오류:', msg);
        } else {
          console.log(data);
        }

        // propsId와 일치하는 breedIdx
        const seletedData = data.find((item) => item.breedIdx === propsId);
        if (!seletedData) {
          console.error('해당 ID의 데이터가 없습니다.');
          return;
        }

        imgPath.value = checkImagePath(seletedData.imgPath);
        dogName.value = seletedData.name;
        origin.value = seletedData.origin;
        sociability.value = getProgressData(seletedData.sociability);
        aggression.value = getProgressData(seletedData.aggression);
        difficulty.value = getProgressData(seletedData.difficulty);
        careInfo.value = seletedData.careInfo;
        personality.value = seletedData.personality;
        geneticDiseases.value = seletedData.geneticDiseases;
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };

    watchEffect(async () => {
      await fetchData();
    });

    onMounted(() => {
      fetchData();
    });

    return { imgPath, dogName, origin, sociability, aggression, difficulty, personality, careInfo, geneticDiseases };
  },
};
</script>

<style lang="scss" scoped>
.dictionaryDetail {
  padding-bottom: 34px;

  > div {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--black);

    h3 {
      margin-bottom: 20px;
      font-size: 1.125rem;
      font-weight: 800;
    }

    h4 {
      font-size: 0.875rem;
    }

    .textBox__container {
      display: flex;
      flex-direction: column;
      gap: 22px;

      .textBox {
        display: flex;
        gap: 12px;
      }
    }
  }

  pre {
    overflow: auto;
    white-space: pre-wrap;
    text-align: left;
    margin: 0;

    font-size: 0.875rem;
    font-family: var(--nanum);
    color: var(--black300);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: var(--mainColor);
    border-radius: 50%;

    > img {
      width: 15px;
    }
  }

  .type {
    padding-bottom: 10px;

    > .img {
      width: 100%;
      height: 226px;
      margin-bottom: 20px;
      border-radius: 10px;
      overflow: hidden;
    }

    > h4 {
      margin-bottom: 8px var(--black);
    }
    > p {
      font-size: 1.125rem;
      font-weight: 800;
      line-height: 1;
    }
  }

  .informationBox {
    .from {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 30px;
      line-height: 1;

      .flag {
        display: flex;
        align-items: center;

        font-size: 1.125rem;
        font-weight: 800;
        line-height: 1;

        img {
          height: 1.125rem;
          margin-right: 5px;
        }
      }
    }

    .information {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 267px;
      padding: 0 30px;
      margin-bottom: 30px;
      background-color: var(--white);
      border-radius: 10px;

      h3 {
        font-size: 0.875rem;
      }

      .infromation__inner {
        width: 100%;

        > ul {
          display: flex;
          flex-direction: column;
          gap: 30px;

          li {
            h4 {
              margin-bottom: 10px;
              line-height: 1;
            }
          }
        }
      }
    }
  }

  .disease {
    li {
      a {
        display: inline-block;
        font-size: 0.875rem;
        line-height: 1;

        img {
          width: 0.875rem;
          height: 0.875rem;
          margin-left: 4px;
        }
      }
    }
  }

  .mainBtn {
    display: block;
    text-align: center;
    line-height: 40px;
  }

  // **** CSS progress bar ****

  .progressbar {
    position: relative;
    width: 100%;
    padding: 0;
    list-style: none;

    li {
      width: 100%;
      height: 11px;
      background-color: #eaeaea;
      border-radius: 10px;

      .text {
        position: absolute;
        top: -27px;
        right: 15px;

        font-size: 0.875rem;
        font-weight: 700;
        color: #f2ae49;
      }

      .bar {
        position: absolute;
        // border-right: 1px dotted #8d8d8d;
        border-radius: 10px 0 0 10px;
        background-color: #35495e;
        background: linear-gradient(to right, #eed0a3, #f1ad47);
        height: 100%;

        &:after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          content: '';
          width: 20px;
          height: 20px;
          position: absolute;
          top: -27px;
          right: 0;
          transform: translateX(50%);
          border: 7px solid #fcefdb;
          border-radius: 50%;
          background-color: #f2ae49;
        }

        &::before {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          content: '';
          width: 0;
          height: 17px;
          position: absolute;
          bottom: 0;
          right: 0;
          border-right: 1px dotted #8d8d8d;
          // border-radius: 50%;
          background-color: transparent;
        }
      }

      .css-progressbar {
        max-width: 98%;
        // -moz-animation: css-progressbar 2s ease-out;
        // -webkit-animation: css-progressbar 2s ease-out;
      }
    }
  }

  @-webkit-keyframes css-progressbar {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }

  @-moz-keyframes css-progressbar {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }

  @keyframes css-progressbar {
    0% {
      width: 0%;
    }
    100% {
      width: 80%;
    }
  }
}
</style>
