<template>
  <!-- 마이 페이지 -->
  <section id="mypage" class="scrollBar__non">
    <!-- 마이 페이지 상단 네비게이션 -->
    <HeaderSection :title="'마이페이지'" />

    <div class="contentsBox">
      <!-- 수수패밀리 -->
      <SusuFamily />

      <!-- 내 등급 및 포인트 -->
      <BenefitSection />

      <!-- 날씨 -->
      <WeatherSection />

      <div class="dotLine"> 
        <div></div>
      </div>

      <!-- 체크리스트 -->
      <CheckList />

      <div class="dotLine">
        <div></div>
      </div>

      <!-- 병원 지도 -->
      <HospitalSection />

      <div class="dotLine">
        <div></div>
      </div>

      <!-- 플레이 그라운드 -->
      <PlayGround />

      <div class="dotLine">
        <div></div>
      </div>

      <!-- 투데이 메거진 -->
      <TodayMagazine />

      <div class="dotLine">
        <div></div>
      </div>

      <!-- 기타 컨텐츠 -->
      <OtherContents />

      <div class="dotLine">
        <div></div>
      </div>

      <!-- 댕이고 SHOP 바로가기 -->
      <ShopSection />
    </div>
  </section>
</template>

<script>
import HeaderSection from '@/components/Layout/HeaderSection.vue';
import SusuFamily from '@/components/Mypage/SusuFamily.vue';
import BenefitSection from '@/components/Mypage/BenefitSection.vue';
import WeatherSection from '@/components/Mypage/WeatherSection.vue';
import CheckList from '@/components/Mypage/CheckList.vue';
import HospitalSection from '@/components/Mypage/HospitalSection.vue';
import PlayGround from '@/components/Mypage/PlayGround.vue';
import TodayMagazine from '@/components/Mypage/TodayMagazine.vue';
import OtherContents from '@/components/Mypage/OtherContents.vue';
import ShopSection from '@/components/Mypage/ShopSection.vue';

export default {
  components: {
    HeaderSection,
    SusuFamily,
    BenefitSection,
    WeatherSection,
    CheckList,
    HospitalSection,
    PlayGround,
    TodayMagazine,
    OtherContents,
    ShopSection,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/myPage.scss';
</style>
