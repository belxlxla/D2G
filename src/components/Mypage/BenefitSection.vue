<template>
  <!-- 회원 이름, 등급, 마일리지 -->
  <div class="benefitBox">
    <div class="name">
      <span>
        <strong>이름</strong>
      </span>
      <span>님 안녕하세요.</span>
    </div>

    <div class="benefit">
      <div class="classBox">
        <div class="class">
          <div class="text">
            <span>내 등급</span>
            <span>
              <strong class="gold">Gold</strong>
            </span>
          </div>
        </div>
        <a href="#">등급 별 혜택 안내 &gt;</a>
      </div>

      <div class="mileageBox">
        <div class="mileage">
          <div class="text">
            <span>내 마일리지</span>
            <span>
              <strong>500,000</strong>
            </span>
          </div>
        </div>
        <a href="#">등급 별 혜택 안내 &gt;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.benefitBox {
  padding: 120px 20px 0;

  .name {
    span {
      font-size: 0.75rem;
      strong {
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }

  .benefit {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      text-align: right;

      > div {
        display: flex;
        align-items: center;
        width: 162px;
        height: 83px;
        padding-left: 20px;
        background-color: var(--white);
        border-radius: 10px;

        .text {
          display: flex;
          flex-direction: column;
          text-align-last: left;

          span {
            font-size: 0.75rem;
            color: #979797;
          }

          strong {
            font-size: 1.25rem;
            font-weight: 700;
            color: #eed0a3;
          }
        }
      }

      a {
        font-size: 0.75rem;
        color: #919191;
      }
    }
  }
}
</style>
