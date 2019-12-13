<template>
  <div id="app">
    
    <Header></Header>
    <WeightTracker v-on:weight-added="newWeightAdd"></WeightTracker>
   <!-- <WeightTable v-bind:records="records"></WeightTable>-->
   <!-- <WeightMessage v-bind:message="message" v-bind:weight="weight"></WeightMessage>-->
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
import WeightTracker from './components/WeightTracker.vue'
//import WeightTable from './components/WeightTable.vue'
//import WeightMessage from './components/WeightMessage'
//import RecordRow from './components/RecordRow'
import Header from './components/Header'
//import Footer from './components/Footer'

export default {
  name: 'app',
  data(){
    return{

    }
  },
  components: {
    WeightTracker,
    //WeightTable,
    //WeightMessage,
    Header,
    //Footer
  },
  methods: {
    newWeightAdd(record) {
      this.records.push(record)
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
