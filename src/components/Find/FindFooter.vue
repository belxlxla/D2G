<template>
  <!-- 찾기 하단 로그인 버튼 -->
  <div class="guide">
    <img src="../../assets/images/icon/icon_questionMark.svg" alt="물음표" />
    <a href="#">
      <p>본인인증 문자 미수신 안내</p>
    </a>
  </div>

  <div id="findFooter">
    <router-link to="/login">로그인</router-link>
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

.guide {
  position: absolute;
  bottom: 84px;
  left: 20px;
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  line-height: 1;

  > img {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 5px;
  }
}
</style>
