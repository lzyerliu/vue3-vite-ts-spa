import { createStore } from 'vuex'
import user from './modules/user/index.ts'

export default createStore({
  modules: {
    user
  }
})
