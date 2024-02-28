

const data = {
    state: {
        allData: [],
        daysData: [],
        hourlyData: [],
    },
    getters: {
        allData(state) {
            return state.allData
        },
        daysData(state) {
            return state.daysData
        },
        hourlyData(state) {
            return state.hourlyData
        },
    },
    mutations: {
        allData(state, payload) {
            state.allData = payload
        },
        daysData(state, payload) {
            state.daysData = payload
        },
        hourlyData(state, payload) {
            state.hourlyData = payload
        },
    },
    actions: {
        getAllTemp(context, payload) {
            try {
                context.dispatch('getAxios', payload).then(res => {
                    context.commit('allData', res.data.current)
                    context.commit('daysData', res.data.daily)
                    context.commit('hourlyData', res.data.hourly)
                })
            } catch (error) {
                console.log(error)
            }
        },
        getTemp(context, payload) {
            try {
                context.dispatch('getLoc', payload).then(res => {
                    context.dispatch('getAllTemp', res.data.coord);
                })
            } catch (error) {
                console.log(error)
            }
        },

    }
}


export default data