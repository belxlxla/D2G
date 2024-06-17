<template>
  <!-- 체크리스트 -->
  <div class="checkListBox">
    <h3>Check List</h3>

    <!-- 체크리스트 슬라이더  -->
    <swiper :slidesPerView="1.5" :spaceBetween="10" :centeredSlides="true" class="listBox">
      <swiper-slide>
        <div class="list">
          <div class="list__inner">
            <div class="name"><span>수영이</span></div>
            <div class="textBox">
              <div class="text">
                <span>예방접종하기</span>
                <span class="dDay">D-3</span>
              </div>

              <a href="#">병원 예약 &gt;</a>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="list">
        <div class="list__inner">
          <div class="name"><span>수영이</span></div>
          <div class="textBox">
            <div class="text">
              <span>병원기록 정보 없음</span>
              <span class="dDay"></span>
            </div>

            <a href="#">등록하기 &gt;</a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="list">
        <div class="list__inner">
          <div class="name"><span>수영이</span></div>
          <div class="textBox">
            <div class="text">
              <span>병원기록 정보 없음</span>
              <span class="dDay"></span>
            </div>

            <a href="#">등록하기 &gt;</a>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="dotLine">
      <div></div>
    </div>

    <!-- 건강검진, 예방접종, 할인쿠폰 슬라이더 -->
    <swiper :slidesPerView="3" :spaceBetween="6" :loop="true" :initialSlide="0" :centeredSlides="true" class="listBox2">
      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_hospital.svg" alt="병원" />
          </div>
          <div class="desc">
            <p class="title">건강검진</p>
            <p class="dDay">2일</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_injection.svg" alt="주사" />
          </div>
          <div class="desc">
            <p class="title">예방접종</p>
            <p>25일</p>
            <p>경과</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_coupon.svg" alt="쿠폰" />
          </div>
          <div class="desc">
            <p class="title">댕댕샵 할인쿠폰</p>
            <p>5장</p>
          </div>
        </div>
      </swiper-slide>

      <!-- clone -->
      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_hospital.svg" alt="병원" />
          </div>
          <div class="desc">
            <p class="title">건강검진</p>
            <p class="dDay">2일</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_injection.svg" alt="주사" />
          </div>
          <div class="desc">
            <p class="title">예방접종</p>
            <p>25일</p>
            <p>경과</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="list">
          <div class="icon">
            <img src="../../assets/images/icon/icon_coupon.svg" alt="쿠폰" />
          </div>
          <div class="desc">
            <p class="title">댕댕샵 할인쿠폰</p>
            <p>5장</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.checkListBox {
  > h3 {
    padding: 0 20px;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .listBox {
    width: 100%;

    .list {
      display: flex;
      align-items: center;
      width: 249px;
      height: 60px;
      padding: 0 14px;
      background-color: var(--white);
      border-radius: 10px;

      .list__inner {
        width: 100%;

        .name {
          font-size: 0.75rem;
        }

        .textBox {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          font-weight: 700;

          > a {
            padding-top: 0.125rem;
            font-size: 0.75rem;
            color: #b8b6c0;
          }

          .dDay {
            color: #f53249;
          }
        }
      }
    }
  }

  .listBox2 {
    width: 100%;
    height: 151px;
    // padding: 0 20px;
    overflow: hidden;

    .swiper-slide {
      width: 102px;
      height: 121px;
      border-radius: 10px;
      overflow: hidden;
      // transition: width 0.3s, height 0.3s ease;
    }

    .swiper-slide-active {
      width: 120px;
      height: 154px;

      .icon {
        height: 85px;

        img {
          width: 46px;
          height: 46px;
        }
      }

      .desc {
        height: 69px;
        line-height: 1.4;

        p {
          &.title,
          &:nth-child(3) {
            font-size: 0.75rem;
          }

          &:nth-child(2) {
            font-size: 1.125rem;
            font-weight: 800;
          }
        }
      }
    }

    .swiper-slide-prev {
      padding-left: 20px;
    }

    .swiper-slide-next {
      padding-right: 20px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
      background-color: var(--white);
      border-radius: 10px 10px 0 0;

      img {
        width: 30px;
        height: 30px;
      }
    }

    .desc {
      height: 49px;
      padding-top: 7px;
      background-color: #efeded;
      text-align: center;
      line-height: 1.2;
      border-radius: 0 0 10px 10px;

      p {
        &.title,
        &:nth-child(3) {
          font-size: 0.625rem;
        }

        &:nth-child(2) {
          font-size: 0.875rem;
          font-weight: 800;

          &.dDay {
            color: #d44656;
          }
        }
      }
    }
  }
}
</style>
