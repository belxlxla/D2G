<template>
  <section id="findPage">
    <FindHeader :title="'회원가입'" />

    <div class="contents">
      <JoinVerification />
    </div>
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import JoinVerification from '@/components/Join/JoinVerification.vue';

export default {
  components: {
    FindHeader,
    JoinVerification,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
