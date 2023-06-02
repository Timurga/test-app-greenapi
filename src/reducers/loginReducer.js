const defaultState = {
    isAuth: false,
    idInstance: '',
    apiTokenInstance: '',
}

const SET_USER = 'SET_USER'
const SET_ID = 'SET_ID'
const SET_API = 'SET_API'

export default function loginReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
            }
        
        case SET_ID:
            return {
                ...state,
                idInstance: action.payload
            }

        case SET_API:
            return {
                ...state,
                apiTokenInstance: action.payload
            }

        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user, })
export const setId = user => ({type: SET_ID, payload: user})
export const setApi = user => ({type: SET_API, payload: user})