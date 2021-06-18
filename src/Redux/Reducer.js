
import { first, second, third , DELET} from './ActionType'

const initialState = {
    FormData: [],
    data:[]
   
}

export default function FormReducer(state = initialState, action) {

    switch (action.type) {

        case first:
            {
                const add_Data = action.payload;

                return {
                    ...state,
                    FormData: {
                        firstname: add_Data.firstname,
                        lastname: add_Data.lastname,
                        dob: add_Data.dob,
                        marital_status: add_Data.marital_status
                    }
                }
            }

        case second:
            {
                const add_Data = action.payload;

                return {
                    ...state,
                    FormData: {
                        firstname: add_Data.firstname,
                        lastname: add_Data.lastname,
                        dob: add_Data.dob,
                        marital_status: add_Data.marital_status,
                        Address: add_Data.Address,
                        Country: add_Data.Country,
                        City: add_Data.City,
                        District: add_Data.District
                    }
                }
            }

        case third:
            console.log("Third Reducer",state)
            {
                const add_Data = action.payload;
                
                
                return {
                    ...state,
                    data: [...state.data,{
                        id: Math.random(),
                        firstname: add_Data.firstname,
                        lastname: add_Data.lastname,
                        dob: add_Data.dob,
                        marital_status: add_Data.marital_status,
                        Address: add_Data.Address,
                        Country: add_Data.Country,
                        City: add_Data.City,
                        District: add_Data.District,
                        Degree: add_Data.Degree,
                        College: add_Data.College,
                        Year: add_Data.Year
                    }]
                }
            }
            case DELET:return { 
                ...state,
                data: state.data.filter(element=>element.id!==action.payload)
             }

        default:
            return state;
    }
}