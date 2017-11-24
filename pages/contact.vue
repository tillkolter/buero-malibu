<template>
  <div id="contact">
    <div>
      Phone: 0169&nbsp;/&nbsp;361&nbsp;666&nbsp;69
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    mounted () {
      this.$store.commit('SET_SECTION', 'Contact')
    }
  }
</script>

<style lang="scss">
  #contact {
    padding-top: 200px;
    display: flex;
    justify-content: space-around;
    font-size: 36px;
  }
</style>