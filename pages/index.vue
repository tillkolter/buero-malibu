<template>
  <div>
    <div class="main-icons">
      <div id="projects-link" @mouseover.self="onLinkHover" @click="onLinkClick($event, 'Projects')" class="main-icon">
        <img src="../assets/images/ic_build_white_48px.svg" />
        <div class="main-icon-title" ref="projects-title">Projects</div>
      </div>
      <div @click.prevent="onOpenGallery" class="main-icon highlight">
        <img src="../assets/images/ic_theaters_white_48px.svg" />
        <div class="main-icon-title">Selected works</div>
      </div>
      <div id="contact-link" @mouseover.self="onLinkHover" @click="onLinkClick($event, 'Contact')" class="main-icon">
        <img src="../assets/images/ic_call_white_48px.svg" />
        <div class="main-icon-title" ref="contact-title">Contact</div>
      </div>
    </div>
    <photo-swipe></photo-swipe>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import {openPhotoSwipe} from '~/utils/gallery'
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
        openPhotoSwipe(this.$store, e.currentTarget)
      },
      onLinkHover (e) {
        let target = e.currentTarget
        if (target.id !== this.$store.state.currentTarget) {
          this.$store.commit('SET_CURRENT_TARGET', target.id)
          let projectsTitle
          for (var i = 0; i < target.childNodes.length; i++) {
            if (target.childNodes[i].className === 'main-icon-title') {
              projectsTitle = target.childNodes[i]
              break
            }
          }
          if (projectsTitle) {
            let rect = projectsTitle.getBoundingClientRect()
            if (rect) {
              this.$store.commit('SET_HEADER_POSITION', rect)
            }
          }
        }
      },
      onLinkClick (e, sectionTitle) {
        console.log('click link')
        this.$store.commit('SET_SECTION', sectionTitle)
        let target = e.currentTarget
        let projectsTitle
        for (var i = 0; i < target.childNodes.length; i++) {
          if (target.childNodes[i].className === 'main-icon-title') {
            projectsTitle = target.childNodes[i]
            break
          }
        }
        if (projectsTitle) {
          let rect = projectsTitle.getBoundingClientRect()
          this.$store.commit('SET_HEADER_POSITION', rect)
        }
        this.$router.push({name: sectionTitle.toLowerCase()})
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

  .page-enter-active {
    transition: opacity .8s
  }


  .page-leave-active {
    transition: opacity .8s
  }

  .page-enter-to {
    opacity: 1;
  }

  .page-enter, .page-leave-to, .page-leave-active {
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
      position: relative;
      img {
        transition: all .3s;
        width: 48px;
      }
      &-title {
        position: absolute;
        padding: 16px;
        right: 0;
        bottom: 0;
        display: none;
      }
      &:hover {
        background-color: #FFD63D;
        .main-icon-title {
          display: inherit;
          color: #154C1D;
          text-transform: uppercase;
        }
        img {
          width: 120px;
          transform: rotate(467deg);
        }
      }
      &.highlight {
        margin-top: -8px
      }
    }
  }
</style>
