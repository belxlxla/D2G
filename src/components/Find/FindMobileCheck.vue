<template>
  <!-- 휴대폰 인증 확인 -->
  <div id="mobileCheckContainer">
    <p>휴대폰으로 전송된 인증 코드를 입력하세요.</p>
    <form>
      <div class="check">
        <div class="inputBox">
          <input type="text" placeholder="인증번호 입력" class="inputStyle" required />
          <span>5:30</span>
        </div>
        <button type="button" class="mainBtn">재전송</button>
      </div>

      <div class="twoBtnBox">
        <button type="button" class="cancelBtn">이전</button>
        <button type="submit" class="mainBtn">인증하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#mobileCheckContainer {
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

  form {
    .check {
      margin-bottom: 10px;
      display: flex;
      align-self: start;
      justify-content: space-between;

      .inputBox {
        position: relative;
        width: 201px;

        > span {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);

          font-size: 0.75rem;
          color: #ff0000;
        }
      }

      button {
        max-width: 93px;
      }
    }
  }
}
</style>
