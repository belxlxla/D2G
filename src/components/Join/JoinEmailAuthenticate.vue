<template>
  <!-- 이메일 인증 -->
  <div class="joinEmailCheck">
    <p>
      입력한 이메일로 이동하여 이메일 인증을 완료해 주세요.<br />
      이메일 인증 완료 후 아래 ‘인증 버튼을 눌러 주세요.
    </p>

    <div class="detail">
      <p>이메일 인증 방법 안내</p>
      <a href="#">[자세히 보기]</a>
    </div>

    <div class="twoBtnBox">
      <button type="button" class="cancelBtn">이전</button>
      <button type="button" class="mainBtn">인증하기</button>
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

  > p {
    font-size: 0.75rem;
    
  }

  .detail {
    margin-bottom: 10px;
    display: flex;
    font-size: 0.75rem;
    
    a {
      margin-left: 0.25rem;
      font-weight: 800;
      color: #261863;
    }
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
}
</style>
