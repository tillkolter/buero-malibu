<template>
  <div>
    <project-list :style="projectListStyle" @loaded="onLoaded" class="project-list" :projects="projects"></project-list>
  </div>
</template>

<script>
  import ProjectList from '../components/ProjectList'
  export default {
    components: {ProjectList},
    name: 'Projects',
    data () {
      return {
        projectListStyle: {
          opacity: 0
        }
      }
    },
    async asyncData ({ app, store, params }) {
      let projects = await app.$axios.$get('http://jenssen.kolter.it/wp/wp-json/wp/v2/posts')
      return { projects: projects }
    },
    created () {
      this.$axios.$get('http://jenssen.kolter.it/wp-json/wp/v2/posts?_embed&fields=wp:attachment').then(
        projects => {
          this.projects = projects
        }
      )
    },
    methods: {
      onLoaded () {
        console.log('onLoaded')
        this.projectListStyle = {
          opacity: 1
        }
      }
    }
  }
</script>

<style>
  .project-list {
    transition: opacity 0.5s;
  }
</style>