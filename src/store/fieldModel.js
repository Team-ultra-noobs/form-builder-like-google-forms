import {action, persist} from 'easy-peasy';

import shortid from 'shortid';

const filedModel = persist(
    {
        fields: {},
        createFiled: action((state, payload)=> {
            const field = {};
            field.id = shortid.generate();
            field.formID = payload.formID;
            field.question = payload.question;
            field.placeholder = payload.placeholder;
            field.type = payload.type;
            if(field.type === 'checkbox' || field.type === 'radio-button'){
                field.options = [];
            };
            state.fields[field.id] = field

        }),
        removeFiled: action((state, payload)=> {
            delete state.fields[payload.fieldId]
        }),
        updateField: action((state, payload)=> {
            const field = state.fields.find(f=> f.id === payload.fieldId);
            state.fileds[field.id] = {
                ...state.fileds[field.id],
                ...payload.data
            }
        }),
        changetype: action((state, payload)=> {
            const field = state.fields.find(f=> f.id === payload.fieldId);
            state.fileds[field.id].type = payload.type ||  state.fileds[field.id].type
        }),
        addOptions: action((state, payload)=> {
            state.fields[payload.fieldID].options.push(payload.optionID)
        }),
        removeOptions: action((state, payload)=> {
            const optionIndex = state.fields[payload.fieldID].options.findIndex(o=> o === payload.optionId)
            state.fields[payload.fieldID].options.splice(optionIndex, 1)
        }),
    },
    {storage: localStorage}
)

export default filedModel;