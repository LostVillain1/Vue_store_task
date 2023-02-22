import Vue from 'vue';
import Vuex from 'vuex';

//Чтобы во вью появилась переменная store у каждого экземпляра нужно использовать функцию Vue.use()
// Функция говорит вью, что используется доп модуль, которые расширяет библиотеку вью, т.е доп модуль - Vuex    

Vue.use(Vuex);

// создаем хранилище 

export const store = Vuex.Store({
    state: {
        info: [{
                name: 'Name',
                value: '',
                // pattern: /^[a-zA-Z_$]{2,30}$/,
            },
            {
                name: 'Phone',
                value: '',
                // pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            },
            {
                name: 'Email',
                value: '',
                // pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
            },
            {
                name: 'Age',
                value: '',
                //  pattern: /^[2-9]|\d{1,}$/,
            }
        ],
    },
    getters: {
        test() {
            return 0
        }
    },
    mutations: {

    },
    actions: {

    }
})