import {
    SET_AGREEMENT,
    SET_LOCATION,
    SET_QUIZ_TALLY
  } from "../actions/types"
  
  const initialState = {
    loading: true,
    agreement: false,
    location: null,
    quiz: []
  }
  
  export default function(state = initialState, action) {
    const { type, payload } = action
  
    switch (type) {
      case SET_AGREEMENT:
        return {
          ...state,
          agreement: payload
        }
      case SET_LOCATION:
        return {
          ...state,
          ...payload
        }
      case SET_QUIZ_TALLY:
        return {
          ...state,
          ...payload
        }
      default:
        return state
    }
  }
  