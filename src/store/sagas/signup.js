import { takeEvery, put} from 'redux-saga/effects'
import { signup, signup_fail, signup_reset, signup_success } from '../actions/signup'
import axios from 'axios'
import {API} from '../../config'

function* handleSignup(action){
    try {
      yield axios.post(`${API}/signup`, action.payload)
      // 注册成功
      yield put(signup_success())
    } catch (ex) {
      // 注册失败
      yield put(signup_fail({ message: "注册失败" }))
    }
}

export default function* signupSaga() {
    yield takeEvery(signup, handleSignup)
}