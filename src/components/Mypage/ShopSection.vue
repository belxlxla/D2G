<template>
  <!-- 댕이고 SHOP 바로가기 -->
  <div class="shopBox">
    <h3>댕이고 SHOP</h3>

    <div class="shopMenu">
      <ul>
        <li>
          <a href="#">
            <div class="left">
              <img src="../../assets/images/icon/icon_shoppingCart.svg" alt="카트" />
              <span>내 주문내역 보러가기</span>
            </div>

            <img src="../../assets/images/icon/icon_nav_arrow_right.svg" alt="화살표" />
          </a>
        </li>

        <li>
          <a href="#">
            <div class="left">
              <img src="../../assets/images/icon/icon_delivery.svg" alt="상자" />
              <span>배송중 / 배송현황 / 반품 / 취소현황 보러가기</span>
            </div>

            <img src="../../assets/images/icon/icon_nav_arrow_right.svg" alt="화살표" />
          </a>
        </li>

        <li>
          <a href="#">
            <div class="left">
              <img src="../../assets/images/icon/icon_tag.svg" alt="태그" />
              <span>댕이고 SHOP SALE 품목 보러가기</span>
            </div>

            <img src="../../assets/images/icon/icon_nav_arrow_right.svg" alt="화살표" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.shopBox {
  padding: 0 20px;
  margin-bottom: 70px;

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .shopMenu {
    ul {
      border-top: 1px solid var(--black);
      border-bottom: 1px solid var(--black);
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 9px;
        border-bottom: 1px dotted var(--black);

        &:last-child {
          border: 0;
        }
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          font-size: 0.75rem;
          font-weight: 700;
        }

        img {
          width: 1rem;
          height: 1rem;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
