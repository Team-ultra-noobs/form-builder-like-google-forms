import {createStore} from 'easy-peasy';
import formModel from './formModel'
import fieldModel from './fieldModel';
import optionModel from './optionModel'

const store = createStore({
    forms: formModel,
    fields: fieldModel,
    options: optionModel
})

export default store