import { combineReducers } from "redux"
import alert from "reducers/alertReducer"
import auth from "reducers/authReducer"
import user from "reducers/userReducer"
import quiz from "reducers/quizReducer"

export default combineReducers({
  alert,
  auth,
  user,
  quiz,
})
