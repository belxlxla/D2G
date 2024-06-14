<template>
  <!-- 견성도감 리스트 페이지 -->
  <section id="dictionaryPage" class="scrollBar__non">
    <!-- 견성도감 상단 네비게이션 -->
    <DictionaryHeader />

    <div id="contentsBox">
      <!-- 견성도감 리스트 -->
      <DictionaryList />
    </div>
  </section>
</template>

<script>
import DictionaryHeader from '@/components/Dictionary/DictionaryHeader.vue';
import DictionaryList from '@/components/Dictionary/DictionaryList.vue';

export default {
  components: {
    DictionaryHeader,
    DictionaryList,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/layout/dictionaryPage.scss';
</style>
