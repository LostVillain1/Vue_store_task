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
            },
            {
                name: 'Phone',
                pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
            },
            {
                name: 'Email',
                pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
            },
            {
                name: 'Age',
                pattern: /^[2-9]|\d{1,}$/,
            }
        ],
        correctInputs: 0
    },
    getters: {
        inputs(state) {
            return state.info
        }
    },
    mutations: {
        incrementInputs(state) {
            state.correctInputs++
        },
        decrementInputs(state) {
            if (state.correctInputs > 0) {
                state.correctInputs--
            }
        }
    },
    actions: {

    }
})