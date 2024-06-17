<template>
  <!-- 투데이 메거진 -->
  <div class="todayMagazineBox">
    <h3>
      <span>Today Magazine</span>
      <router-link to="/dictionary">견성도감 더보기 &gt;</router-link>
    </h3>

    <div class="magazine">
      <router-link to="#">
        <div class="img">
          <img src="../../assets/images/test_dog2.jpg" alt="today magazine" />
        </div>

        <h4>2024, 5월호, 비숑프리제</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.todayMagazineBox {
  padding: 0 20px;
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 1.25rem;
    font-weight: 700;

    a {
      font-size: 0.75rem;
      font-weight: 400;
      color: #b8b6c0;
    }
  }

  .magazine {
    a {
      .img {
        border-radius: 10px;
        overflow: hidden;
        object-fit: cover;
      }

      h4 {
        margin-top: 10px;
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }
}
</style>
