<template>
    <div>
        <button type="button" @click="showData">부모 버튼</button>
        <ChildComponent ref="child_component"/>
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
    computed: {
        msg() {
            return this.$refs.child_component.msg;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showData() {
            alert(this.msg);
        }
    }
}
</script>

<style scoped>
</style>