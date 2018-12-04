
const state = {
    isShowLogin: false,
    isShowRegister: false,
    isShowForgot: false,
    isShowReport: false
}

const actions = {
    toggleLoginModal ({ commit }) {
        commit("toggleLoginModal")
    },
    toggleReportModal ({ commit }) {
        commit("toggleReportModal")
    },
    toggleRegisterModal ({ commit }) {
        commit("toggleRegisterModal")
    },
    toggleForgotModal ({ commit }) {
        commit("toggleForgotModal")
    }
}

const mutations = {
    toggleLoginModal (state) {
        if(state.isShowRegister) 
            state.isShowRegister = false;

        state.isShowLogin = !state.isShowLogin
    },
    toggleReportModal (state) {
        state.isShowReport = !state.isShowReport
    },
    toggleRegisterModal (state) {
        if(state.isShowLogin) 
            state.isShowLogin = false;

        state.isShowRegister = !state.isShowRegister
    },
    toggleForgotModal () {
        if(state.isShowLogin) 
            state.isShowLogin = false;
            
        state.isShowForgot = !state.isShowForgot
    }
}

const getters = {
    // maxNum: (state) => {
    //     return state.nums.filter( v => v.num > 0 )
    // }
}

//为什么不可以直接 user
export default {
    state,
    getters,
    mutations,
    actions
}
