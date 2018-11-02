
const state = {
    isShowLogin: false,
    isShowRegister: false,
    isShowForgot: false
}

const actions = {
    toggleLoginModal ({ commit }) {
        commit("toggleLoginModal")
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
