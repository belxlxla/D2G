<template>
  <!-- 아이디 찾기, 비밀번호 초기화 성공 모달 -->
  <!-- 아이디 찾기, 비밀번호 초기화 성공 페이지에서 title, desc1, desc2 글자를 props받아옴 -->
  <div class="findModal">
    <div class="findModalBox">
      <div class="text">
        <h3>{{ title }}</h3>
        <p v-if="desc1.length > 1">
          {{ desc1 }}
        </p>
        <p class="email">{{ email }}</p>
        <p>
          {{ desc1 }}
          
          {{ desc2 }}
        </p>
      </div>
      <router-link to="/login">로그인 하러 가기</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc1: {
      type: String,
      default: '',
    },
    desc2: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.findModal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.88);
  z-index: 10;

  .findModalBox {
    width: 335px;
    height: 209px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 10px;
    text-align: right;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 30px;

      h3 {
        font-size: 1.25rem;
        font-weight: 800;
        margin-bottom: 20px;
      }

      > p {
        font-size: 1rem;
        text-align: center;
      }

      .email {
        color: #ffb13b;
        font-weight: 800;
      }
    }

    > a {
      display: block;
      width: 100%;
      height: 58px;
      font-size: 1rem;
      font-weight: 800;
      text-align: center;
      line-height: 58px;
      color: var(--black);
      background-color: #eed0a3;
      border-radius: 0 0 10px 10px;
    }
  }
}
</style>
