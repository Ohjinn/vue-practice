<template>
    <div>
        <div>
            <select v-model="selectedCity">
                <option v-for="(city, i) in cityList" :value="city.code" :key="i">{{city.name}}</option>
            </select>
            <input type="text" v-model="userName" @keyup.enter="searchUserList"/>
            <button type="button" @click="searchUserList">조회</button>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>나이</th>
                        <th>직업</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(person, i) in userList">
                        <td>{{person.name}}</td>
                        <td>{{person.age}}</td>
                        <td>{{person.job}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:'',
    components:{},
    data(){
        return{
            cityList: [
                {name:'서울', code:'02'},
                {name:'부산', code:'21'},
                {name:'제주', code:'064'}
            ],
            selectedCity: '',
            userName: '',
            userList: []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted() {},
    methods: {
        searchUserList(){
            // const selectedCity = this.selectedCity
            // const userName = this.userName
            const params = {
                selectedCity: this.selectedCity,
                userName: this.userName
            }
            this.userList = this.getUserList(params);
        },
        getUserList(params) {
            console.log(params)
            let list = [
                {name: '장호진', age: 10, job: 'student'},
                {name: '장소현', age: 40, job: 'student'},
                {name: '원지정', age: 10, job: 'student'},
                {name: '김민지', age: 30, job: 'student'}
            ];

            return list;
        }
    }
}
</script>

<style scoped>

</style>