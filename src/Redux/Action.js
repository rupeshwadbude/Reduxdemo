
import {first, second, third , DELET} from './ActionType';

export const firstsubmit = (add_Data) =>{
    console.log("Action",add_Data)
    return{
    type: first,
    payload: add_Data
    }
}

export const secondsubmit = (add_Data) =>{
    console.log("secondAction",add_Data)
    return{
    type: second,
    payload: add_Data
    }
}

export const thirdsubmit = (add_Data) =>{
    console.log("thirdAction",add_Data)
    return{
    type: third,
    payload: add_Data
    }
}

export const Delete = (id) =>{
    return{
        type:DELET,
        payload:id
    }
}


