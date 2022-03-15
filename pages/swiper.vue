<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><img :src="banners[0]" alt=""></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
export default {
  name: 'SwiperPage',
  auth: false,
  data () {
    return {
      banners: [
        'https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1647163926930-6460f1fabcee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1570974797119-9d44484cd541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1647273426587-31512cdf2e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80',
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // loop: true,
        // autoplay: {
        //   delay: 5000
        // },
        // mousewheel: true,
        // lazy: {
        //   loadPrevNext: true
        // },
        // slidesPerView: 'auto',
        // grabCursor: true, // 触摸滑动
        // centeredSlides: true,
        // pagination: {
        //   // 分页
        //   el: '.swiper-pagination',
        //   clickable: true
        // }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
  }
}
</script>
