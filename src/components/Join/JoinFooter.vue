<template>
  <!-- 회원가입 하단 다음 버튼 -->
  <div id="findFooter">
    <router-link to="/login">다음</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#findFooter {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: var(--mainColor);

  a {
    display: block;
    width: 100%;
    height: 100%;

    font-size: 1.375rem;
    font-weight: 800;
    text-align: center;
    line-height: 70px;
  }
}
</style>
