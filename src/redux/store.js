
/* 
store oluşturma,
1.redux kütüphanesinden bize iki farklı metod lazım
createStore ve combineReducer
2. store içerisinde tutulacak veriler kategorise edilirve her biri için reducer oluşturulur.
3.oluşturulan reducerlar combineReducer yardımıyle birleştirilir.
4. create store argüman olarak birleşen reducerlar verilir.
5. store export edilir.

*/
import { createStore, combineReducers } from 'redux';
import todoReducer from './todoReducer';


const rootReducer = combineReducers({
    todoReducer,
    // userReducer,
    // weatherReducer
    // üçünün olduğunu varsayarsak hepsini todoReducer birleştiriyor
    todoState: todoReducer,
})


const store = createStore(rootReducer);
export default store;


