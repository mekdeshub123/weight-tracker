<template>
    <tr>
        <td>{{date}}</td>
        <td>{{weight}}</td>
        <td> {{weightLoss }}</td>
        <td v-show="edit"></td>
    </tr>
    
</template>

<script>
export default {
    name: 'RecordRow',
    props: {
        date: Date,
        weight: Number,
        weightLoss:Number,
        edit: Boolean
    },
    methods: {}
    
    
}
</script>
<style scoped>

</style>