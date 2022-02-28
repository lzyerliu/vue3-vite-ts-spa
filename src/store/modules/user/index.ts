import state from './state.ts'
import getters from './getters.ts'
import mutations from './mutations.ts'
import actions from './actions.ts'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
