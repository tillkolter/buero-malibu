<template>
  <div class="project-item">
    <figure style="position: relative">
      <img style="width: 300px;" class="project-image" :src="image" v-for="image in images" />
    </figure>
  </div>
</template>

<script>
  export default {
    name: 'ProjectItem',
    props: ['project'],
    computed: {
      images () {
        return this.project.images
      }
    }
  }
</script>


<style lang="scss">
  .project {
    &-image {
      height: auto;
      width: 300px;
      &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: #fff;
      }
    }
    &-item {
      width: 300px;
      display: block;
      float: left;
      height: auto !important;
      margin: 5px;

    }
  }
</style>
