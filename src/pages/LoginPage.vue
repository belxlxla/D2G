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

      <!-- 로그인 입력 창 -->
      <form id="inputBox">
        <input type="text" placeholder="아이디를 입력해주세요." required />
        <input type="password" placeholder="비밀번호를 입력해주세요." required />
      </form>
    </div>

    <!-- 로그인 버튼 -->
    <div id="btnBox">
      <button type="submit" class="loginBtn">로그인</button>

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
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/loginPage.scss';
</style>
