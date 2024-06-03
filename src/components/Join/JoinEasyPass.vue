<template>
  <!-- 간편 비밀번호 -->
  <div class="joinEasyPass">
    <div class="text">
      <h3>간편 비밀번호 설정</h3>
      <p>댕이고 APP 서비스에서 추가인증으로 이용하실 수 있습니다.</p>
    </div>

    <form>
      <div class="passwordBox">
        <label for="easyPassword">간편 비밀번호 (숫자 4자리)</label>

        <div class="inputBox">
          <input v-model="password[0]" ref="pw0" :class="getClass(password[0], 0)" type="password" maxlength="1" @input="handleInput(0)" required />
          <input v-model="password[1]" ref="pw1" :class="getClass(password[1], 1)" type="password" maxlength="1" @input="handleInput(1)" required />
          <input v-model="password[2]" ref="pw2" :class="getClass(password[2], 2)" type="password" maxlength="1" @input="handleInput(2)" required />
          <input v-model="password[3]" ref="pw3" :class="getClass(password[3], 3)" type="password" maxlength="1" @input="handleInput(3)" required />
        </div>
      </div>

      <div class="passwordBox2">
        <label for="easyPassword2">간편 비밀번호 재입력</label>

        <div class="inputBox">
          <input v-model="passwordConfirm[0]" ref="pwConfirm0" :class="getClass(passwordConfirm[0], 0, true)" type="password" maxlength="1" @input="handleInputConfirm(0)" required />
          <input v-model="passwordConfirm[1]" ref="pwConfirm1" :class="getClass(passwordConfirm[1], 1, true)" type="password" maxlength="1" @input="handleInputConfirm(1)" required />
          <input v-model="passwordConfirm[2]" ref="pwConfirm2" :class="getClass(passwordConfirm[2], 2, true)" type="password" maxlength="1" @input="handleInputConfirm(2)" required />
          <input v-model="passwordConfirm[3]" ref="pwConfirm3" :class="getClass(passwordConfirm[3], 3, true)" type="password" maxlength="1" @input="handleInputConfirm(3)" required />
        </div>
      </div>
    </form>
    <div class="message" v-if="hasError">
      <p class="error">{{ errorMessage }}</p>
    </div>

    <div id="joinFooter">
      <button class="checkBtn" :disabled="!passwordsMatch" type="submit">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ['', '', '', ''],
      passwordConfirm: ['', '', '', ''],
      hasError: false,
      errorMessage: '공백 특수기호 없이 숫자만 입력해 주세요',
      passwordsMatch: false,
    };
  },
  watch: {
    password: {
      handler() {
        this.validatePasswords();
      },
      deep: true,
    },
    passwordConfirm: {
      handler() {
        this.validatePasswords();
      },
      deep: true,
    },
  },
  methods: {
    // 주어진 값이 한 자리 숫자인지 확인
    isNumber(value) {
      return /^[0-9]$/.test(value);
    },
    // 입력값, 인덱스 및 확인 비밀번호인지 여부에 따라 CSS 클래스를 결정
    getClass(value, index, isConfirm = false) {
      if (value === '') return '';
      if (!this.isNumber(value) || (!this.passwordsMatch && isConfirm)) return 'error';
      return 'filled';
    },
    // 주 비밀번호 필드에 대한 입력 처리, 유효하면 다음 필드로 포커스 이동, 그렇지 않으면 입력값 지움
    handleInput(index) {
      if (this.isNumber(this.password[index])) {
        if (index < 3) {
          this.$refs[`pw${index + 1}`].focus();
        } else {
          this.$refs.pwConfirm0.focus();
        }
      } else {
        this.password[index] = '';
      }
    },
    // 확인 비밀번호 필드에 대한 입력 처리, 유효하면 다음 필드로 포커스 이동, 그렇지 않으면 입력값 지움
    handleInputConfirm(index) {
      if (this.isNumber(this.passwordConfirm[index])) {
        if (index < 3) {
          this.$refs[`pwConfirm${index + 1}`].focus();
        }
      } else {
        this.passwordConfirm[index] = '';
      }
    },
    // 비밀번호 유효성 검사, 비밀번호와 확인 비밀번호가 모두 완성되었는지 확인하고 일치하는지 확인
    validatePasswords() {
      const isPasswordComplete = this.password.every(char => char !== '');
      const isPasswordConfirmComplete = this.passwordConfirm.every(char => char !== '');
      
      if (isPasswordComplete && isPasswordConfirmComplete) {
        const password = this.password.join('');
        const passwordConfirm = this.passwordConfirm.join('');
        
        if (password !== passwordConfirm) {
          this.hasError = true;
          this.passwordsMatch = false;
          this.errorMessage = '비밀번호가 일치하지 않습니다.';
        } else {
          this.hasError = false;
          this.passwordsMatch = true;
        }
      } else {
        this.hasError = this.password.some(char => !this.isNumber(char)) || this.passwordConfirm.some(char => !this.isNumber(char));
        if (this.hasError) {
          this.errorMessage = '공백 특수기호 없이 숫자만 입력해 주세요';
        }
        this.passwordsMatch = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/joinPage.scss';

.joinEasyPass {
  .text {
    margin: 50px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    p {
      width: 260px;
    }
  }

  form {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:first-child {
        margin-bottom: 60px;
      }

      label {
        font-size: 0.875rem;
      }

      .inputBox {
        display: flex;
        gap: 10px;

        input {
          width: 30px;
          height: 42px;
          border-bottom: 4px solid #a3a3a3;
          text-align: center;

          &:focus {
            outline: none;
          }

          // 값이 입력되었을 때
          &.filled {
            color: var(--mainColor);
            border-color: var(--mainColor);
          }
          // 에러가 있을 때
          &.error {
            color: #FF0000;
            border-color: #FF0000;
          }
        }
      }
    }
  }

  .message {
    margin-top: 24px;
    font-size: 0.75rem;
    text-align: center;

    .error {
      color: #ff0000;
      font-weight: 700;
    }
  }
}
</style>
