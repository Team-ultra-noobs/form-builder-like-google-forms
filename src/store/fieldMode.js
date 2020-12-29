import {action, persist} from 'easy-peasy';

import shortid from 'shortid';

const filedModel = persist(
    {
        fields: {},
        createFiled: action((state, payload)=> {
            const field = {};
            field.id = shortid.generate();
            field.question = payload.question;
            field.placeholder = payload.placeholder;
            field.type = payload.type;
            if(field.type === 'checkbox' || field.type === 'radio-button'){
                field.options = [];
            };

        }),
        removeFiled: action((state, payload)=> {

        }),
        updateField: action((state, payload)=> {

        }),
        changetype: action((state, payload)=> {

        }),
        addOptions: action((state, payload)=> {

        }),
        removeOptions: action((state, payload)=> {

        }),
    },
    {storage: localStorage}
)