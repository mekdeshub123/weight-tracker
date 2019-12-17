<template>
    <tr class="record-row" v-bind:class="'wLoss-' +record.wLoss">
        <td>{{ record. date}}</td>
        <td>{{ record.weight }}</td>
        <td>{{ record.wLoss}}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteRecord(record)" src="@/assets/delete.png">
        </td>
    </tr>
    
</template>

<script>
export default {
    name: 'RecordRow',
    data(){
        return{
            edit:true,
        }
    },
    props: {
        record: Object,    
    },
    methods: {
        checked(record) {
            this.$emit('record-wLoss', record)
        },
         deleteRecord(record) {
            if(confirm(`Delete ${record.date}?`)) {
                this.$emit('delete-record', record)
            }
        }
    }    
    
}
</script>
<style scoped>
.delete-icon{
    width: 20px;
}

</style>