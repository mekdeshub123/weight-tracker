<template>
 <div>
         <transition name="fade">
             <div class="alert alert-class" v-if="seeMessage">{{ message}} {{ weight}}</div>
         </transition>
 </div>
</template>

<script>
export default {

    name:'WeightMessage',
    data(){
        return{
            seeMessage: false
            
        }
    },
    props: {
        message: String,
        weight: String
    },
    dwatch: {
        message(){
            this.seeMessage = true
            setTimeout(() => {
                this.seeMessage = false
            }, 3000)
        }
    }
    
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-actve{
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>
