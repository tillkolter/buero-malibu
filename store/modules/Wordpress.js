import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      projects: []
    },

    mutations: {
      DECREMENT_MAIN_COUNTER (state) {
        state.main--
      },
      INCREMENT_MAIN_COUNTER (state) {
        state.main++
      },
      ADD_PROJECTS (state, projects) {
        state.projects.concat(projects)
      }
    },

    actions: {
      fetchPosts ({app, commit}) {
        // do something async
        // let projects = await app.$axios.$get('http://jenssen.kolter.it/wp-json')
        // commit('ADD_PROJECTS', projects)
      }
    }
  })
}

export default store
