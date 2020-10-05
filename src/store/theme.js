import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    theme : ''
};

const getters = {

};

const mutations = {
    SET_APPLICATION_THEME(state, theme){
        state.theme = theme;
    },
};

const actions = {

};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
