<template>
  <!-- 아이디 찾기 & 비밀번호 초기화 '본인인증' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 변경해서 사용 -->
    <FindHeader :title="'본인인증'" />

    <div id="contentsBox">
      <div class="text">
        <h3>본인인증</h3>
        <p>본인인증을 위한 필수 정보를 입력해 주세요</p>
        <p>회원 본인 확인 시 휴대폰 인증 기관 또는 아이핀 (i-PIN 인증을 통해 본인 확인이 가능합니다)</p>
      </div>

      <div class="twoBtnBox">
        <button type="button" class="mainBtn">휴대폰 인증</button>
        <button type="submit" class="mainBtn">아이핀(i-PIN인증)</button>
      </div>
    </div>

    <FindFooter />
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import FindFooter from '@/components/Find/FindFooter.vue';

export default {
  components: {
    FindHeader,
    FindFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';

#contentsBox {
  text-align: center;

  .text {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-bottom: 20px;

      font-size: 1.25rem;
      font-weight: 800;
    }

    p {
      max-width: 200px;
      font-size: 1rem;

      &:nth-child(3) {
        max-width: 280px;
        margin-top: 40px;
        font-size: 0.875rem;
      }
    }
  }

  .twoBtnBox {
    margin-top: 20px;
    button {
      height: 50px;
    }
  }
}
</style>
