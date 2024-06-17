<template>
  <!-- 비밀번호 초기화 '본인인증' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 전달해서 사용 -->
    <FindHeader :title="'비밀번호 초기화'" />

    <div id="contentsBox" class="findId">
      <FindVerification :desc="'시작합니다.'" />
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
