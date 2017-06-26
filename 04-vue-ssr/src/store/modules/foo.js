export default {
	namespaced: true,
	/**
	 * Important: state must be a function so the module can be instantiated multiple times.
	 */
	state: () => {
		return {
			count: 0
		}
	},

	actions: {
		inc: ({commit}) => commit('inc')
	},

	mutations: {
		inc: state => state.count++
	}
}