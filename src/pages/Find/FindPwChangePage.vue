<template>
  <!-- 비밀번호 초기화 '정보 확인 또는 변경' 페이지 -->
  <section id="findPage">
    <!-- 찾기 상단 네비게이션 -->
    <!-- 아이디 찾기, 비밀번호 초기화에서 공용으로 사용, props로 글자를 전달해서 사용 -->
    <FindHeader :title="'비밀번호 초기화'" />

    <div id="contentsBox">
      <ul>
        <li>
          <h3>비밀번호 초기화</h3>
          <div class="findLine"></div>
        </li>

        <li class="active">
          <h3>정보 확인 또는 변경</h3>
          
          <!-- 비밀번호 변경 -->
          <FindPwChange />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import FindPwChange from '@/components/Find/FindPwChange.vue';

export default {
  components: {
    FindHeader,
    FindPwChange,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';

#contentsBox {
  > ul {
    > li {
      &:nth-child(1)
      {
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
