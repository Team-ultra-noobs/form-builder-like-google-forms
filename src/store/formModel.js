import {action, persist} from 'easy-peasy';

import shortid from 'shortid'

const formModel = persist(
    {
        forms: {},
        createForm: action((state, payload)=> {
            const form = {}
            form.id = shortid.generate();
            form.name = payload;
            form.fields = [];
            form.fieldCount = form.fields.length
            state.forms[form.id] = form
        }),
        updateName: action((state, payload)=> {
            state.forms[payload.formId].name = payload.name
        }),
        removeForm: action((state, payload)=> {
            delete state.forms[payload]
        }),
        addFields: action((state, payload)=> {
            state.forms[payload.formId].fields.push(payload.fieldId)
        }),
        removeFiled: action((state, payload)=> {
            const form = state.forms[payload.formId]
            const index = form.fields.findIndex(id => id === payload.fieldId);
            form.fields.splice(index, 1)
        })
    },
    {storage: localStorage}
)

export default formModel;