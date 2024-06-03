<template>
  <!-- 병원 맵 -->
  <div class="hospitalBox">
    <h3>가까운 동물병원</h3>
    <div class="city">
      <div class="text">
        <span>현재위치</span>
        <span>서울특별시 강남구</span>
      </div>

      <button type="button">
        <img src="../../assets/images/icon/icon_update.svg" alt="새로고침" />
      </button>
    </div>
    
    <div class="mapBox">
      <div class="tabMenu">
        <!-- 탭메뉴, 기본적으로 'near'로 설정되어있으며 click할때 값이 전달되고, class의 active는 script의 data에 tabMenu의 값과 일치하는 경우 active가 붙음  -->
        <button type="button" data-value="near" :class="{ active: tabMenu === 'near' }" @click="handleTabMenu('near')">제일 가까운 병원</button>
        <button type="button" data-value="24hour" :class="{ active: tabMenu === '24hour' }" @click="handleTabMenu('24hour')">24시간 동물병원</button>
      </div>

      <div class="map">맵</div>

      <div class="shopBox">
        <div class="shop">
          <div class="name">24시청담우리동물병원</div>
          <div class="info">
            <div class="reviewBox">
              <div class="star">
                <img src="../../assets/images/icon/icon_star.svg" alt="별" />
                <span>4.32</span>
              </div>

              <div class="review">
                <span>방문자 리뷰</span>
                <span>908</span>
              </div>
            </div>

            <div class="address">
              <p>서울 강남구 삼성로 614</p>
            </div>

            <div class="callBox">
              <p class="number">0507-1404-7515</p>

              <a href="tell:0507-1404-7515">전화하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabMenu: 'near',
    };
  },
  methods: {
    handleTabMenu(menu) {
      this.tabMenu = menu;
    },
  },
};
</script>

<style lang="scss" scoped>
.hospitalBox {
  padding: 0 20px;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .city {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 0.875rem;

    .text {
      span {
        &:first-child {
          font-weight: 700;
          margin-right: 8px;
        }
      }
    }

    button {
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 4px;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .mapBox {
    .tabMenu {
      button {
        width: 50%;
        height: 44px;
        background-color: var(--white);
        border-radius: 10px 10px 0 0;
        cursor: pointer;

        font-size: 0.875rem;
        line-height: 44px;
        color: #999999;

        &.active {
          background-color: #343044;
          color: var(--white);
        }
      }
    }

    .map {
      width: 100%;
      height: 234px;
      background-color: #333;
    }

    .shopBox {
      margin-top: 20px;

      .name {
        font-size: 1rem;
        font-weight: 700;
      }

      .reviewBox {
        display: flex;
        font-size: 0.875rem;

        > div {
          &:first-child {
            position: relative;

            &::after {
              position: absolute;
              top: 50%;
              right: -7px;
              transform: translateY(-50%);

              content: '';
              width: 1px;
              height: 6px;
              background-color: var(--black);
            }
          }
        }

        .star {
          display: flex;
          align-items: center;
          margin-right: 1rem;

          img {
            width: 0.875rem;
            height: 0.875rem;
            margin-right: 4px;
          }
        }

        .review {
          color: #616161;

          span {
            &:first-child {
              margin-right: 4px;
            }
          }
        }
      }

      .address {
        font-size: 0.875rem;
        color: #616161;
      }

      .callBox {
        display: flex;
        font-size: 0.875rem;
        color: #616161;

        a {
          margin-left: 10px;
          font-weight: 700;
          color: var(--black);
        }
      }
    }
  }
}
</style>
