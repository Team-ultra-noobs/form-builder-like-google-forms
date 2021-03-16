import {action, persist} from 'easy-peasy';

import shortid from 'shortid';

const optionModel = persist(
    {
        options:{},
        createOption: action((state, payload)=> {
            const option = {};
            option.id = shortid.generate;
            option.name = payload.name;
            option.fieldId = payload.fieldId;
            state.options[option.id] = option;
        }),
        removeOption: action((state, payload)=> {
            delete state.options[payload.optionID]
        }),
        updateName: action((state, payload)=> {
            state.options[payload.optionId].name = payload.name || state.options[payload.optionId].name
        }) 
    },
    {storage: localStorage}   
);
export default optionModel;