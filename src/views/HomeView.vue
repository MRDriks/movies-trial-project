<template>
  <div class="home-page">
    <keep-alive>
      <component :is="currentLayout" />
    </keep-alive>
  </div>
</template>

<script>
import HomeLaptopLayout from '@/layouts/HomeLaptopLayout.vue'
import HomeTabletLandscapeLayout from '@/layouts/HomeTabletLandscapeLayout.vue'
import HomeTabletPortraitLayout from '@/layouts/HomeTabletPortraitLayout.vue'

export default {
  name: 'HomePage',

  data() {
    return {
      screenSize: 'large'
    }
  },

  components: {
    HomeLaptopLayout,
    HomeTabletLandscapeLayout,
    HomeTabletPortraitLayout
  },

  computed: {
    currentLayout() {
      switch (this.screenSize) {
        case 'large':
          return HomeLaptopLayout
        case 'medium':
          return HomeTabletLandscapeLayout
        case 'small':
          return HomeTabletPortraitLayout
        default:
          return ''
      }
    }
  },

  created() {
    this.checkScreenSize()
  },

  beforeMount() {
    window.addEventListener('resize', this.checkScreenSize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },

  methods: {
    checkScreenSize() {
      if (window.innerWidth >= 1152) {
        this.screenSize = 'large'
      } else if (window.innerWidth >= 900 && window.innerWidth < 1152) {
        this.screenSize = 'medium'
      } else {
        this.screenSize = 'small'
      }
    }
  }
}
</script>
