<template>
    <tr>
        <td>{{ record. date}}</td>
        <td>{{ record.weight }}</td>
        <td>{{ record.lost}}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteRecord(record)" src="@/assets/delete.png">
        </td>
    </tr>
    
</template>

<script>
export default {
    name: 'RecordRow',
    props: {
        record: Object,
        date: Date,
        weight: Number,
        weightLoss:Number,
        edit: Boolean
    },
    methods: {
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