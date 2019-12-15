<template>
  <div id="table-container">
        <div class="table-space">
            <h3> Weight Records</h3>
        </div>

        <div class="edit-table-toggle form-check">
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable"><!--v-model added to edit table data-->
            <label for="edit-table" class="form-check-lable">Edit Record?</label>
    
        <div id="record-table">
        <table class="table">
         <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>Lost</th>
            <th v-show="editTable">Delete</th><!--v-show to edit table-->
         </tr>
            <!--v-bind: is used in a loop to associate every generated HTML element with a unique value. 
            it Helps vue re-draw when when data changes-->
         <tr class="record-row" v-for="record in records" v-bind:key="record.date" v-bind:class="'lost-'+record.lost">
             <td>{{ record.date}}</td>
             <td>{{ record.weight}}</td>
             <td><input type="checkbox" v-model="record.lost" v-on:change="checked(record)"></td>
         </tr>
        
         <RecordRow
            v-for="record in records" v-bind:key="record.date"
            v-bind:record="record"
            v-bind:edit="editTable"
            v-on:record-lost="recordLostOrGain"
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
    components: { 
        RecordRow
    },
    //props:[],
    data() {
        return {
            editTable: false
        }
    },
    props: {
        records: Array
    },
    //record deleted and chacked events will emit message to parent
    methods: {
        recordDeleted(record) {
            this.$emit('delete-record', record)
        },
        checked(record) {
            this.$emit('record-lost', record)
        }
    }
    
}
</script>

<!--  attribute to limit CSS to this component only -->
<style scoped>
.table{
    background-color: rgb(191, 250, 250);
}
.table-space{
    padding-left: 20px;
}

/*.data {
    background-color: rgb(216, 252, 252),
}*/
</style>