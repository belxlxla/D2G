<template>
  <!-- 비밀번호 초기화 '본인인증' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 전달해서 사용 -->
    <FindHeader :title="'비밀번호 초기화'" />

    <div id="contentsBox">
      <ul>
        <li class="active">
          <h3>비밀번호 초기화</h3>

          <!-- 본인인증 -->
          <!-- 아이디 찾기, 비밀번호 찾기, 회원가입에 공용으로 사용되어 props로 설명을 전달해서 사용 -->
          <FindVerification :desc="'비밀번호를 초기화하시려면 아래 본인 인증을 완료하세요.'" />
        </li>

        <li>
          <h3>정보 확인 또는 변경</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import FindVerification from '@/components/Find/FindVerification.vue';

export default {
  components: {
    FindHeader,
    FindVerification,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
