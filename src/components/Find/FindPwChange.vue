<template>
  <!-- 비밀번호 변경 -->
  <div class="passwordChange">
    <p>초기화할 비밀번호를 입력해 주세요.</p>

    <form>
      <div class="inputBox">
        <input class="inputStyle" type="password" placeholder="비밀번호 입력" minlength="8" maxlength="20" required />
        <input class="inputStyle" type="password" placeholder="비밀번호 확인" minlength="8" maxlength="20" required />
      </div>

      <div class="beware">
        <img src="../../assets/images/icon/icon_beware.svg" alt="주의" />
        <p>8~20자의 영문/대소문자, 숫자, 특수문자 중 3가지 이상을 혼용하여 입력해 주세요.</p>
      </div>

      <button type="submit" class="mainBtn">변경하기</button>
    </form>
  </div>
</template>

<script>
export default {};
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

  .inputBox {
    input {
      &:first-child {
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
</style>
