import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

//컴포넌트간에 공유되는 데이터 속성들을 관리.
export const store = new Vuex.Store({
    state,
    mutations,
    actions,

    getters: {
        fetchedItem(state) {
            return state.item;
        }
    }
  })