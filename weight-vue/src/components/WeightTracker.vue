<template>
<div>
  <div class="alert alert-danger" v-show="errors && errors.length > 0">
              <li v-for="(error, ind) in errors" :key="ind">{{ error}}</li>
      </div>
  <div class="card add-weight m-2 p-2">
      <form id="form-weight" @submit.prevent="addRecord"> 
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
       <button class="btn btn-primary" v-on:click.prevent="addRecord">Add </button>
        </diV>
      </form>

  </div>
</div> 
</template>

<script>
export default {
  name: 'WeightTracker',
  data() {
    return {
     newDate: '',
     newWeight: '',
     wLoss: '',
      errors:[]
    }
    
  },
  methods: {
    
      addRecord() {
        this.errors = []
        if(this.newDate && this. newWeight) {
          let record = {date: this.newDate, weight: this.newWeight, wLoss: this.wLoss }
          this.$emit('record-added', record)
          this.newDate = ''
          this.newWeight = ''
          this.wLoss = ''
          this.$record_api.addRecord(record)
        } else {
          this.errors.push('Date and Weight is required')
        }
      }   
  }
  
}
</script>

<!--  attribute to limit CSS to this component only -->
<style scoped>
#form-weight{
  background-image: linear-gradient(rgb(12, 114, 114), rgb(44, 167, 167), rgb(145, 253, 253))
}

</style>
