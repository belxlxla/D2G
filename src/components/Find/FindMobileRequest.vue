<template>
  <!-- 휴대폰 인증 요청 -->
  <div class="mobileRequestContainer">
    <p>휴대폰 인증을 위해 정보를 입력해주세요.</p>
    <form>
      <input class="inputStyle" type="text" placeholder="이름" required />

      <div class="securityNumber">
        <input class="inputStyle" type="text" placeholder="생년월일(6자리)" maxlength="6" required />
        <span>-</span>
        <input class="inputStyle" type="password" placeholder="" maxlength="1" required />
        <span class="circle">●●●●●●</span>
      </div>

      <div class="mobileNumber">
        <div class="selectBox">
          <label for="mobile">통신사</label>
          <select name="mobile" id="mobile" required>
            <option value="">통신사</option>
            <option value="">SKT</option>
            <option value="">KT</option>
            <option value="">LG</option>
          </select>
        </div>

        <input class="inputStyle" type="text" placeholder="휴대폰 번호" required/>
      </div>
      <div class="beware">
        <img src="../../assets/images/icon/icon_beware.svg" alt="주의" />
        <p>공백 특수기호 없이 숫자만 입력하세요.</p>
      </div>
      <div class="twoBtnBox">
        <button type="button" class="cancelBtn">이전</button>
        <button type="submit" class="mainBtn">발송하기</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mobileRequestContainer {
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
    .securityNumber {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f0f0f0;
      border-radius: 10px;
      margin: 10px 0;

      > input {
        background-color: transparent;
      }

      .circle {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);

        font-size: 0.75rem;
      }
    }

    .beware {
      margin: 10px 0;
      display: flex;
      align-items: center;

      font-size: 0.75rem;

      img {
        width: 0.75rem;
        height: 0.75rem;
        margin-right: 5px;
      }
    }

    .mobileNumber {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .selectBox {
        position: relative;
        width: 102px;
        height: 40px;
        border-radius: 10px;
        background-color: #f0f0f0;

        label {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 10px;
          height: 10px;
          background-image: url(../../assets/images/icon/icon_nav_arrow_bottom.svg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 10px;

          font-size: 0;
        }
        select {
          width: 100%;
          height: 100%;
          padding: 10px;
          background-color: transparent;

          font-size: 0.75rem;
          color: #b8b8b8;

          &:focus {
            outline: none;
          }

          option {
            color: var(--black);
          }
        }
      }

      > input {
        max-width: 192px;
      }
    }
  }
}
</style>
