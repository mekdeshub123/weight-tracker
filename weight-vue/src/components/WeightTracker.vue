<template>
<div>
  <div class="alert alert-danger" v-show="errors && errors.length > 0">
              <li v-for="error in errors" :key=error>{{ error}}</li>
      </div>
  <div class="card add-weight m-2 p-2">
      <form id="form-weight"> 
       <h4 class="card-title"><b>Add current weight</b></h4>      
            <div class="form-group side">
                <label for="date"><b>Enter date</b></label>
                <input type="date" ref="date" class="form-control" v-model.trim="newDate">
            </div>
            <div class="form-group side">
                <label for="weight"><b>Your weight</b></label>
                <input type="number" ref="weight" class="form-control" v-model.trim="newWeight">
            </div>
        <diV class="side">
       <!-- <button class="btn btn-primary" v-on:click.prevent="addWeight">Add </button> -->
       <button class="btn btn-primary" v-on:click="addWeight">Add </button>
        </diV>
      </form>

  </div>
  <div>
      <weightTable></weightTable>
    </div>
</div> 
</template>

<script>
import WeightTable from '@/components/WeightTable.vue'
export default {
  name: 'WeightTracker',
  components:{
      WeightTable,
  },
  data() {
    return {
     newDate: '',
     newWeight: '',
      errors:[]
    }
    
  },
  methods: {
    
      addWeight() {
        this.errors = []
        if(this.newDate && this. newWeight) {
          let record = {date: this.newDate, weight: this.newWeight }
          this.$emit('weight-added', record)
          this.newDate = ''
          this.newWeight = ''
        } else {
          this.errors.push('Date and Weight is required')
        }
      }   
      /*addWeight(){
         this.date= this.$refs.date.value
         this.weight = this.$refs.weight.value
         
      }*/
  }
  
}
</script>

<!--  attribute to limit CSS to this component only -->
<style scoped>
#form-weight{
  background-image: linear-gradient(rgb(12, 114, 114), rgb(44, 167, 167), rgb(145, 253, 253))
}

</style>
