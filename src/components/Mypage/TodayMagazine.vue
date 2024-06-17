<template>
  <!-- 투데이 메거진 -->
  <div class="todayMagazineBox">
    <h3>
      <span>Today Magazine</span>
      <router-link to="/dictionary">견성도감 더보기 &gt;</router-link>
    </h3>

    <div class="magazine">
      <router-link to="#">
        <img src="../../assets/images/test_dog2.jpg" alt="today magazine" />
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
      color: #B8B6C0;
    }
  }

  .magazine {
    a {
      img {
        width: 100%;
        height: 165px;
        border-radius: 10px;
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
