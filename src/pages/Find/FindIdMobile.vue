<template>
  <!-- 아이디 찾기 '인증요청' 페이지 -->
  <section id="findPage">
    <FindIdHeader :title="'아이디 찾기'" />

    <div id="contentsBox">
      <ul>
        <li>
          <h3>아이디 찾기</h3>
          <div class="findLine"></div>
        </li>

        <li class="active">
          <h3>인증 요청</h3>

          <!-- 핸드폰 인증 요청 -->
          <FindMobileRequest />
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
import FindMobileRequest from '@/components/Find/FindMobileRequest.vue';
import FindIdHeader from '@/components/Find/FindHeader.vue';
import FindIdFooter from '@/components/Find/FindFooter.vue';

export default {
  components: {
    FindIdHeader,
    FindIdFooter,
    FindMobileRequest,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';

#contentsBox {
  > ul {
    > li {
      &:nth-child(1) {
        h3 {
          &::after {
            font-size: 0 !important;
            background-image: url(../../assets/images/icon/icon_check.svg);
          }
        }
      }
    }
  }
}
</style>
