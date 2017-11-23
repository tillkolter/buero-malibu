export const state = () => ({
  currentSection: '',
  currentSectionRect: {}
})

export const mutations = {
  SET_SECTION (state, section) {
    state.currentSection = section
  },
  SET_HEADER_POSITION (state, rect) {
    state.currentSectionRect = rect
  }
}
