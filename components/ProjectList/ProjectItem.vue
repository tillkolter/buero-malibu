<template>
  <div class="project-item">
    <figure style="position: relative">
      <img style="width: 300px;" class="project-image" :src="image" v-for="image in images" />
    </figure>
    <div class="project-item-content">
      <div class="project-item-content-inner">
        <div class="project-title">{{project.title.rendered}}</div>
        <div class="project-item-bottom">
          <div class="project-location">
            <div class="project-venue">
              {{project.acf.venue}}
            </div>
            <div class="project-city">
              {{project.acf.city}}
            </div>
          </div>
          <div class="project-date">
            {{getMonthYear(project.acf.date)}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getMonthYear } from '../../utils/date'
  export default {
    name: 'ProjectItem',
    props: ['project'],
    computed: {
      images () {
        return this.project.images
      }
    },
    methods: {
      getMonthYear (dateString) {
        let year = parseInt(dateString.slice(0, 4))
        let month = parseInt(dateString.slice(4, 6))
        let day = parseInt(dateString.slice(6))
        return getMonthYear(new Date(year, month, day))
      }
    }
  }
</script>


<style lang="scss">
  .project {
    &-item {
      font-size: 24px;
      width: 300px;
      display: block;
      float: left;
      height: auto !important;
      margin: 5px;
      position: relative;
      color: #fff;
      &:hover {
        .project-item-content-inner:before {
          opacity: 0.8;
          background-color: #204671;
        }
        .project-item-bottom {
          visibility: visible;
        }
        .project-title {
          visibility: visible;
        }
      }
      &-content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        &-inner {
          position: relative;
          width: 100%;
          height: 100%;
          &:before {
            position: absolute;
            content: '';
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            background-color: #fff;
            margin-bottom: 5px;
          }
        }
      }
      &-bottom {
        font-size: 16px;
        padding: 16px;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        visibility: hidden;
      }
    }
    &-title {
      padding: 16px;
      font-weight: bold;
      position: absolute;
      visibility: hidden;
    }
    &-venue {
      display: flex;
      flex-direction: column;
    }
    &-image {
      height: auto;
      width: 300px;
      display: block;
    }
    &-date {
      margin-top: auto;
    }
  }
</style>
