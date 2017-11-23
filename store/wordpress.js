import axios from 'axios'

export const state = () => ({
  projects: undefined,
  featuredImages: undefined
})

export const mutations = {
  // ADD_PROJECTS (state, projects) {
  //   for (var i in projects) {
  //     state.projects.push(projects[i])
  //   }
  // },
  SET_PROJECTS (state, projects) {
    var images = []
    for (var i in projects) {
      images = images.concat(projects[i]['images'])
    }
    state.projects = projects
    state.featuredImages = images
  }
}

export const actions = {
  fetchPosts ({app, commit, state}, append = false) {
    // if (typeof state === 'undefined') {
    axios.get('http://jenssen.kolter.it/wp/wp-json/wp/v2/posts').then(
      response => {
        if (append) {
          commit('SET_PROJECTS', response.data)
        } else {
          commit('SET_PROJECTS', response.data)
        }
      }
    )
    // }
  }
}

export const getters = {
  featuredImages: (state) => state.featuredImages
}
