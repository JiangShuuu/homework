<template>
  <div class="relative">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide v-for="(banner, index) in products" :key="index" class="flex justify-center border-2">
        <p>{{ banner.title }}</p>
      </swiper-slide>
    </swiper>
    <div class="absolute right-20 top-16">
      <div slot="button-prev" class="swiper-button-prev" @click="handlePrev" />
      <div slot="button-next" class="swiper-button-next" @click="handleNext" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwiperPage01',
  auth: false,
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // loop: true
        // autoplay: {
        //   delay: 5000
        // }
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
      },
      products: [],
      paramsId: this.id
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
    this.fetchHexAPI()
  },
  methods: {
    async fetchHexAPI () {
      try {
        const data = await this.$axios.$get(`api/v2/api/johntext/admin/products/?page=${this.paramsId}`)
        this.products = data.products
      } catch (error) {
        console.log(error)
        alert('請先登入')
        this.$router.push('/login')
      }
    },
    handlePrev () {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    handleNext () {
      this.$refs.mySwiper.$swiper.slideNext()
    }
  }
}
</script>
