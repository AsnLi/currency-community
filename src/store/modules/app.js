
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
        console.log(state.activeItem)
    },
}

const getters = {
    activeItem: (state) => state.activeItem
}

export default {
    state,
    getters,
    mutations,
    actions
}
