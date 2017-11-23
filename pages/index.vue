<template>
  <div>
    <div class="main-icons">
      <nuxt-link class="main-icon" :to="{name: 'projects'}"><img src="../assets/images/ic_build_white_48px.svg" /></nuxt-link>
      <div @click="onOpenGallery" class="main-icon highlight"><img src="../assets/images/ic_theaters_white_48px.svg" /></div>
      <div class="main-icon"><img src="../assets/images/ic_call_white_48px.svg" /></div>
    </div>
    <photo-swipe></photo-swipe>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {onOpenGallery} from '~/utils/gallery'
  import PhotoSwipe from '../components/PhotoSwipe'

  export default {
    components: {
      PhotoSwipe, Logo
    },
    async asyncData ({app, store, params}) {
      let projects = await app.$axios.$get('http://jenssen.kolter.it/wp/wp-json/wp/v2/posts')
      store.commit('wordpress/SET_PROJECTS', projects)
      return {projects: projects}
    },
    methods: {
      onOpenGallery (e) {
        let target = e.target
        console.log(`This target ${JSON.stringify(target)}`)
        onOpenGallery(this.$store, target)
      }
    }
  }
</script>

<style lang="scss">

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .8s
  }

  .page-enter, .page-leave-active {
    opacity: 0
  }

  .main {
    &-icons {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    &-icon {
      width: 200px;
      height: 200px;
      background-color: orange;
      opacity: 0.5;
      margin: 16px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      &:hover {
        background-color: #FFD63D;
      }
      &.highlight {
        margin-top: -8px
      }
    }
  }
</style>
