import { createStore } from 'redux';
import { ADD_CONTACT, DELETE_CONTACT, FIND_CONTACT, NEW_CONTACT } from './type';
import { LOCAL_STORAGE_KEY } from '../components/ContactsForm/ContactsForm';

const contactsFromLocalStorage = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_KEY));

const reducer = (state, action) => {
  if (action.type === NEW_CONTACT) {
    return {
      ...state,
      contact: { ...state.contact, ...action.payload },
    };
  } else if (action.type === ADD_CONTACT) {
    return {
      ...state,
      contact: {
        id: null,
        name: '',
        number: '',
      },
      contacts: [...state.contacts, action.payload],
    };
  } else if (action.type === DELETE_CONTACT) {
    return {
      ...state,
      contacts: state.contacts.filter(({ id }) => id !== action.payload),
    };
  } else if (action.type === FIND_CONTACT) {
    return {
      ...state,
      findContact: action.payload,
    };
  }

  return state;
};

const initState = {
  contacts: contactsFromLocalStorage ? contactsFromLocalStorage : [],
  contact: {
    id: null,
    name: '',
    number: '',
  },
  findContact: '',
};

export const store = createStore(reducer, initState);
