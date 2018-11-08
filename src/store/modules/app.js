
const state = {
    activeItem: ''
}

const actions = {
    updateNavigationBar ({ commit }, sActiveItem) {
        commit("updateNavigationBar", sActiveItem)
    },
}

const mutations = {
    updateNavigationBar (state, sActiveItem) {
        state.activeItem = "/" + sActiveItem
    },
}

const getters = {
    // maxNum: (state) => {
    //     return state.nums.filter( v => v.num > 0 )
    // }
}
export default {
    state,
    getters,
    mutations,
    actions
}
