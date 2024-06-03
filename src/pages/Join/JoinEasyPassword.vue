<template>
  <section id="findPage">
    <FindHeader :title="'회원가입'" />

    <div id="contentsBox">
      <JoinEasyPass />
    </div>
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import JoinEasyPass from '@/components/Join/JoinEasyPass.vue';

export default {
  components: {
    FindHeader,
    JoinEasyPass,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
