import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDO = text => {
    return {
        type: ADD,
        text
    };
};

 export const deleteToDO = id =>{
    return{
        type: DELETE,
        id
    };
        
};

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [{ text : action.text, id : Date.now() }, ...state];
        case DELETE:
            return state.filter(toDO => toDO !== action.id);
        default: 
            return state;
    }
}

const store = createStore(reducer);

export default store;