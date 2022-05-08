import { createStore } from "vuex";
//사용자 로그인 정보나 장바구니 등등 담을 때 쓸 수 있다.
const store = createStore({
    state() {
        return{
            count: 0,
            cart: [{
                    product_id: 1,
                    product_name: '아이폰 거치대',
                    category: 'A'
                },
                {
                    product_id: 2,
                    product_name: '블루투스 마우스',
                    category: 'B'
                }
            ]
        }
    },
    mutations: {
        increment(state) {
            state.count = state.count + 1;
        }
    },
    getters: {
        cartCount:(state) => {
            return state.cart.length;
        },
        productACount:(state) => {
            return state.cart.filter(p => p.category == 'A').length;
        }
    }
})

export default store;