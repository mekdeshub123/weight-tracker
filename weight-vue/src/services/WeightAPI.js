import axios from 'axios'

let base = 'api'

export default {
    getWeightMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}