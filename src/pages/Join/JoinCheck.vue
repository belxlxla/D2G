<template>
  <section id="findPage">
    <FindHeader :title="'회원가입'" />

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
