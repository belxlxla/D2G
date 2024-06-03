<template>
  <!-- 날씨 -->
  <div class="weatherBox">
    <div class="weaher__inner">
      <div class="city">
        <span>서울특별시 강남구</span>
        <button type="button" class="update">
          <img src="../../assets/images/icon/icon_update.svg" alt="새로고침" />
        </button>

        <!-- <button type="button" class="location">위치정보등록</button> -->
      </div>
      <div class="weather">
        <div class="icon">
          <img src="../../assets/images/weather/icon_sun.svg" alt="맑음" />
          <!-- <img src="../../assets/images/icon/icon_loading.svg" alt="로딩" /> -->
        </div>
        <div class="text">
          <div class="today">
            <span>맑음 (오전 25/오후 18)</span>
            <!-- <span>현재 날씨 알수 없음</span> -->
          </div>
          <div class="dustBox">
            <span>미세먼지</span>
            <div class="good">
              <span>좋음</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.weatherBox {
  padding: 30px 20px 0;

  .weaher__inner {
    width: 100%;
    height: 110px;
    padding: 20px;
    background-image: url(/src/assets/images/bg_dogCharactor.png);
    background-size: 81px auto;
    background-repeat: no-repeat;
    background-position: right 20px bottom;
    background-color: var(--white);
    border-radius: 10px;

    font-size: 0.875rem;

    .city {
      margin-bottom: 12px;
      display: flex;
      align-items: center;

      font-size: 0.75rem;
      font-weight: 700;

      button {
        margin-left: 4px;
        background-color: transparent;
        cursor: pointer;

        &.update {
          width: 0.75rem;
          height: 0.75rem;
        }

        &.location {
          font-size: 0.75rem;
          color: #C0BCCD;
          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }

    .weather {
      display: flex;

      .icon {
        width: 35px;
        height: 35px;
        margin-right: 12px;
      }

      .text {
        .today {
          font-weight: 700;
        }

        .dustBox {
          display: flex;

          > div {
            margin-left: 4px;
            padding: 0 16px;
            border-radius: 10px;
          }

          .good {
            font-weight: 700;
            color: var(--white);
            background-color: #8dd941;
          }
        }
      }
    }
  }
}
</style>
