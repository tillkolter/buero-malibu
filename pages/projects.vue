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
        },
        projects: ''
      }
    },
    async asyncData ({app, store, params}) {
      let projects = await app.$axios.$get('http://jenssen.kolter.it/wp/wp-json/wp/v2/posts')
      store.commit('wordpress/SET_PROJECTS', projects)
      return {projects: projects}
    },
    created () {
      this.$store.dispatch('wordpress/fetchPosts')
    },
    methods: {
      onLoaded () {
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