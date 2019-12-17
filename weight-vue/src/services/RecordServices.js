import axios from 'axios'

const base_url = '/api/record'
export default{

    getAllRecords() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },  
    addRecord(record) {
        return axios.post(base_url, record).then(response => {
            return response.data
        })
    },
    updateRecord(record) {
        return axios.patch(`${base_url}/ ${record.date}`, record).then(response => {
            return response.data 
        })
    },
    deleteRecord(date) {
        return axios.delete(`${base_url}/${date}`).then(response => {
            return response.data
        })
    }
}