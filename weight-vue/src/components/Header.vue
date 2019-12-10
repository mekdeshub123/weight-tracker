<template>
<div class="header">

<div class="jumbotron">
    <h1 class="display-4" id="title"><b>Weight Tracker</b></h1>

</div>
    
</div>
    
</template>

<script>
export default {
    name: 'Header'
    
}
</script>

<style scoped>
.jumbotron{
    background-image: url('../assets/scale.jpg');
    background-position: center;
    background-size: cover;
}
#title{
    font-weight:500;
    color: rgb(24, 129, 129); 
    text-align: center;
}

</style>