<template>
  <!-- 견생백과 상단 네비게이션 -->
  <div id="dictionaryHeader">
    <nav>
      <h2 class="title">
        견종백과
      </h2>
      <ul>
        <li>
          <router-link to="/dictionary" @click="handlePrevBtn">
            <img src="../../assets/images/icon/icon_nav_arrow_left.svg" alt="돌아가기" />
          </router-link>
        </li>
        <li>
          <button type="button">
            <img src="../../assets/images/icon/icon_search.svg" alt="검색" />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handlePrevBtn() {
      window.history.back();
    }
  },
};
</script>

<style lang="scss" scoped>
#dictionaryHeader {
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

    > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;
      background-color: transparent;
      cursor: pointer;
    }

    img {
      vertical-align: top;
      height: 100%;
    }
  }
}
</style>
