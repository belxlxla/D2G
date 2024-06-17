<template>
  <!-- 아이디 찾기 '성공' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 변경해서 사용 -->
    <FindHeader :title="'아이디 찾기'" />

    <div id="contentsBox" class="findId">
      <FindVerification :success="'success'" :desc="'완료했습니다.'" />
    </div>
    
    <FindModal :title="'아이디 찾기 완료'" :desc1="'회원님의 아이디는'" :email="'email@email.com'" :desc2="'입니다.'" />
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import FindVerification from '@/components/Find/FindVerification.vue';
import FindModal from '@/components/Find/FindModal.vue';

export default {
  components: {
    FindHeader,
    FindVerification,
    FindModal,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';

#contentsBox {
  > ul {
    > li {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
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
