<template>
  <section id="joinPage" class="scrollBar__non">
    <FindHeader :title="'회원 가입'" />

    <div id="contentsBox">
      <ul>
        <li>
          <h3>이메일 주소 중복 확인 및 인증 이메일 발송</h3>
          <div class="findLine"></div>
        </li>

        <li>
          <h3>인증 확인</h3>
          <div class="findLine"></div>
        </li>

        <li class="active">
          <h3>회원 정보 입력</h3>

          <JoinInformation />
        </li>
      </ul>
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

#contentsBox {
  > ul {
    > li {
      &:nth-child(1),
      &:nth-child(2) {
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
