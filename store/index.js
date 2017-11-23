export const state = () => ({
  currentSection: '',
  currentSectionRect: {},
  logoRect: undefined,
  currentTarget: undefined
})

export const mutations = {
  SET_SECTION (state, section) {
    state.currentSection = section
  },
  SET_HEADER_POSITION (state, rect) {
    state.currentSectionRect = rect
  },
  SET_LOGO_RECT (state, rect) {
    state.logoRect = rect
  },
  SET_CURRENT_TARGET (state, element) {
    state.currentTarget = element
  }
}
