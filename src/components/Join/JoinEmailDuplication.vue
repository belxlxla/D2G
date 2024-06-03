<template>
  <!-- 이메일 중복 확인 -->
  <div class="joinEmailCheck">
    <form>
      <label for="email">이메일 주소</label>
      <div class="emailBox">
        <input class="inputStyle" name="email" id="email" type="text" placeholder="이메일 주소" required />
        <button class="mainBtn">중복 확인</button>
      </div>
    </form>

    <div class="message">
      <span class="succes"> 회원가입이 가능합니다. </span>
      <span class="error"> 이메일이 중복되었습니다. </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.joinEmailCheck {
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
    label {
      font-size: 0.75rem;
      margin-bottom: 10px;
    }

    .emailBox {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        max-width: 201px;
      }

      button {
        max-width: 93px;
      }
    }
  }

  .message {
    margin-top: 5px;
    font-size: 0.75rem;

    .error {
      color: #ff0000;
      font-weight: 700;
    }
  }
}
</style>
