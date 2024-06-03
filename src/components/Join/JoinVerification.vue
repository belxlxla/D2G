<template>
  <!-- 회원가입 이용약관 -->
  <div class="joinVerification">
    <div class="text">
      <h3>댕이고 이용약관</h3>
      <p>APP 이용약관 및 개인정보 수집 이용에 동의해 주세요.</p>
    </div>

    <div id="checkBox">
      <div class="allCheckBtn">
        <label for="allCheck">
          <span class="indicator" :class="{ checked: allChecked }"></span>
          <input type="checkbox" id="allCheck" v-model="allChecked" @change="toggleAll" />
          <p>모두 동의합니다.</p>
        </label>
      </div>

      <ul>
        <li v-for="(el, i) in checkBoxContents" :key="i">
          <div class="check">
            <label :for="`check${i}`">
              <span class="indicator" :class="{ checked: checkedList[i] }"></span>
              <input type="checkbox" :id="`check${i}`" v-model="checkedList[i]" @change="updateAllChecked" />
              <p>{{ el.title }}</p>
            </label>
          </div>
          <button type="button" @click="openModal(i)">약관보기</button>
        </li>
      </ul>
    </div>
  </div>

  <div id="joinFooter">
    <button class="checkBtn" :disabled="!allChecked" type="submit" @click="nextPage">다음</button>
  </div>

  <FindModal2 v-if="modalOpen" :isOpen="modalOpen" :modalContent="modalContent" @close="closeModal" />
</template>

<script>
import FindModal2 from '../Find/FindModal2.vue';

export default {
  components: {
    FindModal2,
  },
  data() {
    return {
      checkBoxContents: [
        {
          title: '[필수] 플랫폼의 서비스 이용약관 동의',
          desc: '플랫폼의 서비스 이용약관 동의 내용 내용 내용 내용 내용 내용 내용',
        },
        {
          title: '[필수] 개인정보 수집 및 이용동의',
          desc: '개인정보 수집 및 이용동의 내용 내용 내용 내용 내용 내용 내용 내용',
        },
      ],
      modalOpen: false,
      modalContent: {
        title: '',
        desc: '',
      },
      checkedList: [],
      allChecked: false,
    };
  },
  methods: {
    openModal(index) {
      this.modalContent = {
        title: this.checkBoxContents[index].title,
        desc: this.checkBoxContents[index].desc,
      };
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    checkAll() {
      this.allChecked = !this.allChecked;
      this.checkedList = this.checkBoxContents.map(() => this.allChecked);
    },
    updateAllChecked() {
      this.allChecked = this.checkedList.every((checked) => checked);
    },
    toggleAll() {
      this.checkedList = this.checkBoxContents.map(() => this.allChecked);
    },
    nextPage() {
      window.location.href = '/#/join/check';
    }
  },
  created() {
    this.checkedList = this.checkBoxContents.map(() => false);
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/joinPage.scss';

.joinVerification {
  position: relative;

  .text {
    margin: 50px 0 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      margin-bottom: 20px;
      font-size: 1.25rem;
      font-weight: 700;
    }

    p {
      max-width: 285px;
      font-size: 1rem;
    }
  }

  #checkBox {
    margin-top: 20px;

    .allCheckBtn {
      margin-bottom: 20px;

      > label {
        > p {
          margin: 0 10px 0 33px;
        }

        > .indicator {
          width: 27px;
          height: 27px;
          border: 1px solid #b3b3b3;

          &::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 8px;
            width: 8px;
            height: 13px;
            border: solid var(--white);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }

          &.checked {
            background-color: var(--mainColor);
            border-color: var(--mainColor);

            &::after {
              border-color: var(--white);
            }
          }
        }
      }
    }

    > ul {
      border-top: 1px solid #d9d9d9;

      > li {
        margin: 30px 0;
        display: flex;
        align-items: center;

        font-size: 0.875rem;

        &:last-child {
          margin: 0;
        }

        button {
          font-size: 0.875rem;
          color: #eed0a3;
          background-color: transparent;
          cursor: pointer;

          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
  }

  label {
    display: flex;
    position: relative;

    > p {
      margin: 0 10px 0 23px;
      line-height: 1;
    }

    > .indicator {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 15px;
      height: 15px;
      margin-right: 8px;
      background-color: transparent;
      border-radius: 4px;
      cursor: pointer;

      &::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 5px;
        width: 5px;
        height: 10px;
        border: solid #b3b3b3;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      &.checked {
        &::after {
          border-color: var(--mainColor);
        }
      }
    }

    > input {
      appearance: none;
      border: 0;
      border-radius: 0;
    }
  }
}
</style>