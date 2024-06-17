<template>
  <!-- 비밀번호 변경 -->
  <div class="passwordChange">
    <p>초기화할 비밀번호를 입력해 주세요.</p>

    <form @submit.prevent="validateForm">
      <div class="inputBox">
        <div class="passwordInput">
          <label for="password" class="blind">초기화 비밀번호 입력</label>
          <input
            v-model="password"
            class="inputStyle"
            id="password"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="비밀번호 입력"
            minlength="8"
            maxlength="20"
            autocomplete="off"
            required
          />

          <button type="button" @click="togglePasswordVisibility">
            <img src="../../assets/images/icon/icon_eye.svg" alt="눈동자">
          </button>
        </div>

        <div class="passwordInput">
          <label for="passwordCheck" class="blind">비밀번호 확인</label>
          <input
            v-model="passwordCheck"
            class="inputStyle"
            id="passwordCheck"
            name="passwordCheck"
            :type="showPasswordCheck ? 'text' : 'password'"
            placeholder="비밀번호 확인"
            minlength="8"
            maxlength="20"
            autocomplete="off"
            required
          />

          <button type="button" @click="togglePasswordCheckVisibility">
            <img src="../../assets/images/icon/icon_eye.svg" alt="눈동자">
          </button>
        </div>
      </div>

      <div class="beware">
        <img src="../../assets/images/icon/icon_beware.svg" alt="주의" />
        <p>8~20자의 영문/대소문자, 숫자, 특수문자 중 3가지 이상을 혼용하여 입력해 주세요.</p>
      </div>

      <button type="submit" class="mainBtn">변경하기</button>
    </form>

     <!-- 에러모달 -->
     <div id="errorModal" v-if="showErrorModal">
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      showPasswordCheck: false,
      password: '',
      passwordCheck: '',
      showErrorModal: false,
      errorMessage: ''
    };
  },
  methods: {
    // 에러모달
    showError(message) {
      this.errorMessage = message;
      this.showErrorModal = true;
      setTimeout(() => {
        this.showErrorModal = false;
        this.errorMessage = '';
      }, 3000);
    },
    // 비밀번호 확인
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    // 비밀번호 검증 확인
    togglePasswordCheckVisibility() {
      this.showPasswordCheck = !this.showPasswordCheck;
    },
     // 비밀번호 유효성 검사
     isValidPassword(password) {
      const minLength = 8;
      const maxLength = 20;
      const lengthCheck = password.length >= minLength && password.length <= maxLength;
      const lowerCaseCheck = /[a-z]/.test(password);
      const upperCaseCheck = /[A-Z]/.test(password);
      const numberCheck = /[0-9]/.test(password);
      const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const criteriaCount = [lowerCaseCheck, upperCaseCheck, numberCheck, specialCharCheck].filter(Boolean).length;
      return lengthCheck && criteriaCount >= 3;
    },
    // 유효성 검사
    validateForm() {
      this.errorMessage = '';
      if (!this.isValidPassword(this.password)) {
        this.showError(this.errorMessage = '비밀번호가 규칙에 맞지않습니다.');
        return;
      }
      if (this.password !== this.passwordCheck) {
        this.showError(this.errorMessage = '비밀번호가 일치하지 않습니다.');
        return;
      }
      window.location.href = '/find/password/success';
    },
  }
};
</script>

<style lang="scss" scoped>
.passwordChange {
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

  .passwordInput {
    position: relative;

    &:first-child {
      margin-bottom: 10px;
    }

    input {
      padding-right: 15px;
    }

    button {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      font-size: 0;
      background-color: transparent;
      cursor: pointer;
      width: 16px;
    }
  }

  .beware {
    margin: 10px 0 20px;
    display: flex;
    align-items: flex-start;

    font-size: 0.75rem;
    font-weight: 700;

    img {
      width: 0.75rem;
      height: 0.75rem;
      margin: 2px 5px 0 0;
    }
  }
}
</style>
