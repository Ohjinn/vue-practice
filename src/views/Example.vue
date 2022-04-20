<template>
    <div>
        <h1>{{parentMsg}}</h1>
        <ChildComponent @send-message="sendMessage" />
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name:'',
    components:{ChildComponent},
    data(){
        return{
            parentMsg: ''
        };
    }, 
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendMessage(data) {
            alert(data)
            this.parentMsg = data;
        }
    }
}
</script>

<style scoped>
</style>