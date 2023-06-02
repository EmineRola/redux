
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
        //EKLEM İŞEMİ DİSPATC EDİLİRSE 
        case "ADD_TODO":
            return {
                todos: [...state.todos, action.payload],
            }

        //SİLME İŞEMİ DİSPATCH EDİLİRSE
        case "DEL_TODO":

            const filtredTodos = state.todos.filter((item) => item.id !== action.payload)
            // sil butonuna tıklanıldığı zaman halihazırdaki state git
            //içindeki todosları filtrele herbirine item de ve fonksiyonu çalıştır.
            //item.id ie actionla gelen payloada eşit olmayanları listele
            //return kısmı storedaki bilgileri nasıl güncelleyeğimizi belirler
            return {
                todos: filtredTodos
            }

        case "EDIT_TODO":
            /* 
              splice > diziyi güncellemeye yarayan method
              splice istekleri 
                1. dizideki elmanın sırası
                2. kaçta eleman silicem
                3. silinen yerine ne gelicek
      
               yapılması gerek : güncellencek dizinin bir kopyasını oluştur 
            */

            const cloneTodos = state.todos;

            // dizideki elemanın sırasıNI BULMA
            const index = state.todos.findIndex((item) => item.id === action.payload);


            // elemanı güncelleme
            const updateItem = { ...state.todos[index], isDone: !state.todos[index].isDone };
            //state içindeki todoslardan indexinci sıradaki elemanın var olan isDone değeri yada state içindeki todoslardan 
            //indexinci sıradaki elemanın var olan isDone değerinin tam tersi
            cloneTodos.splice(index, 1, updateItem)

            // store' u günceller
            return {
                todos: cloneTodos,
            };


        //eğerki çalışan aksiyonun yukarıda karşılığı yoksa store olduğu gibi bırakır.


        case "CLEAR":
            return {
                todos: []
            }

        default:
            return state;

        case "SET_TODOS":
            return {
                todos: action.payload
            }

    }

}

export default todoReducer;
