<template>
  <!-- 본인인증 -->
  <!-- 아이디찾기, 비밀번호 초기화, 회원가입에 사용 -->
  <div class="verificationContainer">
    <p>{{ desc }} 본인인증을 해주셔야 합니다.</p>
    <button type="button" class="mainBtn" @click="handleButtonClick">본인인증</button>

    <!-- 약관 체크박스 -->
    <div id="checkBox" :class="{ active: checkBoxFlag }">
      <ul>
        <li v-for="(el, i) in checkBoxContents" :key="i">
          <div class="check">
            <label :for="`check${i}`">
              <span class="indicator" :class="{ checked: checkedList[i] }"></span>
              <input
                :name="`check${i}`"
                :id="`check${i}`"
                type="checkbox"
                v-model="checkedList[i]"
              />
              <p>{{ el.title }}</p>
            </label>
          </div>
          <button type="button" @click="openModal(i)">더보기</button>
        </li>
      </ul>

      <div class="twoBtnBox">
        <button type="button" class="cancelBtn">이전</button>
        <button type="button" class="mainBtn" @click="checkAll">
          전체 동의
        </button>
      </div>
    </div>
  </div>

  <!-- 더보기 모달 -->
  <FindModal2
    v-if="modalOpen && modalContent.title && modalContent.desc"
    :isOpen="modalOpen"
    :modalContent="modalContent"
    @close="closeModal"
  />
</template>

<script>
import FindModal2 from '@/components/Find/FindModal2.vue';

export default {
  props: {
    desc: {
      type: String,
      required: true,
    },
  },
  components: {
    FindModal2,
  },
  data() {
    return {
      checkBoxContents: [
        {
          title: '[필수] 개인정보 수집/이용동의',
          desc: '개인정보 수집/이용동의 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
        },
        {
          title: '[필수] 고유식별정보 처리 동의',
          desc: '고유식별정보 처리 동의 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
        },
        {
          title: '[필수] 통신사 이용약관 동의',
          desc: '통신사 이용약관 동의 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
        },
        {
          title: '[필수] 서비스 이용약관 동의',
          desc: '서비스 이용약관 동의 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
        },
        {
          title: '[필수] 개인정보 제 3자 제공 동의 (알뜰폰)',
          desc: '개인정보 제 3자 제공 동의 (알뜰폰) 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용',
        },
      ],
      modalOpen: false,
      modalContent: {
        title: '',
        desc: '',
      },
      checkBoxFlag: false,
      checkedList: [],
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
    handleButtonClick() {
      this.checkBoxFlag = true;
    },
    checkAll() {
      this.checkedList = this.checkBoxContents.map(() => true);
    },
  },
  created() {
    this.checkedList = this.checkBoxContents.map(() => false);
  },
};
</script>

<style lang="scss" scoped>
.verificationContainer {
  position: relative;
  padding: 5px 0 30px;

  > p {
    font-size: 0.75rem;
    margin-bottom: 10px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: -20px;

    content: '';
    width: 1px;
    height: 100%;
    background-color: #d5d5d5;
  }

  #checkBox {
    margin-top: 20px;
    display: none;

    &.active {
      display: block;
    }

    > ul {
      > li {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: 0.75rem;

        &:last-child {
          margin-bottom: 25px;
        }

        div {
          label {
            display: flex;
            position: relative;

            > p {
              margin-left: 23px;
            }

            > .indicator {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: 0;
              width: 15px;
              height: 15px;
              margin-right: 8px;
              background-color: #f0f0f0;
              border-radius: 4px;
              cursor: pointer;

              &::after {
                content: '';
                position: absolute;
                top: 2px;
                left: 5px;
                width: 5px;
                height: 10px;
                border: solid #f0f0f0;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }

              &.checked {
                background: var(--mainColor);

                &::after {
                  border-color: var(--white);
                }
              }
            }

            > input {
              appearance: none;
              border: 0;
              border-radius: 0;

              &:checked ~ .indicator {
                background: var(--mainColor);

                &::after {
                  border-color: var(--white);
                }
              }
            }
          }
        }

        button {
          font-size: 0.75rem;
          color: #a9a9a9;
          background-color: transparent;
          cursor: pointer;

          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
  }
}
</style>
