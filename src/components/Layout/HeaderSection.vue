<template>
  <!-- 마이페이지 상단 네비게이션 -->
  <div id="headerSection">
    <nav>
      <h2 class="title">
        {{ title }}
      </h2>
      <ul>
        <li>
          <a href="#">
            <img src="../../assets/images/icon/icon_nav_arrow_left.svg" alt="돌아가기" />
          </a>
        </li>

        <li>
          <ul>
            <li>
              <button type="button" class="alarmBtn">
                <img src="../../assets/images/icon/icon_bell.svg" alt="알림" />

                <div class="alarm">
                  <span>9</span>
                </div>
              </button>
            </li>

            <li>
              <button type="button" @click="burgerOpen()">
                <img src="../../assets/images/icon/icon_menu.svg" alt="메뉴" />
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <BurgerMenu :burgerFlag="burgerFlag" @close="burgerClose" />
  </div>
</template>

<script>
import BurgerMenu from '@/components/Menu/BugerMenu.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    BurgerMenu,
  },
  data() {
    return {
      burgerFlag: false,
    };
  },
  methods: {
    burgerOpen() {
      this.burgerFlag = true;
    },
    burgerClose() {
      this.burgerFlag = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#headerSection {
  padding: 11px 20px;
  background-color: var(--white);

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

      > li {
        &:first-child {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
        }

        &:last-child {
          > ul {
            display: flex;
            align-items: center;
            gap: 18px;

            > li {
              &:first-child {
                width: 25px;
                height: 25px;
              }
              &:last-child {
                width: 18px;
                height: 16px;
              }
            }
          }
        }
      }
    }

    .alarmBtn {
      position: relative;
      .alarm {
        position: absolute;
        top: -3px;
        right: -3px;
        width: 15px;
        height: 15px;
        background-color: var(--red);
        border-radius: 50%;

        font-size: 0.625rem;
        font-weight: 700;
        color: var(--white);
        text-align: center;
        line-height: 15px;
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
