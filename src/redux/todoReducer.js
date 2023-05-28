
/* reducer yazma adımları:
1. initialState> başlangıçState yazılır.
2.  Bir Fonksiyon olan Reducer yazılır.
    a- state ve action parametreleri tanımlanır.
3. reducer export edilir.

*/
const initialState = {
    //genelde obje olur
    todos: []
}

const todoReducer = (state = initialState, action) => {
    // actionun tipine göre state günceller
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload],
            }
            break;
        default: return state;
    }

}

export default todoReducer;
