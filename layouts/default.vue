<template>
  <div>
    <logo></logo>
    <nuxt />
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  import { isMobileOrTablet } from '../utils/mobile'
  export default {
    name: 'default',
    components: {Logo},
    mounted () {
      this.$store.commit('SET_MOBILE', isMobileOrTablet())
    }
  }
</script>

<style lang="scss">

  .container {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  .navigation {
    height: 56px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: orange;
    opacity: 0.7;
  }

  .navbar {
    width: 100%;
    flex-wrap: wrap;
    list-style: none;
    display: block;
    text-align: center;
    &-item {
      display: inline;
      a {
        display: inline-block;
        padding-top: .9rem;
        padding-left: .9rem;
        padding-right: .9rem;
      }
    }
  }
</style>
