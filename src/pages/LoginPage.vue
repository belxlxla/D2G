<template>
  <!-- 로그인 페이지 -->
  <section id="loginPage">
    <div id="colorContainer">
      <!-- 로그인 상단 네비게이션 -->
      <div id="loginHeader">
        <nav>
          <h1 class="title">
            <a href="#">
              <img src="../assets/images/logo.png" alt="댕이고 로고" />
            </a>
          </h1>
          <ul>
            <li>
              <a href="#">
                <img src="../assets/images/icon/icon_nav_arrow_left.svg" alt="돌아가기" />
              </a>
            </li>
            <li>
              <button type="button" @click="burgerOpen()">
                <img src="../assets/images/icon/icon_settings.svg" alt="옵션" />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 로그인 입력 폼 -->
      <form id="loginForm" @submit.prevent="handleSubmit">
        <div class="emailBox">
          <label for="emailUser" class="blind">이메일 입력</label>
          <input id="emailUser" name="emailUser" type="text" v-model="emailUser" placeholder="이메일 입력" required />

          <span>@</span>

          <label for="customDomain" class="blind">도메인 입력</label>
          <input id="customDomain" name="customDomain" type="text" v-model="customDomain" :disabled="!isCustomDomain" required />

          <div class="selectBox">
            <label for="emailDomain">도메인 선택</label>
            <select id="emailDomain" name="emailDomain" v-model="emailDomain" @change="handleEmailDomainChange" required>
              <option value="self">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
            </select>
          </div>
        </div>

        <label for="password" class="blind">비밀번호 입력</label>
        <input id="password" name="password" type="password" v-model="password" placeholder="비밀번호를 입력해주세요." autocomplete="off" required />
      </form>
    </div>

    <!-- 로그인 버튼 -->
    <div id="btnBox">
      <button form="loginForm" type="submit" class="loginBtn">로그인</button>
      <div class="btnNav">
        <ul>
          <li>
            <router-link to="/find/id">아이디 찾기</router-link>
          </li>
          <li>
            <router-link to="/find/password">비밀번호 초기화</router-link>
          </li>
        </ul>
        <router-link to="/join" class="joinBtn">회원가입</router-link>
      </div>
    </div>
    
    <!-- 약관 / 개인정보 처리방침 -->
    <div id="loginFooter">
      <ul>
        <li>
          <a href="#">이용약관</a>
        </li>
        <li>
          <a href="#">개인정보 처리방침</a>
        </li>
      </ul>
    </div>

    <!-- 에러모달 -->
    <div id="errorModal" v-if="showErrorModal">
      <span>{{ errorMessage }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      emailUser: '',
      emailDomain: 'self',
      customDomain: '',
      isCustomDomain: true,
      email: '',
      password: '',
      showErrorModal: false,
      errorMessage: '',
      errors: {
        emailUser: '',
        customDomain: '',
        password: '',
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
    handleEmailDomainChange() {
      this.isCustomDomain = this.emailDomain === 'self';
    },
    // 에러모달
    showError(message) {
      this.errorMessage = message;
      this.showErrorModal = true;
      setTimeout(() => {
        this.showErrorModal = false;
        this.errorMessage = '';
      }, 3000);
    },
    // 이메일 유효성검사
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = this.isCustomDomain ? `${this.emailUser}@${this.customDomain}` : `${this.emailUser}@${this.emailDomain}`;
      if (!emailPattern.test(email)) {
        this.errors.emailUser = '이메일 주소를 확인해주세요.';
        this.showError(this.errors.emailUser);
        return false;
      }
      this.errors.emailUser = '';
      return true;
    },
    // 비밀번호 유효성검사
    validatePassword() {
      if (this.password.length < 8 || this.password.length > 20) {
        this.errors.password = '비밀번호를 확인해주세요.';
        this.showError(this.errors.password);
        return false;
      }
      this.errors.password = '';
      return true;
    },
    handleSubmit() {
      const isEmailValid = this.validateEmail();
      const isPasswordValid = this.validatePassword();
      if (isEmailValid && isPasswordValid) {
        this.email = this.isCustomDomain ? `${this.emailUser}@${this.customDomain}` : `${this.emailUser}@${this.emailDomain}`;

        // 확인용
        // console.log('Submitted email:', this.email);
        // console.log('Submitted password:', this.password);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/loginPage.scss';
</style>
