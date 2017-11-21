<template>
  <div :style="logoStyle" class="buero-malibu-logo" x="0" y="15" fill="red">
    B&uuml;ro <br/>
    Malibu
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    data () {
      return {
        logoStyle: ''
      }
    },
    watch: {
      $route (value) {
        this.handleRoute(value)
      }
    },
    methods: {
      handleRoute (route) {
        if (this.$route.name === 'index') {
          this.logoStyle = ''
        } else {
          this.logoStyle = {
            fontSize: '24px',
            marginTop: '56px'
          }
        }
      }
    },
    mounted () {
      this.handleRoute(this.$route)
    }
  }
</script>

<style>
  .buero-malibu-logo {
    font-size: 72px;
    color: #3b8070;
    transition: all 1s;
    text-align: center;
    width: 100%;
    margin-top: 200px;
  }

  .VueToNuxtLogo {
    display: inline-block;
    animation: turn 2s linear forwards 1s;
    transform: rotateX(180deg);
    position: relative;
    overflow: hidden;
    height: 180px;
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
