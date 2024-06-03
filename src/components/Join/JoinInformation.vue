<template>
  <!-- 회원 정보 입력 -->
  <div class="joinInfo">
    <form>
      <div class="emailBox">
        <label for="email"> 이메일 주소 </label>
        <input class="inputStyle" type="text" placeholder="이메일 주소 입력" required />
      </div>

      <div class="passwordBox">
        <label for="password">비밀번호</label>
        <input class="inputStyle" name="password" id="passwrod" type="password" minlength="8" maxlength="20" placeholder="비밀번호 입력" required />
        <label for="" class="blind">비밀번호 확인</label>
        <input class="inputStyle" type="password" minlength="8" maxlength="20" placeholder="비밀번호 확인" required />

        <div class="beware">
          <img src="../../assets/images/icon/icon_beware.svg" alt="주의" />
          <p>8~20자의 영문/대소문자, 숫자, 특수문자 중 3가지 이상을 혼용하여 입력해 주세요.</p>
        </div>
      </div>

      <div class="nameBox">
        <label for="name">이름</label>
        <input class="inputStyle" type="text" placeholder="이름" required />
      </div>

      <button class="mainBtn" type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.joinInfo {
  position: relative;
  padding: 5px 0 30px;

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
    > div {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;

      label {
        font-size: 12px;
        margin-bottom: 10px;
      }
    }

    .passwordBox {
      input {
        &:nth-child(2) {
          margin-bottom: 10px;
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
