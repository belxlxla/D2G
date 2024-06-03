<template>
  <!-- 찾기 상단 네비게이션 -->
  <div id="findHeader">
    <nav>
      <!-- props받은 title -->
      <h2 class="title">{{ title }}</h2>
      <ul>
        <li>
          <router-link to="/login" @click="handlePrevBtn">
            <img src="../../assets/images/icon/icon_nav_arrow_left.svg" alt="돌아가기" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    handlePrevBtn() {
      window.history.back();
    }
  },
};
</script>

<style lang="scss" scoped>
#findHeader {
  nav {
    position: relative;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-size: 1.25rem;
      font-weight: 800;
      font-family: var(--nanum);
    }
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        &:first-child,
        &:last-child {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;

          img {
            vertical-align: top;
            height: 25px;
          }
        }
      }
    }
  }
}
</style>
