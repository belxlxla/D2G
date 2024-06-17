<template>
  <!-- 기타 컨텐츠 -->
  <div class="otherContentsBox">
    <h3>Other Contents</h3>

    <div class="contentsBox">
      <div class="content">
        <div class="content__inner">
          <img src="../../assets/images/icon/icon_bookmark.svg" alt="북마크" />
          <div class="text">
            <p>댕이고에서만 볼수있는</p>
            <p>댕이고 MBTI</p>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="content__inner">
          <img src="../../assets/images/icon/icon_location.svg" alt="위치" />
          <div class="text">
            <p>댕댕이 섬에 어서와!</p>
            <p>멍동여지도</p>
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
.otherContentsBox {
  padding: 0 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .contentsBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 13px;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 160px;
      width: 100%;
      height: 138px;
      background-color: var(--white);
      border-radius: 10px;
      font-size: 0.75rem;
      text-align: center;

      .content__inner {
        img {
          width: 39px;
          height: 39px;
          margin-bottom: 18px;
        }
        .text {
          p {
            &:last-child {
              font-size: 1rem;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
