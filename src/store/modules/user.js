
const state = {
    isShowLogin: false
}

const actions = {
    toggleLoginModal ({ commit }) {
        commit("toggleLoginModal")
    }
}

const mutations = {
    toggleLoginModal (state) {
        state.isShowLogin = !state.isShowLogin
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
