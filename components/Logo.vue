<template>
  <div>
    <nuxt-link ref="logo" to="/" :style="logoStyle" class="buero-malibu-logo">
      <div>
        B&uuml;ro <br/>
        Malibu
      </div>
    </nuxt-link>
    <div ref="sectionHeader" :style="headerStyle" class="section-header">{{currentSection}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    data () {
      return {
        logoStyle: {},
        headerStyle: {}
      }
    },
    watch: {
      $route (value) {
        this.handleRoute(value)
      },
      currentSectionRect (value) {
        if (value) {
          this.headerStyle.left = `${value.left}px`
          this.headerStyle.top = `${value.top}px`
          let header = this.$refs.sectionHeader
          header.style.left = `${value.left}px`
          header.style.top = `${value.top}px`
        }
      }
    },
    computed: {
      currentSectionRect () {
        return this.$store.state.currentSectionRect
      },
      currentSection () {
        return this.$store.state.currentSection
      }
    },
    methods: {
      handleRoute (route) {
        let rect = this.currentSectionRect
        if (this.$route.name === 'index') {
          this.$store.commit('SET_CURRENT_TARGET', '')
          this.logoStyle = ''
          // this.headerStyle.visibility = 'hidden'
          this.headerStyle.opacity = 0
          if (rect && rect.left && rect.right) {
            this.headerStyle.left = `${rect.left}px`
            this.headerStyle.top = `${rect.top}px`
          }
        } else {
          let logoRect = this.$store.state.logoRect
          this.logoStyle = {
            fontSize: '24px',
            paddingTop: '8px',
            width: `${logoRect.width - 60}px`
          }
          this.headerStyle = {
            opacity: 1,
            // visibility: 'visible',
            position: 'absolute',
            left: `${logoRect.right - 30}px`,
            top: `${logoRect.top + (logoRect.height / 10)}px`
          }
          let header = this.$refs.sectionHeader
          header.style.left = `${logoRect.right - 30}px`
          header.style.top = `${logoRect.top + (logoRect.height / 10)}px`
          console.log('sa;da;k')
        }
      }
    },
    mounted () {
      let logo = this.$refs.logo.$el
      this.$store.commit('SET_LOGO_RECT', logo.getBoundingClientRect())
      this.handleRoute(this.$route)
    }
  }
</script>

<style lang="scss">
  .buero-malibu-logo {
    display: block;
    font-size: 72px;
    color: #3b8070;
    transition: all 1s;
    text-align: center;
    width: 100%;
    padding-top: 120px;
    margin-bottom: 32px;
    text-decoration: none;
    text-transform: uppercase;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      color: #80593C;
    }
  }

  .section-header {
    font-size: 20px;
    transition: left 1s, top 1s, opacity 0.5s ease-in-out;
    z-index: 10;
    position: absolute;
    text-transform: uppercase;
  }

  .VueToNuxtLogo {
    display: inline-block;
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
    position: relative;
    overflow: hidden;
    height: 160px;
    width: 245px;
  }

  .Triangle {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
  }

  .Triangle--one {
    border-left: 105px solid transparent;
    border-right: 105px solid transparent;
    border-bottom: 180px solid #41B883;
  }

  .Triangle--two {
    top: 30px;
    left: 35px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 87.5px solid transparent;
    border-right: 87.5px solid transparent;
    border-bottom: 150px solid #3B8070;
  }

  .Triangle--three {
    top: 60px;
    left: 35px;
    animation: goright 0.5s linear forwards 3.5s;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-bottom: 120px solid #35495E;
  }

  .Triangle--four {
    top: 120px;
    left: 70px;
    animation: godown 0.5s linear forwards 3s;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
    border-bottom: 60px solid #fff;
  }

  @keyframes turn {
    100% {
      transform: rotateX(0deg);
    }
  }

  @keyframes godown {
    100% {
      top: 180px;
    }
  }

  @keyframes goright {
    100% {
      left: 70px;
    }
  }
</style>
