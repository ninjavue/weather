import axios from 'axios'


const helper = {
    state: {
        apiId: 'f7183457ff5227cae940f97543125dd5'
    },
    getters: {
        apiId(state) {
            return state.apiId
        }
    },
    actions: {
        getLoc(_, payload) {
            return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${this.getters.apiId}&units=metric`)
        },
        getAxios(_, payload) {
            return axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${payload.lat}&lon=${payload.lon}&exclude=alerts&appid=9dd86907fe501cec50da3d087e4e9dc0&units=metric&lang=ru`)
        }
    }
}

export default helper