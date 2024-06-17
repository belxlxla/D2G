<template>
  <!-- 본인인증 -->
  <!-- 아이디 찾기, 비밀번호 초기화, 회원가입에 사용 -->
  <div class="verificationContainer">
    <div :class="`indicator ${success}`"></div>

    <h3>본인인증을 {{ desc }}</h3>
    <p>
      휴대폰 인증 기관인증을 통해
      <br />
      본인 확인이 가능합니다
    </p>
    <a href="#" class="mainBtn">본인 인증 하기</a>
  </div>
</template>

<script>
export default {
  props: {
    desc: {
      type: String,
      required: true,
    },
    success: {
      type: String,
      default: '',
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
.indicator {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: var(--white150);

  &.success {
    background-color: var(--mainColor);
  }

  &::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 36px;
    width: 16px;
    height: 26px;
    border: solid var(--white);
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }

  &.checked {
    background-color: var(--mainColor);
    border-color: var(--mainColor);

    &::after {
      border-color: var(--white);
    }
  }
}
</style>
