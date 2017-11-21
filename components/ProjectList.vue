<template>
  <div ref="grid" class="grid">
    <project-item class="grid-item" :key="`project-${i}`" :project="project" v-for="(project, i) in projects"></project-item>
  </div>
</template>

<script>
  import ProjectItem from './ProjectList/ProjectItem'

  export default {
    components: {ProjectItem},
    name: 'ProjectList',
    props: ['projects'],
    data () {
      return {

      }
    },
    methods: {
      createIsotope () {
        this.$emit('loaded')
        const Isotope = require('isotope-layout')
        return new Isotope('.grid', {
          itemSelector: '.grid-item',
          stagger: 30,
          masonry: {
            columnWidth: 310,
            fitWidth: true
          }
        })
      }
    },
    mounted () {
      // eslint-disable-next-line no-unused-vars

      var el = this.$refs.grid
      // eslint-disable-next-line no-undef
      var imgLoad = imagesLoaded(el)
      imgLoad.on('always', this.createIsotope)
      // imgLoad.off('always', this.createIsotope)
    }
  }
</script>

<style lang="scss">
  .grid {
    margin: 0 auto;
    &-item {
      margin-bottom: 10px;
    }
  }
</style>