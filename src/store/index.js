import Vue from 'vue';
import Vuex from 'vuex';

//Чтобы во вью появилась переменная store у каждого экземпляра нужно использовать функцию Vue.use()
// Функция говорит вью, что используется доп модуль, которые расширяет библиотеку вью, т.е доп модуль - Vuex    

Vue.use(Vuex);

// создаем хранилище 

export const store = new Vuex.Store({
    state: {
        info: [{
                name: 'Name',
                pattern: /^[a-zA-Z_$]{2,30}$/,
                valid: false
            },
            {
                name: 'Phone',
                pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                valid: false
            },
            {
                name: 'Email',
                pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                valid: false
            },
            {
                name: 'Age',
                pattern: /^[2-9]|\d{1,}$/,
                valid: false
            }
        ],
    },
    getters: {
        inputs(state) {
            return state.info
        },
        submitEnable(state) {
            return state.info.every(item => item.valid)
        }
    },
    mutations: {
        setValid(state, {field, isValid}) {
            const find = state.info.find(item => item.name === field)
            find.valid = isValid
        }
    },
    actions: {

    }
})