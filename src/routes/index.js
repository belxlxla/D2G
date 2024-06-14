import { createRouter, createWebHistory } from "vue-router";

// 로그인
import LoginPage from "@/pages/LoginPage.vue";
// 아이디
import FindIdPage from "@/pages/Find/FindIdPage.vue";
import FindIdSucces from "@/pages/Find/FindIdSucces.vue";
// 비밀번호
import FindPasswordPage from "@/pages/Find/FindPasswordPage.vue";
import FindPwChangePage from "@/pages/Find/FindPwChangePage.vue";
import FindPwSucces from "@/pages/Find/FindPwSucces.vue";
// 회원가입
import JoinPage from "@/pages/Join/JoinPage.vue";
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
    path: '/find/password/change',
    name: 'FindPwChangePage',
    component: FindPwChangePage,
  },
  {
    path: '/find/password/success',
    name: 'FindPwSuccess',
    component: FindPwSucces,
  },
  // 회원가입
  {
    path: '/join',
    name: 'JoinPage',
    component: JoinPage,
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

