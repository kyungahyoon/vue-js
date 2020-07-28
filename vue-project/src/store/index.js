import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';

Vue.use(Vuex);

//컴포넌트간에 공유되는 데이터 속성들을 관리.
export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs;
        },
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then (response => {
                context.commit('SET_NEWS', response.data)
            })
            .catch (error => console.log("error"));
        },
        FETCH_ASK (context) {
            fetchAskList()
            .then ( response => {
                context.commit('SET_ASK', response.data)
            })
            .catch ( error => console.log(error))
        },
        FETCH_JOBS (context) {
            fetchJobsList()
            .then ( response => {
                context.commit('SET_JOBS', response.data)
            })
            .catch ( error => console.log(error))
        }
    }
  })