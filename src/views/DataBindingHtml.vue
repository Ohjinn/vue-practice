<template>
    <div v-html="htmlString"></div>
</template>

<script>
export default {
    name:'',
    components:{},
    data(){
        return{
            htmlString: '<p style="color:red;">this is a red string.</p>'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted() {},
    methods: {}
}
</script>

<style scoped>

</style>