import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        allUsers : [
          {id : 1, name :'kim', email:"kim@naver.com", password:"1111"},
          {id : 2, name :'lee', email:"kim@naver.com", password:"1111"},
        ],
        loginUser : null,
        memos : [
            {id:1, content : '메모1', regDate : new Date()},
            {id:2, content : '메모2', regDate : new Date()}
        ],
        // mode : 'list'
        users : [],
        isLogin : false,
       // isLoginError : false
    },
    mutations : {
        SET_USERS(state, users) {
            state.users = users
        },
        // MODE_CHANGE(state, mode) {
        //     state.mode = mode
        // },
        ADD_MEMO(state, memo) { //memo 추가
            state.memos.push({
                id:memo.id,
                content : memo.content,
                regDate : memo.regDate
            })
        },
        EDIT_MEMO(state, memo) { //memo 수정
           state.memos[memo.index].content = memo.content
           state.memos[memo.index].regDate = memo.regDate

        },
        DELETE_MEMO(state, index) {
            state.memos.splice(index,1)
        },
        loginSuccess(state) {
            state.isLogin = true
        },
        loginError(state) {
            state.isLogin = false
        },
        logout(state) {
            state.isLogin = false
            state.loginUser = null
            router.push('/login')

        }

    },
    actions : {
        getUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users')
              .then(res => {
                   //console.log(res);
                   //this.users = res.data;
                   commit('SET_USERS', res.data)
              })
        },
        addMemo({ commit }, memo) {
            //console.log(value)
            //보통 이자리에 비동기 작업넣음
            setTimeout(function() {
                commit('ADD_MEMO', memo) //1초후 실행됨
            }, 1000) 
        },
        login ({state, commit}, loginObj) {
            console.log(loginObj)
            let find = null
            state.allUsers.forEach(user => {
              if(user.name === loginObj.id && user.password === loginObj.pwd) {
                find = true
                state.loginUser = user
              }
            });
            if(find === true) {
                alert('로긴 성공');
                commit('loginSuccess')
                router.push('/')
            }else {
                alert('로긴 실패')
                commit('loginError')
            }
          },
        logout({commit}) {
            commit('logout')
        }
    },
    getters : {
        numberofMemos : state => {
            return state.memos.length;
        }

    }
})