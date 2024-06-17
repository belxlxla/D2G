<template>
  <!-- 회원정보 입력 -->
  <div class="joinInfo">
    <p class="desc">로그인 정보 및 가입 정보를 입력하세요.</p>

    <form id="joinForm" @submit.prevent="handleSubmit">
      <h3>회원 정보 입력</h3>
      <!-- 이메일 주소 입력 -->
      <fieldset class="emailFieldset">
        <legend>
          이메일 주소

          <!-- 에러 -->
          <span v-if="errors.emailUser" class="error">{{ errors.emailUser }}</span>
        </legend>

        <div class="emailContainer">
          <div class="emailBox">
            <label for="emailUser" class="blind">이메일 입력</label>
            <input v-model="emailUser" class="inputStyle" id="emailUser" name="emailUser" type="text" placeholder="이메일 주소" required />

            <span>@</span>

            <label v-if="emailDomain === 'self'" for="customDomain" class="blind">도메인 입력</label>
            <input v-if="emailDomain === 'self'" v-model="customDomain" class="inputStyle" id="customDomain" name="customDomain" type="text" :disabled="!isCustomDomain" required />

            <div v-if="emailDomain !== 'self'" class="selectBox">
              <label for="emailDomain">도메인 선택</label>
              <select v-model="emailDomain" class="inputStyle" id="emailDomain" name="emailDomain" @change="handleEmailDomainChange" required>
                <option value="default">선택</option>
                <option value="self">직접입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.net">daum.net</option>
              </select>
            </div>
            <div>
              <button class="mainBtn" type="button" @click="checkDuplicateId">중복확인</button>
            </div>
          </div>
        </div>
      </fieldset>

      <!-- 비밀번호 입력 -->
      <fieldset class="passwordFieldset">
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
      <fieldset class="privacyFieldset">
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
      <h3>선택항목</h3>
      <fieldset class="selectFieldset">
        <legend class="blind">선택항목</legend>

        <div class="jobBox">
          <h4>직업</h4>

          <div class="selectBox">
            <label for="job">직업</label>
            <select v-model="job" class="inputStyle" name="job" id="job">
              <option value="default">직업을 선택하세요.</option>
              <option value="job1">직업1</option>
              <option value="job2">직업2</option>
            </select>
          </div>
        </div>

        <div class="hobbyBox">
          <h4>취미</h4>

          <div class="selectBox">
            <label for="hobby">취미</label>
            <select v-model="hobby" class="inputStyle" name="hobby" id="hobby">
              <option value="default">취미를 선택하세요.</option>
              <option value="hobby1">취미1</option>
              <option value="hobby2">취미2</option>
            </select>
          </div>
        </div>

        <div class="likeDog">
          <h4>좋아하는 견종</h4>

          <div class="selectBox">
            <label for="likeDog">좋아하는 견종</label>
            <select v-model="likeDog" class="inputStyle" name="likeDog" id="likeDog">
              <option value="default">좋아하는 견종을 선택하세요.</option>
              <option value="breed1">견종1</option>
              <option value="breed2">견종2</option>
            </select>
          </div>
        </div>

        <div class="address">
          <label for="address">거주지역</label>
          <input v-model="address" type="text" class="inputStyle" id="address" name="address" placeholder="시/도-군/구까지 입력하세요.(ex)서울시 강남구" />
        </div>

        <div class="birthTime">
          <h4>태어난 시간</h4>

          <div class="selectBox">
            <label for="birthTime">태어난 시간</label>
            <select v-model="birthTime" class="inputStyle" name="birthTime" id="birthTime">
              <option value="default">태어난 시간을 선택하세요.</option>
              <option value="time1">시간1</option>
              <option value="time2">시간2</option>
            </select>
          </div>
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
      emailDomain: 'default',
      customDomain: '',
      isCustomDomain: true,
      // 비밀번호
      showPassword: false,
      showPasswordCheck: false,
      password: '',
      passwordCheck: '',
      // 개인정보 (인증정보)
      name: 'ㅇㅇㅇ',
      birthDay: '1234.56.78',
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

      if (isEmailValid && isPasswordValid && isPersonalInfoValid) {
        console.log(isEmailValid);
        console.log(isPasswordValid);
        console.log(isPersonalInfoValid);

        this.email = this.isCustomDomain ? `${this.emailUser}@${this.customDomain}` : `${this.emailUser}@${this.emailDomain}`;
        console.log('email:', this.email);
        console.log('password:', this.password);
        console.log('name:', this.name);
        console.log('birthDay:', this.birthDay);
        console.log('mobile:', this.mobile);

        console.log('job:', this.job);
        console.log('hobby:', this.hobby);
        console.log('likeDog:', this.likeDog);
        console.log('address:', this.address);
        console.log('birthTime:', this.birthTime);
      }

      // 이메일 중복검사 포함
      // if (!isEmailUnique || !isEmailValid || !isPasswordValid || !isPersonalInfoValid) {
      //   return;
      // }

      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.joinInfo {
  position: relative;
  width: 100%;
  height: 100%;

  .desc {
    margin-bottom: 40px;
    font-size: 0.875rem;
    text-align: center;
  }

  form {
    > h3 {
      margin-left: 20px;
      margin-bottom: 18px;
      font-size: 0.75rem;
      font-weight: 700;
    }

    fieldset {
      margin: 0;
      border: 0;
      padding: 0 20px;

      &.emailFieldset {
        margin-bottom: 18px;
      }

      &.passwordFieldset {
        margin-bottom: 28px;
      }

      &.privacyFieldset {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;

        label {
          display: block;
          margin-bottom: 10px;
          font-size: 0.75rem;
        }
      }

      &.selectFieldset {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h4,
        .address > label {
          display: block;
          margin-bottom: 10px;
          font-size: 0.75rem;
        }
      }

      legend {
        font-size: 0.75rem;
        margin-bottom: 10px;
      }
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
      .emailBox {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 6px;

        #emailUser {
          max-width: 100px;
        }

        span {
          font-size: 0.75rem;
        }

        #customDomain {
          max-width: 113px;
        }

        select {
          width: 113px;
        }

        .mainBtn {
          width: 92px;
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
        }
      }
    }

    .selectBox {
      position: relative;
      label {
        position: absolute;
        top: 50%;
        right: 5px;
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
        padding: 0 15px 0 10px;
        border-radius: 10px;
        font-size: 0.7rem;
      }
    }

    > .mainBtn {
      margin-top: 76px;
      height: 70px;
      font-size: 1.375rem;
      border-radius: 0;
    }

    .beware {
      margin: 10px 0 0;
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
}
</style>
