<template>
  <!-- 회원가입 이용약관 -->
  <div class="joinVerification">
    <div class="text">
      <h3>댕이고 이용약관</h3>
      <p>APP 이용약관 및 개인정보 수집 이용에 동의해 주세요.</p>
    </div>

    <div id="checkBox">
      <div class="allCheckBtn">
        <p>
          댕이고 앱 사용을 위한
          <br />
          동의가 필요합니다.
        </p>

        <label for="allCheck">
          <p>전체 동의</p>
          <span class="indicator" :class="{ checked: allChecked }"></span>
          <input type="checkbox" id="allCheck" v-model="allChecked" @change="toggleAll" />
        </label>
      </div>

      <ul>
        <li v-for="(el, i) in checkBoxContents" :key="i">
          <div class="title">
          <p>{{ el.title }}</p>
          <button type="button" @click="openModal(i)">약관보기</button>
          </div>

          <div class="check">
            <label :for="`check${i}`">
              <span class="indicator" :class="{ checked: checkedList[i] }"></span>
              <input type="checkbox" :id="`check${i}`" v-model="checkedList[i]" @change="updateAllChecked" />
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div id="joinFooter">
    <button class="checkBtn" :disabled="!requiredChecked" type="submit" @click="nextPage">다음</button>
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
      // 약관정보
      checkBoxContents: [
        {
          title: '[필수] 서비스 이용약관 동의',
          desc: '플랫폼의 서비스 이용약관 동의',
          required: true,
        },
        {
          title: '[필수] 개인 정보 수집 및 이용동의',
          desc: '개인정보 수집 및 이용동의',
          required: true,
        },
        {
          title: '[필수] 개인정보 제3자 제공에 대한 동의',
          desc: '개인정보 제3자 제공의',
          required: true,
        },
        {
          title: '[필수] 개인정보 취급 위탁에 대한 동의',
          desc: '개인정보 수집 및 이용동의',
          required: true,
        },
        {
          title: '[선택] 위치 기반 서비스 이용 약관 동의',
          desc: '위치기반 서비스 이용 약관',
          required: false,
        },
        {
          title: '[선택] 마케팅 활용 동의',
          desc: '마케팅 활용 동의',
          required: false,
        },
      ],
      // 모달
      modalOpen: false,
      modalContent: {
        title: '',
        desc: '',
      },
      // 체크박스
      checkedList: [],
      allChecked: false,
    };
  },
  computed: {
    // 필수 체크박스
    requiredChecked() {
      return this.checkBoxContents.every((item, index) => !item.required || this.checkedList[index]);
    },
  },
  methods: {
    // 모달
    openModal(index) {
      this.modalContent = {
        title: this.checkBoxContents[index].title,
        desc: this.checkBoxContents[index].desc,
      };
      this.modalOpen = true;
    },
    // 모달 닫기
    closeModal() {
      this.modalOpen = false;
    },
    // 전체 체크박스
    toggleAll() {
      this.checkedList = this.checkBoxContents.map(() => this.allChecked);
    },
    // 전체 체크박스 업데이트
    updateAllChecked() {
      this.allChecked = this.checkedList.every((checked, index) => !this.checkBoxContents[index] || checked);
    },
    // 다음 페이지
    nextPage() {
      window.location.href = '/join/check';
    },
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      > label {
        > p {
          font-size: 0.875rem;
          font-weight: 700;
          margin-right: 43px;
        }

        > .indicator {
          width: 27px;
          height: 27px;
          border: 1px solid var(--white350);

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

      > p {
        font-size: 0.875rem;
      }
    }

    > ul {
      border-top: 1px solid #d9d9d9;

      > li {
        width: 100%;
        margin: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 0.875rem;

        &:last-child {
          margin: 0;
        }

        .title {
          display: flex;
          align-items: center;
          p {
            font-size: 0.875rem;
            color: #bbb;
          }

          button {
          margin-left: 10px;
          font-size: 0.875rem;
          color: var(--mainColor);
          background-color: transparent;
          text-decoration: underline;
          text-underline-position: under;
          cursor: pointer;
        }
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
      right: 0;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid var(--white350);

      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 7px;
        width: 5px;
        height: 10px;
        border: solid var(--white);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      &.checked {
        background-color: var(--mainColor);
        border-color: var(--mainColor);
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
