import { createRouter, createWebHistory } from "vue-router";

// 로그인
import LoginPage from "@/pages/LoginPage.vue";
// 아이디
import FindIdPage from "@/pages/Find/FindIdPage.vue";
import FindIdMobile from "@/pages/Find/FindIdMobile.vue";
import FindIdMobileCheck from "@/pages/Find/FindIdMobileCheck.vue";
import FindIdSucces from "@/pages/Find/FindIdSucces.vue";
// 비밀번호
import FindPasswordPage from "@/pages/Find/FindPasswordPage.vue";
import FindPwMobile from "@/pages/Find/FindPwMobile.vue";
import FindPwMobileCheck from "@/pages/Find/FindPwMobileCheck.vue";
import FindPwChangePage from "@/pages/Find/FindPwChangePage.vue";
import FindPwSucces from "@/pages/Find/FindPwSucces.vue";
// 본인인증
import FindAuthenticate from "@/pages/Find/FindAuthenticate.vue";
// 회원가입
import JoinPage from "@/pages/Join/JoinPage.vue";
import JoinCheck from "@/pages/Join/JoinCheck.vue";
import JoinMobile from "@/pages/Join/JoinMobile.vue";
import JoinMobileCheck from "@/pages/Join/JoinMobileCheck.vue";
import JoinEmail from "@/pages/Join/JoinEmail.vue";
import JoinEmailCheck from "@/pages/Join/JoinEmailCheck.vue";
import JoinInfo from "@/pages/Join/JoinInfo.vue";
import JoinEasyPassword from "@/pages/Join/JoinEasyPassword.vue";
// 마이페이지
import MyPage from "@/pages/MyPage.vue";
// 견종백과
import DictionaryPage from "@/pages/Dictionary/DictionaryPage.vue";
import DictionaryDetailPage from "@/pages/Dictionary/DictionaryDetailPage.vue";

const routes = [
  // 로그인
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  // 아이디
  {
    path: '/find/id',
    name: 'FindIdPage',
    component: FindIdPage,
  },
  {
    path: '/find/id/mobile',
    name: 'FindIdMobile',
    component: FindIdMobile,
  },
  {
    path: '/find/id/mobilecheck',
    name: 'FindIdMobileCheck',
    component: FindIdMobileCheck,
  },
  {
    path: '/find/id/success',
    name: 'FindIdSuccess',
    component: FindIdSucces,
  },
  // 비밀번호
  {
    path: '/find/password',
    name: 'FindPasswordPage',
    component: FindPasswordPage,
  },
  {
    path: '/find/password/mobile',
    name: 'FindPwMobile',
    component: FindPwMobile,
  },
  {
    path: '/find/password/mobilecheck',
    name: 'FindPwMobileCheck',
    component: FindPwMobileCheck,
  },
  {
    path: '/find/password/change',
    name: 'FindPwChangePage',
    component: FindPwChangePage,
  },
  {
    path: '/find/password/success',
    name: 'FindPwSuccess',
    component: FindPwSucces,
  },
  // 본인인증
  {
    path: '/find/authenticate',
    name: 'FindAuthenticate',
    component: FindAuthenticate,
  },
  // 회원가입
  {
    path: '/join',
    name: 'JoinPage',
    component: JoinPage,
  },
  {
    path: '/join/check',
    name: 'JoinCheck',
    component: JoinCheck,
  },
  {
    path: '/join/mobile',
    name: 'JoinMobile',
    component: JoinMobile,
  },
  {
    path: '/join/mobilecheck',
    name: 'JoinMobileCheck',
    component: JoinMobileCheck,
  },
  {
    path: '/join/email',
    name: 'JoinEmail',
    component: JoinEmail,
  },
  {
    path: '/join/emailcheck',
    name: 'JoinEmailCheck',
    component: JoinEmailCheck,
  },
  {
    path: '/join/info',
    name: 'JoinInfo',
    component: JoinInfo,
  },
  {
    path: '/join/easypassword',
    name: 'JoinEasyPassword',
    component: JoinEasyPassword,
  },
  // 마이페이지
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
  },
  // 견종백과
  {
    path: '/dictionary',
    name: 'DictionaryPage',
    component: DictionaryPage,
  },
  {
    path: '/dictionary/:id',
    name: 'DictionaryDetailPage',
    component: DictionaryDetailPage,
    props: true, // props를 통해 라우트 파라미터를 컴포넌트로 전달
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

