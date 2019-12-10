<template>
<div class="footer">

<div class="m-2">
    <span class="p-3">
        <router-link to="/">home</router-link>
    </span>

    <span class="p-3">
        <router-link to="/about">About this site</router-link>
    </span>
    <!--<p>xxxxxxxxxxx</p>-->
</div>
<p class="text-right p-2">Header image by
    <a href="https://unsplash.com/photos/iLKK0eFTywU">@graphicnode via unsplash.</a>
</p>

</div>   
</template>


<script>
export default {
    name: 'Footer'
    
}
</script>


<style scoped>
.footer{
    background-color: rgb(224, 214, 201);
    text-align: center;
}
</style>