import {createStore} from 'easy-peasy';
import formModel from './formModel'

const store = createStore({
    forms: formModel
})

export default store