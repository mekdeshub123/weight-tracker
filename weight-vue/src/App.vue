<template>
  <div id="app">
    
    <Header></Header>

<!-- Since WeightTable is part of WeightTracker, then v-bind records to the records prop in WeightTracker
WeightTracker will need to v-bind records to the Records prop in WeightTable 
 -->

    <WeightTracker v-bind:records="records" v-on:weight-added="newWeightAdd"></WeightTracker>
   <!-- <WeightTable v-bind:records="records"></WeightTable>-->
   <!-- <WeightMessage v-bind:message="message" v-bind:weight="weight"></WeightMessage>-->
   
    <Footer></Footer>
  </div>
</template>

<script>
import WeightTracker from './components/WeightTracker.vue'
//import WeightTable from './components/WeightTable.vue'
//import WeightMessage from './components/WeightMessage'
//import RecordRow from './components/RecordRow'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  data(){
    return{
      // records: []    // store a copy of the records - your app will request the records from your server 
      // For testing your Vue app, you can add some example data to make sure you can see in it your table
      // Once your API is working, remove the example data and replace with an empty array. records: [] 
      records: [ { date: new Date(), weight: 150 } , { date: new Date(), weight: 140}]   // example data for testing. 
    }
  },
  components: {
    WeightTracker,
    //WeightTable,
    //WeightMessage,
    Header,
    Footer
  },
  methods: {
    getAllWeights() {

        // request all the weights from your server
        // store them in the weights array (this.weights)

    },
    newWeightAdd(record) {
      
      //this.records.push(record)

      /*  Adding a record to an array stored in the app will save it in the brower, but not in your database on the server.
      Instead, in this part of the code, you can send a message to your server, asking it to save the new record. 
      It will look like this part of the student example, 
      https://github.com/claraj/student-sign-in-vue-express-api/blob/a6ca7d7390e3c52bc23ef095901aae383c233dd0/student-client/src/App.vue#L41
       */

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
