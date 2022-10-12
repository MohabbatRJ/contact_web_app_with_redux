import { CLEAR_ALL_CONTACT, CREATE_CONTACT, DELETE_CONTACT, DELETE_SELECTED_CONTACT, GET_CONTACT, SELECT_ALL_CONTACT, UPDATE_CONTACT } from "../constant/actionTypes";


const initialState = {
    contacts: [
        {
            "id": 'ZHMwuJvzEJ',
            "name": "Leanne Graham",
            "email": "Leanne@yahoo.com",
            "phone": "15416849612",
        },
        {
            "id": 'ANV_XFBsS1',
            "name": "Ervin Howell",
            "email": "Ervin@gmail.com",
            "phone": "24789658125",

        },
        {
            "id": '_pOKNDsIlO',
            "name": "Clementine Bauch",
            "email": "Bauch@gmail.com",
            "phone": "01236891125",
        },
        {
            "id": 'bcVoDemQaF',
            "name": "Patricia Lebsack",
            "email": "Patricia@yahoo.com",
            "phone": "20123698547",
        },
        {
            "id": '_d_WorTnCj',
            "name": "Chelsey Dietrich",
            "email": "Chelsey@gmail.com",
            "phone": "15255488960",
        }
    ],
    contact: null,
    selectedContacts: [],
}


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            }
        case GET_CONTACT:
            let contactData = state.contacts.filter(
                (contact) => contact.id === action.payload
            );
            contactData = contactData.values();
            for (let value of contactData) {
                contactData = value;
            }
            return {
                ...state,
                contact: contactData,
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case SELECT_ALL_CONTACT:
            return {
                ...state,
                selectedContacts: action.payload,
            };
        case DELETE_SELECTED_CONTACT:
            return {
                ...state,
                contacts: [],
            };
        case CLEAR_ALL_CONTACT:
            return {
                ...state,
                selectedContacts: [],
            };
        default:
            return state
    }
}


export default contactReducer;