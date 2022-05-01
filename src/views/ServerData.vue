<template>
<div>
    <button type="button" @click="getProductList">조회</button>
    <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(prouct, i) in productList">
                <td>{{prouct.product_name}}</td>
                <td>{{prouct.price}}</td>
                <td>{{prouct.delivery_price}}</td>
                <td>{{prouct.category}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name:'',
    components:{},
    data(){
        return{
            productList: []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.api('https://07bc030c-4f0b-4150-a026-a75b37ebf038.mock.pstmn.io', 'get', {});
            console.log(this.productList);
        },
        async api(url, methods, data) {
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
</script>

<style scoped>
</style>