<template>
  <!-- 아이디 찾기 '성공' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 변경해서 사용 -->
    <FindHeader :title="'아이디 찾기'" />

    <div id="contentsBox" class="findId">
      <ul>
        <li class="active">
          <h3>아이디 찾기</h3>

           <!-- 본인인증 -->
          <!-- 아이디 찾기, 비밀번호 찾기, 회원가입에 공용으로 사용되어 props로 앞에 들어갈 글자를 전달해서 사용 -->
          <FindVerification :desc="'이메일 아이디를 찾으시려면 본인 인증 또는 모바일 인증을 선택하세요.'" />
        </li>
      </ul>
    </div>

    <!-- 찾기 모달 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 전달해서 사용 -->
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
