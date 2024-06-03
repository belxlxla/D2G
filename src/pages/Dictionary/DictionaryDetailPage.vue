<template>
  <!-- 견생백과 디테일 페이지 -->
  <section id="dictionaryPage" class="scrollBar__non">
    <!-- 견생백과 상단 네비게이션 -->
    <DictionaryHeader />

    <div id="contentsBox">
      <!-- 견생백과 디테일 -->
      <DictionaryDetail :id="id" />
    </div>
  </section>
</template>

<script>
import DictionaryHeader from '@/components/Dictionary/DictionaryHeader.vue';
import DictionaryDetail from '@/components/Dictionary/DictionaryDetail.vue';

export default {
  props: {
    // /dictionary/:id
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    DictionaryHeader,
    DictionaryDetail,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/layout/dictionaryPage.scss';
</style>
