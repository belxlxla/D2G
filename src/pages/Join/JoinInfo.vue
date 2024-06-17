<template>
  <section id="joinPage" class="info scrollBar__non">
    <FindHeader :className="'info'" :title="'회원 가입'" />

    <div id="contentsBox">
      <JoinInformation />
    </div>
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import JoinInformation from '@/components/Join/JoinInformation.vue';

export default {
  components: {
    FindHeader,
    JoinInformation,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/joinPage.scss';
</style>
