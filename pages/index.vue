<template>
  <div class="mainWrap">
    <div class="headerWrap">
      <header>
        <div class="contents">
          <div class="logo">
            <a href="/">52!놀자</a>
          </div>
          <div class="searchBtn">
            <button>
              <img src="../assets/img/btn-search.svg" alt="btn-search">
            </button>
          </div>
        </div>
      </header>
    </div>
    <div class="serviceWrap">
      <section class="positionBtn">
        <div class="position">
          <span>서울특별시 종로구 수표로 18길</span>
        </div>
      </section>
      <nav class="serviceMenu">
        <ul class="listWrap">
          <li>
            <a href="#">
              <span>모텔</span>
              <img src="../assets/img/btn-main-circle-01-motel.png" alt="motel">
            </a>
          </li>
          <li>
            <a href="#">
              <span>호텔<br>리조트</span>
              <img src="../assets/img/btn-main-circle-02-hotel.png" alt="hotel">
            </a>
          </li>
          <li>
            <a href="#">
              <span>펜션<br>풀빌라</span>
              <img src="../assets/img/btn-main-circle-03-pension.png" alt="pension">
            </a>
          </li>
          <li>
            <a href="#">
              <span>게스트<br>하우스</span>
              <img src="../assets/img/btn-main-circle-04-guest.png" alt="guest">
            </a>
          </li>
        </ul>
      </nav>
      <div class="promotion">
        <div
          v-swiper:mySwiper="swiperOption"
          style="height: 94px;"
          ref="myswiper"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(x, index) in img"
              :key="`${x}${index}`"
              class="swiper-slide"
            >
              <a href="#" :class="`img${index + 1}`">
                <img :src="`${x}`" :alt='x'>
              </a>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
      <div class="popularSearch section">
        <h2>회원 인기 검색어</h2>
        <div class="imageList">
          <a href="#">
            <span>#프렌차이즈<br>프로모션</span>
            <img src="../assets/img/thumb-promotion-nor@2x.png" alt="promotion">
          </a>
          <a href="#">
            <span>#신축/리모델링</span>
            <img src="../assets/img/thumb-interior-nor@2x.png" alt="interior">
          </a>
          <a href="#">
            <span>#초특가 호텔</span>
            <img src="../assets/img/thumb-hotel-nor@2x.png" alt="hotel">
          </a>
          <a href="#">
            <span>파티룸</span>
            <img src="../assets/img/thumb-party-nor@2x.png" alt="party">
          </a>
        </div>
        <div class="tag">
          <a href="#">#인기숙소</a>
          <a href="#">#무료영화</a>
          <a href="#">#스파펜션</a>
        </div>
      </div>
      <div class="exhibition section">
        <h2>기획전</h2>
        <div class="listWrap">
          <a
            v-for="x in 10"
            :key="x"
            href="#"
          >
            <div class="list">
              <div class="info">
                <div class="md">MD추천</div>
                <div class="title">한번쯤 가보고 싶은 고급 모텔</div>
                <div class="subTitle">데이트 하기 딱 좋은 고퀄리티 모텔모음</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperOption: {
        loopedSlides: 1,
        spaceBetween: 0,
        lazy: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      img: [
        'https://cdn.bringprice.com/image/52nolza/1.png',
        'https://cdn.bringprice.com/image/52nolza/2.png',
        'https://cdn.bringprice.com/image/52nolza/3.png',
        'https://cdn.bringprice.com/image/52nolza/4.png',
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
  .mainWrap{
    a{
      text-decoration: none;
      display: block;
      color: inherit;
    }
    .headerWrap{
      width: 100%;
      position: fixed;
      top: 0;
      transition: top 0.25s cubic-bezier(0.75, 0.25, 0.25, 0.75);
      z-index: 9;
      header{
        position: relative;
        width: 100%;
        height: 4.4rem;
        font-size: 1.7rem;
        text-align: center;
        background-color: #fff;
        .contents {
          max-width: 76.8rem;
          margin: 0 auto;
          position: relative;
          .logo{
            position: absolute;
            text-align: center;
            top: 0;
            right: 4.4rem;
            font-size: 22px;
            width: calc(100% - 8.8rem);
            height: 4.4rem;
            color: #ff3478;
            font-weight: bold;
            a{
              margin: 1rem;
            }
          }
          .searchBtn{
            position: absolute;
            right: 0;
            button{
              width: 4.4rem;
              height: 4.4rem;
              border: none;
              background: none;
            }
          }
        }
      }
    }
    .serviceWrap{
      padding-top: 4.4rem;
      padding-bottom: 5.5rem;
      .positionBtn{
        position: relative;
        width: 100%;
        border-bottom: none;
        font-size: 1.7rem;
        text-align: center;
        background: #fff;
        .position{
          width: 100%;
          max-width: 76.8rem;
          display: inline-block;
          padding: 1.5rem 0 1.3rem 1.7rem;
          margin: 0 auto;
          text-align: left;
          span{
            display: inline-block;
            vertical-align: middle;
            font-size: 1.2rem;
            font-weight: 700;
            color: #2e2e2e;
            padding-left: .3rem;
            line-height: 2rem;
            cursor: pointer;
            &::before{
              content: '';
              width: 2rem;
              height: 2rem;
              background: url(~assets/img/ico-position-pink.svg) no-repeat;
              display: inline-block;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .serviceMenu{
      position: relative;
      width: 100%;
      font-size: 1.7rem;
      background: #fff;
      padding: 1.2rem 0 .4rem;
      border-bottom: .1rem solid #e5e5e5;
      margin-bottom: 1.2rem;
      .listWrap{
        margin: 0 auto;
        font-size: 0;
        max-width: 52.5rem;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 20%;
          margin-bottom: 1.6rem;
          a{
            position: relative;
            width: 7.3rem;
            height: 7.3rem;
            display: inline-block;
            text-align: center;
            span{
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              z-index: 1;
              font-weight: bold;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
            }
            img{
              width: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
    .promotion{
      position: relative;
      overflow: hidden;
      width: 100%;
      max-width: 76.8rem;
      background: #fff;
      border-bottom: 1px solid #e6e6e6;
      margin: 0 auto 1.2rem;
      .swiper-wrapper{
        height: 94px;
        .swiper-slide{
          a {
            &.img1{
              background: rgb(39, 124, 255);
            }
            &.img2{
              background: rgb(12, 197, 99);
            }
            &.img3{
              background: rgb(96, 77, 232);
            }
            &.img4{
              background: rgb(255, 238, 91);
            }
            img{
              display: block;
              max-width: 37.5rem;
              height: auto;
              margin: 0 auto;
              user-select: none;
            }
          }
        }
      }
    }
    .section{
      h2{
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }
    }
    .popularSearch{
      max-width: 76.8rem;
      margin: 1.2rem auto 1.2rem;
      padding: 2rem 1.6rem 3rem 1.7rem;
      width: 100%;
      background: #fff;
      border-bottom: .1rem solid #e6e6e6;
      font-size: 1.7rem;
      position: relative;
      .imageList{
        margin-bottom: .5rem;
        display: flex;
        a{
          width: 18rem;
          margin-right: .5rem;
          height: 9rem;
          position: relative;
          &:last-of-type{
            margin-right: 0;
          }
          span{
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
            position: absolute;
            top: 1rem;
            left: 1rem;
            z-index: 1;
          }
          img{
            width: 100%;
            height: 9rem;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
      .tag{
        margin-top: 1.5rem;
        a{
          border: .1rem solid #e6e6e6;
          display: inline-block;
          font-size: 1.3rem;
          font-weight: 700;
          padding: 1.5rem 1rem;
        }
      }
    }
    .exhibition{
      position: relative;
      max-width: 76.8rem;
      text-align: center;
      background: #fff;
      padding: 1.2rem 2rem 8rem;
      margin: 0 auto;
      h2{
        text-align: left;
        margin: 1.6rem 0 2rem;
      }
      .listWrap{
        display: flex;
        flex-wrap: wrap;
        &::before {
          content: "";
          width: .1rem;
          background: #e6e6e6;
          display: block;
          position: absolute;
          top: 7rem;
          bottom: 13rem;
          right: 50%;
        }
        a{
          width: calc(50% - 2rem);
          height: 193px;
          &:nth-child(even) {
            margin-left: 4rem;
          }
          &:nth-child(n + 3) {
            margin-top: 1.5rem;
          }
          .list{
            width: 100%;
            height: 100%;
            position: relative;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url(~assets/img/exhibition.jpg);
            border-radius: .8rem;
            .info{
              color: #fff;
              position: absolute;
              bottom: 0;
              width: 100%;
              padding: 1.5rem;
              text-align: justify;
              .md{
                display: inline-block;
                border-radius: 2rem;
                padding: .4rem .5rem .3rem;
                font-size: 1rem;
                font-weight: 500;
                margin-bottom: .2rem;
                background-color: rgb(154, 94, 210);
              }
              .title{
                font-size: 2rem;
                margin-top: .4rem;
                color: #fff;
                white-space: nowrap;
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: 600;
              }
              .subTitle{
                margin-top: .4rem;
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
</style>
