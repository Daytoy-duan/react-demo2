import { handleActions} from 'redux-actions'
import { signup, signup_fail, signup_success } from '../actions/signup'

const initState = {
    loading: false,
    loaded: false,
    success: false,
    message: ""
}

const signupReducer = handleActions({
    // 接收actions
    [signup]: () => ({
      loading: true,
      loaded: false,
      success: false,
      message: ""
    }),
    [signup_success]: () => ({
        loading: false,
        loaded: true,
        success: true,
        message: ""
      }),
    [signup_fail]: (state, action) => ({
      loading: false,
      loaded: true,
      success: false,
      message: action.payload.message
    })
}, initState)

export default signupReducer