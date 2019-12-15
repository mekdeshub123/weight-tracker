<template>
  <div id="app">
    
    <Header></Header>
    <WeightTracker v-on:record-added="newRecordAdded"></WeightTracker>

   <WeightTable v-bind:records="records"
                v-on:delete-record="recordDeleted">
   </WeightTable>
   <WeightMessage v-bind:message="message" v-bind:date="date"></WeightMessage>
    <Footer></Footer>
  </div>
</template>

<script>
import WeightTracker from './components/WeightTracker.vue'
import WeightTable from './components/WeightTable.vue'
import WeightMessage from './components/WeightMessage'
//import RecordRow from './components/RecordRow'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  data(){
    return{
      records: [],
      message: '',
      weight: '',
      date: ''

    }
  },
  components: {
    WeightTracker,
    //RecordRow,
    WeightTable,
    WeightMessage,
    Header,
    Footer
  },
  methods: {
    newRecordAdded(record) {
      this.records.push(record)
    },
    recordLostOrGain(record) {
      this.message = record.lost ? 'Congratulation,' : 'Sorry, '
      this.date = record.date
    },
    recordDeleted(record) {
      this.records = this.records.filter( function(s){
        return s != record
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px; 
  padding: 20px;
}
</style>
