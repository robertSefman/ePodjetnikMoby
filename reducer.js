import {combineReducers} from 'redux'

const LOG_IN_SENT = 'LOG_IN_SENT'
const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
const LOG_IN_REJECTED = 'LOG_IN_REJECTED'
const UPDATE_PARTNER = 'UPDATE_PARTNER'


const merge = (prev, next ) => Object.assign({}, prev, next)

const userReducer = (state={}, action) => {
	switch(action.type){
		case LOG_IN_FULFILLED:
			return merge( state, {token: action.payload})
		case LOG_IN_REJECTED:
			return merge( state, {loginErr: action.payload})
		default:
			return state
	}
}

const partnerReducer = (state=[], action) => {
  
	if( action.type === UPDATE_PARTNER){
    if( !state.partners ){
      state.partners = []
    }
    //console.log('Partner reducer: '+ JSON.stringify(action))
    console.log('Partner reducer action.payload: ' + JSON.stringify(action.payload))
    //return action.payload
    console.log('Partner reducer state: ' + JSON.stringify(state))
    //let x = [...state.partners, action.payload]
    //console.log('Partner reducer x: ' + JSON.stringify(x))

		return [...state.partners, ...action.payload]
    //return [ ...state.partners, {name:"kr en kontakt ročno",phone:"12345678"}] // deluje!!!
	}
	return state
}

const reducer =  combineReducers({
	user: userReducer,
  partners: partnerReducer,

})

export default reducer
