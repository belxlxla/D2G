<template>
  <!-- 회원정보 입력 -->
  <div class="joinInfo">
    <form id="joinForm" @submit.prevent="handleSubmit">
      <!-- 이메일 주소 입력 -->
      <fieldset>
        <legend>
          이메일 주소

          <!-- 에러 -->
          <span v-if="errors.emailUser" class="error">{{ errors.emailUser }}</span>
        </legend>

        <div class="emailContainer">
          <div class="emailBox">
            <label for="emailUser" class="blind">이메일 입력</label>
            <input v-model="emailUser" class="inputStyle" id="emailUser" name="emailUser" type="text" placeholder="이메일 입력" required />
            <span>@</span>
            <label for="customDomain" class="blind">도메인 입력</label>
            <input v-model="customDomain" class="inputStyle" id="customDomain" name="customDomain" type="text" :disabled="!isCustomDomain" required />
            <div class="selectBox">
              <label for="emailDomain">도메인 선택</label>
              <select v-model="emailDomain" id="emailDomain" name="emailDomain" @change="handleEmailDomainChange" required>
                <option value="self">직접입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
              </select>
            </div>
            <div>
              <button type="button" @click="checkDuplicateId">중복확인</button>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- 비밀번호 입력 -->
      <fieldset>
        <legend>
          비밀번호

          <!-- 에러 -->
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </legend>
        <div class="passwordBox">
          <div class="passwordInput">
            <label for="password" class="blind">비밀번호 입력</label>
            <input v-model="password" class="inputStyle" id="password" name="password" :type="showPassword ? 'text' : 'password'" placeholder="비밀번호 입력" minlength="8" maxlength="20" autocomplete="off" required />
            <button type="button" @click="togglePasswordVisibility">
              <img src="../../assets/images/icon/icon_eye.svg" alt="눈동자" />
            </button>
          </div>
          <div class="passwordInput">
            <label for="passwordCheck" class="blind">비밀번호 확인</label>
            <input v-model="passwordCheck" class="inputStyle" id="passwordCheck" name="passwordCheck" :type="showPasswordCheck ? 'text' : 'password'" placeholder="비밀번호 확인" minlength="8" maxlength="20" autocomplete="off" required />
            <button type="button" @click="togglePasswordCheckVisibility">
              <img src="../../assets/images/icon/icon_eye.svg" alt="눈동자" />
            </button>
          </div>
          <div class="beware">
            <img src="../../assets/images/icon/icon_beware.svg" alt="주의" />
            <p>8~20자의 영문/대소문자, 숫자, 특수문자 중 3가지 이상을 혼용하여 입력해 주세요.</p>
          </div>
        </div>
      </fieldset>

      <!-- 개인정보 입력 -->
      <fieldset>
        <legend class="blind">개인정보</legend>
        <div class="nameBox">
          <label for="name">이름</label>
          <input v-model="name" class="inputStyle" type="text" placeholder="이름" disabled required />
        </div>
        <div class="birthdayBox">
          <label for="birthday">생년월일</label>
          <input v-model="birthDay" class="inputStyle" type="text" placeholder="생년월일" disabled required />
        </div>
        <div class="mobileNumber">
          <label for="mobile">휴대폰 번호</label>
          <input v-model="mobile" class="inputStyle" type="text" placeholder="휴대폰번호" disabled required />
        </div>

        <!-- 에러 -->
        <p v-if="errors.name || errors.birthDay || errors.mobile" class="error">{{ errors.personalInfo }}</p>
      </fieldset>

      <!-- 선택항목 입력 -->
      <fieldset>
        <legend>선택항목</legend>
        <div class="jobBox">
          <select v-model="job" name="job" id="job">
            <option value="default">직업을 선택하세요.</option>
            <option value="job1">직업1</option>
            <option value="job2">직업2</option>
          </select>
        </div>
        <div class="hobbyBox">
          <select v-model="hobby" name="hobby" id="hobby">
            <option value="default">취미를 선택하세요.</option>
            <option value="hobby1">취미1</option>
            <option value="hobby2">취미2</option>
          </select>
        </div>
        <div class="likeDog">
          <select v-model="likeDog" name="likeDog" id="likeDog">
            <option value="default">좋아하는 견종을 선택하세요.</option>
            <option value="breed1">견종1</option>
            <option value="breed2">견종2</option>
          </select>
        </div>
        <div class="address">
          <label for="address">거주지역</label>
          <input v-model="address" type="text" id="address" name="address" placeholder="시/도-군/구까지 입력하세요.(ex)서울시 강남구" />
        </div>
        <div class="birthTime">
          <select v-model="birthTime" name="birthTime" id="birthTime">
            <option value="default">태어난 시간을 선택하세요.</option>
            <option value="time1">시간1</option>
            <option value="time2">시간2</option>
          </select>
        </div>
      </fieldset>

      <!-- 제출 버튼 -->
      <button form="joinForm" class="mainBtn" type="submit">반려견 등록하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 이메일
      emailUser: '',
      emailDomain: 'self',
      customDomain: '',
      isCustomDomain: true,
      // 비밀번호
      showPassword: false,
      showPasswordCheck: false,
      password: '',
      passwordCheck: '',
      // 개인정보 (인증정보)
      name: 'ㅇㅇㅇ',
      birthDay: 'YYYY.MM.DD',
      mobile: '010-1234-5678',
      // 선택사항
      job: 'default',
      hobby: 'default',
      likeDog: 'default',
      address: '',
      birthTime: 'default',
      // 에러메세지
      errorMessage: '',
      errors: {
        emailUser: '',
        customDomain: '',
        password: '',
        personalInfo: '',
      },
    };
  },
  watch: {
    emailDomain(newVal) {
      if (newVal !== 'self') {
        this.customDomain = newVal;
      } else {
        this.customDomain = '';
      }
      this.isCustomDomain = newVal === 'self';
    },
  },
  methods: {
    // 이메일 입력방식 변경
    handleEmailDomainChange() {
      this.isCustomDomain = this.emailDomain === 'self';
    },
    // 이메일 중복검사
    async checkDuplicateId() {
      // 여기서 실제 ID 중복 확인 로직을 수행합니다.
      // const isDuplicate = await apiCheckDuplicateEmail(this.emailUser);
      // if (isDuplicate) {
      //   this.errors.emailUser = '이미 사용 중인 이메일입니다.';
      //   return false;
      // } else {
      //   this.errors.emailUser = '';
      //   return true;
      // }
    },
    // 이메일 유효성검사
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = this.isCustomDomain ? `${this.emailUser}@${this.customDomain}` : `${this.emailUser}@${this.emailDomain}`;
      if (!emailPattern.test(email)) {
        this.errors.emailUser = '이메일 주소를 확인해주세요.';
        return false;
      }
      this.errors.emailUser = '';
      return true;
    },
    // 비밀번호 확인
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    // 비밀번호 검증 확인
    togglePasswordCheckVisibility() {
      this.showPasswordCheck = !this.showPasswordCheck;
    },
    // 비밀번호 유효성검사
    validatePassword() {
      const minLength = 8;
      const maxLength = 20;
      const password = this.password;
      const lengthCheck = password.length >= minLength && password.length <= maxLength;
      const lowerCaseCheck = /[a-z]/.test(password);
      const upperCaseCheck = /[A-Z]/.test(password);
      const numberCheck = /[0-9]/.test(password);
      const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const criteriaCount = [lowerCaseCheck, upperCaseCheck, numberCheck, specialCharCheck].filter(Boolean).length;

      // 비밀번호 유효성 검사
      if (!lengthCheck || criteriaCount < 3) {
        this.errors.password = '비밀번호가 규칙에 맞지않습니다.';
        return false;
      }

      // 비밀번호 확인 일치 여부 검사
      if (this.password !== this.passwordCheck) {
        this.errors.password = '비밀번호가 일치하지 않습니다.';
        return false;
      }

      this.errors.password = '';
      return true;
    },
    validatePersonalInfo() {
      // 생년월일 유효성 검사 (YYYY.MM.DD 형식)
      const birthDayPattern = /^\d{4}\.\d{2}\.\d{2}$/;
      // 핸드폰 번호 유효성 검사 (010-1234-5678 형식)
      const mobilePattern = /^01[016789]-\d{3,4}-\d{4}$/;

      if (!this.name || !birthDayPattern.test(this.birthDay) || !mobilePattern.test(this.mobile)) {
        this.errors.personalInfo = '인증정보 오류';
        return false;
      }
      this.errors.personalInfo = '';
      return true;
    },
    async handleSubmit() {
      const isEmailValid = this.validateEmail();
      const isPasswordValid = this.validatePassword();
      const isPersonalInfoValid = this.validatePersonalInfo();
      // const isEmailUnique = await this.checkDuplicateId();

      if (!isEmailValid || !isPasswordValid || !isPersonalInfoValid) {
        return;
      }

      // 이메일 중복검사 포함
      // if (!isEmailUnique || !isEmailValid || !isPasswordValid || !isPersonalInfoValid) {
      //   return;
      // }

      this.email = this.isCustomDomain ? `${this.emailUser}@${this.customDomain}` : `${this.emailUser}@${this.emailDomain}`;
      console.log('Submitted email:', this.email);
      console.log('Submitted password:', this.password);
      console.log('Submitted name:', this.name);
      console.log('Submitted birthDay:', this.birthDay);
      console.log('Submitted mobile:', this.mobile);
      // 추가적인 제출 로직 수행
    },
  },
};
</script>

<style lang="scss" scoped>
.joinInfo {
  position: relative;
  padding: 5px 0 30px;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    top: 0;
    left: -20px;

    content: '';
    width: 1px;
    height: 100%;
    background-color: #d5d5d5;
  }

  form {
    fieldset {
      margin: 0;
      border: 0;
    }

    > div {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;

      label {
        font-size: 12px;
        margin-bottom: 10px;
      }
    }

    .error {
      font-size: 12px;
      font-weight: 700;
      color: #ff0000;
    }

    .emailContainer {
      margin-bottom: 20px;

      .emailBox {
      display: flex;
      align-items: center;
      flex-direction: row;
     
      span {
        margin: 0 5px;
      }

      .selectBox {
        position: relative;
        label {
          position: absolute;
          top: 50%;
          right: 3px;
          transform: translateY(-50%) rotate(90deg);
          width: 10px;
          height: 10px;
          background-image: url(/src/assets/images/icon/icon_nav_arrow_right.svg);
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: 5px;
          font-size: 0;
        }

        select {
          height: 40px;
          margin-left: 5px;
          padding: 0 15px 0 5px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          font-size: 0.7rem;
          text-align: center;
        }
      }
    }
    }
   

    .passwordBox {
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
          width: 20px;

          img {
            opacity: 0.3;
          }
        }
      }
    }

    .beware {
      margin: 10px 0;
      display: flex;
      align-items: flex-start;

      font-size: 0.75rem;

      img {
        width: 0.75rem;
        height: 0.75rem;
        margin: 2px 5px 0 0;
      }
    }
  }
}
</style>