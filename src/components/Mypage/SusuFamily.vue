<template>
  <!-- 수수패밀리 -->
  <section id="susuFamily" :class="{ active: activeFlag }">
    <h3>SUSU FAMILY</h3>
    
    <!-- 수수 패밀리 슬라이더 -->
    <swiper :slidesPerView="2" :spaceBetween="10" :centeredSlides="true" class="sliderBox">
      <swiper-slide class="slider">
        <!-- class에 mainPet이 붙는 경우에 '대표강아지'가 나타남 -->
        <div class="infoBox mainPet">
          <div class="img">
            <img src="../../assets/images/test_dog.jpg" alt="테스트용" />
          </div>

          <div class="text">
            <div class="care">
              <span class="date">30</span>
              <span>일째 케어중</span>
            </div>

            <div class="name">
              <span>수영이</span>
              <button type="button">
                <img src="../../assets/images/icon/icon_pencil.svg" alt="수정" />
              </button>
            </div>

            <div class="type">저먼 포인터</div>
          </div>

          <div class="walkBox">
            <div class="totalWalk">
              <p>누적 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>

            <div class="averageWalk">
              <p>평균 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slider">
        <div class="infoBox">
          <div class="img">
            <img src="../../assets/images/test_dog.jpg" alt="테스트용" />
          </div>

          <div class="text">
            <div class="care">
              <span class="date">30</span>
              <span>일째 케어중</span>
            </div>

            <div class="name">
              <span>수영이</span>
              <button type="button">
                <img src="../../assets/images/icon/icon_pencil.svg" alt="수정" />
              </button>
            </div>

            <div class="type">저먼 포인터</div>
          </div>

          <div class="walkBox">
            <div class="totalWalk">
              <p>누적 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>

            <div class="averageWalk">
              <p>평균 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slider">
        <div class="infoBox">
          <div class="img">
            <img src="../../assets/images/test_dog.jpg" alt="테스트용" />
          </div>

          <div class="text">
            <div class="care">
              <span class="date">30</span>
              <span>일째 케어중</span>
            </div>

            <div class="name">
              <span>수영이</span>
              <button type="button">
                <img src="../../assets/images/icon/icon_pencil.svg" alt="수정" />
              </button>
            </div>

            <div class="type">저먼 포인터</div>
          </div>

          <div class="walkBox">
            <div class="totalWalk">
              <p>누적 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>

            <div class="averageWalk">
              <p>평균 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slider">
        <div class="infoBox">
          <div class="img">
            <img src="../../assets/images/test_dog.jpg" alt="테스트용" />
          </div>

          <div class="text">
            <div class="care">
              <span class="date">30</span>
              <span>일째 케어중</span>
            </div>

            <div class="name">
              <span>수영이</span>
              <button type="button">
                <img src="../../assets/images/icon/icon_pencil.svg" alt="수정" />
              </button>
            </div>

            <div class="type">저먼 포인터</div>
          </div>

          <div class="walkBox">
            <div class="totalWalk">
              <p>누적 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>

            <div class="averageWalk">
              <p>평균 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="slider">
        <div class="infoBox">
          <div class="img">
            <img src="../../assets/images/test_dog.jpg" alt="테스트용" />
          </div>

          <div class="text">
            <div class="care">
              <span class="date">30</span>
              <span>일째 케어중</span>
            </div>

            <div class="name">
              <span>수영이</span>
              <button type="button">
                <img src="../../assets/images/icon/icon_pencil.svg" alt="수정" />
              </button>
            </div>

            <div class="type">저먼 포인터</div>
          </div>

          <div class="walkBox">
            <div class="totalWalk">
              <p>누적 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>

            <div class="averageWalk">
              <p>평균 산책거리</p>
              <div class="numBox">
                <span class="num char7">500,384</span>
                <span>km</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <button type="button" class="expandBtn" @click="togleBtn">
      <img src="../../assets/images/icon/icon_nav_arrow_bottom_white.svg" alt="화살표" />
    </button>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      activeFlag: false,
    };
  },
  methods: {
    togleBtn() {
      this.activeFlag = !this.activeFlag;
    },
  },
};
</script>

<style lang="scss" scoped>
#susuFamily {
  position: absolute;
  top: 47px;
  left: 0;
  width: 100%;
  height: 0;
  padding: 26px 0 33px;
  background-color: var(--white);
  border-radius: 0 0 10px 10px;
  transition: height 0.3s ease-in-out;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.05);
  z-index: 99;

  > h3 {
    margin-bottom: 20px;
    font-size: 0.875rem;
    font-weight: 800;
    text-align: center;
  }

  .sliderBox {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease-in-out;

    line-height: 1;

    .slider {
      margin-right: 0;
    }
  }

  .infoBox {
    width: 172px;
    height: 402px;
    padding-top: 9px;
    position: relative;

    &.mainPet::after {
      content: '대표 강아지';
      position: absolute;
      top: 0;
      left: 0;
      padding: 5px 15px;
      background-color: #eed0a3;
      border-radius: 10px;

      font-size: 0.75rem;
      font-weight: 800;
      text-align: center;
    }

    .img {
      width: 172px;
      height: 278px;
      border-radius: 10px;
      margin-bottom: 5px;
    }

    .text {
      margin-bottom: 10px;

      .care {
        display: inline-block;
        padding: 3px 8px;
        margin-bottom: 4px;
        background-color: var(--black);
        border-radius: 10px;

        font-size: 7px;
        font-weight: 700;
        line-height: 1.5;
        color: var(--white);
        white-space: nowrap;
      }

      .name {
        display: flex;
        align-items: center;
        margin-bottom: 4px;

        font-size: 1rem;
        font-weight: 700;
        color: #433f3f;

        > button {
          width: 15px;
          height: 15px;
          margin-left: 10px;
          background-color: transparent;
          cursor: pointer;

          > img {
            width: 100%;
            height: 100%;
          }
        }
      }

      .type {
        font-size: 0.75rem;
        font-weight: 700;
        color: #979797;
      }
    }

    .walkBox {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        width: 82px;
        height: 43px;
        padding: 8px 7px;
        background-color: #eed0a3;
        border-radius: 4px;

        > p {
          font-size: 0.5rem;
          font-weight: 700;
          margin-bottom: 5px;
        }

        > .numBox {
          display: flex;
          align-items: flex-end;

          span {
            display: inline-block;
            font-size: 0.5rem;
            font-weight: 700;

            &.num {
              font-size: 0.75rem;
              font-weight: 800;
            }
          }
        }
      }
    }
  }

  .expandBtn {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: var(--black);
    border-radius: 50%;
    cursor: pointer;

    > img {
      height: 5px;
    }
  }

  &.active {
    height: 503px;

    .sliderBox {
      height: 402px;
    }

    .expandBtn {
      img {
        rotate: 180deg;
      }
    }
  }
}
</style>
