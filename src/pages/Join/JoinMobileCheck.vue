<template>
  <section id="findPage">
    <FindHeader :title="'회원가입'" />

    <div id="contentsBox">
      <ul>
        <li>
          <h3>약관동의</h3>
          <div class="findLine"></div>
        </li>

        <li>
          <h3>인증 요청</h3>
          <div class="findLine"></div>
        </li>

        <li class="active">
          <h3>인증 확인</h3>
          <FindMobileCheck />
        </li>
      </ul>
    </div>

    <FindFooter />
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import FindFooter from '@/components/Find/FindFooter.vue';
import FindMobileCheck from '@/components/Find/FindMobileCheck.vue';

export default {
  components: {
    FindHeader,
    FindFooter,
    FindMobileCheck,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
