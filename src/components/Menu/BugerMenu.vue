<template>
  <!-- 햄버거 메뉴 -->
  <!-- HeaderSection에서 props받은 burgerFlag 상태에 따라 active를 관리하고 메뉴를 나타나게 하고 사라지게 함 -->
  <div :class="{'burgerMenu': true, 'active' : burgerFlag}">
    <div class="userBox">
      <div class="user login">
        <ul>
          <li>
            <div class="text">
              <p class="name char3">김댕댕</p>
              <p>님,</p>
              <span>안녕하세요.</span>
            </div>
          </li>
          <li>
            <router-link to="/mypage" class="myPageBtn">마이페이지</router-link>
          </li>
        </ul>
      </div>

      <!-- HeaderSection의 burgerClose를 burgerFlag를 false로 변경함 -->
      <button type="button" class="closeBtn" @click="closeBurger">
        <img src="../../assets/images/icon/icon_close_white.svg" alt="닫기" />
      </button>
    </div>

    <div class="burgerNav">
      <nav>
        <ul>
          <!-- v-for를 사용해서 burgerNav(script의 data에 burgerNav 배열)를 뿌려줌  -->
          <li v-for="(el, i) in burgerNav" :key="i">
            <router-link :to="el.link">{{ el.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="burgerSns">
      <ul>
        <!-- v-for를 사용해서 burgerSns(script의 data에 burgerSns 배열)를 뿌려줌  -->
        <li v-for="(el, i) in burgerSns" :key="i">
          <a :href="el.link">
            <img :src="getImage(el.img)" :alt="el.name" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    burgerFlag : {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      burgerNav: [
        { name: '만보기', link: '#' },
        { name: '견종백과', link: '/dictionary' },
        { name: '유전자 검사', link: '#' },
        { name: '사주궁합', link: '#' },
        { name: '댕이고 매거진', link: '#' },
        { name: 'About VIVLAB', link: '#' },
      ],
      burgerSns: [
        { name: 'instagram', img: 'icon_instagram.svg', link: '#' },
        { name: 'facebook', img: 'icon_facebook.svg', link: '#' },
        { name: 'mail', img: 'icon_mail.svg', link: 'mailto:#' },
      ],
    };
  },
  methods: {
    getImage(imageName) {
      return require(`../../assets/images/icon/${imageName}`);
    },
    closeBurger() {
      this.$emit('close');
    }
  },
};
</script>

<style lang="scss" scoped>
.burgerMenu {
  position: absolute;
  top: 0;
  right: -100%;
  width: 348px;
  height: 100%;
  padding: 65px 20px 80px 30px;
  background-color: #1b1b1b;
  opacity: 0.98;
  border-radius: 50px 0 0 50px;
  transition: right 0.5s ease-in-out;
  z-index: 100;

  color: var(--white);

  &.active {
    right: 0;
  }

  .userBox {
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;

    .user {
      &.logout {
        ul {
          li {
            &:first-child {
              position: relative;

              &::after {
                position: absolute;
                top: 50%;
                right: -7px;
                transform: translateY(-50%);

                content: '';
                width: 1px;
                height: 0.75rem;
                background-color: var(--white);
              }
            }
          }
        }
      }

      ul {
        display: flex;
        align-items: center;
        gap: 14px;
      }
    }

    .text {
      display: flex;

      span {
        padding-top: 0.125rem;
        font-size: 0.75rem;
      }
    }

    .myPageBtn {
      display: block;
      width: 118px;
      height: 32px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50px;
      cursor: pointer;

      line-height: 32px;
      text-align: center;
    }

    .closeBtn {
      background-color: transparent;
      cursor: pointer;
    }
  }

  .burgerNav {
    margin-top: 80px;
    ul {
      display: flex;
      flex-direction: column;
      gap: 40px;

      li {
        font-size: 20px;
        font-weight: 700;
        text-align: right;

        &.active {
          color: #f3b15b;
        }
      }
    }
  }

  .burgerSns {
    margin-top: 146px;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 24px;

      li {
        a {
          height: 36px;
        }
      }
    }
  }
}
</style>
