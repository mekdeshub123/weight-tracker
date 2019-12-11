import axios from 'axios'

let base = 'api'

export default {
    getWeightMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }


    // TODO add a method that makes a get request to the server to get all weight records 

    // TODO add a mwthod that makes a post request to the server to add a new weight record

}