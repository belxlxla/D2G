<template>
  <!-- 아이디 찾기 '본인인증' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 변경해서 사용 -->
    <FindIdHeader :title="'아이디 찾기'" />

    <div id="contentsBox">
      <ul>
        <li class="active">
          <h3>아이디 찾기</h3>

          <!-- 본인인증 -->
          <!-- 아이디 찾기, 비밀번호 찾기, 회원가입에 공용으로 사용되어 props로 앞에 들어갈 글자를 전달해서 사용 -->
          <FindVerification :desc="'이메일 아이디를 찾으시려면'" />
        </li>

        <li>
          <h3>인증 요청</h3>
          <div class="findLine"></div>
        </li>

        <li>
          <h3>인증 확인</h3>
        </li>
      </ul>
    </div>

    <!-- 찾기 하단 로그인 버튼 -->
    <FindIdFooter />
  </section>
</template>

<script>
import FindVerification from '@/components/Find/FindVerification.vue';
import FindIdHeader from '@/components/Find/FindHeader.vue';
import FindIdFooter from '@/components/Find/FindFooter.vue';

export default {
  components: {
    FindIdHeader,
    FindVerification,
    FindIdFooter,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
