<template>
  <div>
    <div class="table-space">
        <h3>Records</h3>

        <div class="edit-table-toggle form-check">
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
            <label for="edit-table" class="form-check-lable">Edit Record?</label>

        </div>
        <div id="record-table">
        <table class="table table-hover">
         <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>WLoss</th>
            <th v-show="editTable">Delete</th>
         </tr>
        
         <RecordRow
            v-for="record in records" v-bind:key="record.date"
            v-bind:date="record.date"     
            v-bind:weight="record.weight"
            v-bind:weightLoss="record.weightLoss"
            v-bind:edit="editTable"
            v-on:delete-record="recordDeleted">
         </RecordRow>
        </table>
        </div>
    </div>
  </div>   
</template>
  

<script>
import RecordRow from '@/components/RecordRow.vue'
export default {
    name: 'WeightTable',
    components: { RecordRow},
    //props:[],
    data() {
        return {
            editTable: false
        }
    },
    props: {
        records: Array
    }
    
}
</script>

<!--  attribute to limit CSS to this component only -->
<style scoped>
.table-hover{
    background-color: rgb(191, 250, 250);
    padding: 2px;
}
/*.data {
    background-color: rgb(216, 252, 252),
}*/
</style>