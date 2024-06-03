<template>
  <!-- 더보기 모달 -->
  <!-- 본인인증 컴퍼넌트, 회원가입 이용약관 페이지에서 더보기를 누른 title과 desc를 modalContents 배열에 담아 받아옴 -->
  <div :class="{'findModal2': true, 'active' : isOpen}">
    <div class="findModalBox">
      <div class="modalHeader">
        <!-- 제목 -->
        <h3>{{ modalContent.title }}</h3>
        <button type="button" @click="closeModal">
          <img src="../../assets/images/icon/icon_close.svg" alt="닫기" />
        </button>
      </div>
      <div class="text">
        <!-- 내용 -->
        <pre class="scrollBar">{{  modalContent.desc }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    modalContent: {
      type: Object,
      required: true,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.findModal2 {
  &.active {
    display: flex;
  }

  position: absolute;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(000, 000, 000, 0.5);
  z-index: 10;

  .findModalBox {
    width: 330px;
    height: 285px;
    padding: 22px 22px 0;
    background-color: var(--white);
    border-radius: 10px;
    text-align: right;

    .modalHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-size: 0.875rem;
        font-weight: 900;
      }

      button {
        background-color: transparent;
        cursor: pointer;

        img {
          width: 1.125rem;
          height: 1.125rem;
        }
      }
    }

    .text {
      width: calc(100% - 4px);
      height: calc(100% - 20px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      pre {
        width: 100%;
        height: 100%;

        font-size: 0.875rem;
        font-family: var(--nanum);
        overflow: auto;
        white-space: pre-wrap;
        text-align: left;
      }
    }

    > a {
      font-size: 1rem;
      font-weight: 800;
      color: #eed0a3;
    }
  }
}
</style>
