<template>
  <div>
    <logo></logo>
    <nuxt/>
    <nav class="navigation">
      <ul class="navbar">
        <li class="navbar-item">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="navbar-item">
          <nuxt-link :to="{name: 'projects'}">Projects</nuxt-link>
        </li>
        <li class="navbar-item"><a href="#">Contact</a></li>
        <li class="navbar-item"><a href="#">Selected</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Logo from '../components/Logo'
  export default {
    name: 'default',
    components: {Logo}
  }
</script>

<style lang="scss">
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
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
