<template>
  <section id="findPage">
    <FindHeader :title="'가입 정보 입력'" />

    <div id="contentsBox">
      <ul>
        <li class="active">
          <h3>이메일 주소 중복 확인 및 인증 이메일 발송</h3>
          <JoinEmailDuplication />
        </li>
        
        <li> 
          <h3>인증 확인</h3>
          <div class="findLine"></div>
        </li>

        <li>
          <h3>회원 정보 입력</h3>
        </li>
      </ul>
    </div>

    <JoinFooter />
  </section>
</template>

<script>
import FindHeader from '@/components/Find/FindHeader.vue';
import JoinFooter from '@/components/Join/JoinFooter.vue';
import JoinEmailDuplication from '@/components/Join/JoinEmailDuplication.vue';

export default {
  components: {
    FindHeader,
    JoinFooter,
    JoinEmailDuplication,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/findPage.scss';
</style>
