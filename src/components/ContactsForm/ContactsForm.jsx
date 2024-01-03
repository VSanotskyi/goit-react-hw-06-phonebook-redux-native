import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { ADD_CONTACT, NEW_CONTACT } from '../../store/type';

export const LOCAL_STORAGE_KEY = 'contacts';

const contactsForRender = (contacts, contact) => {
  return contacts.find(el => el.name === contact.name);
};

export default function ContactsForm() {
  const contact = useSelector((state) => state.contact);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  
  const handleChange = ({ target: { name, value } }) => {
    dispatch({ type: NEW_CONTACT, payload: { id: nanoid(), [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactsForRender(contacts, contact)) {
      alert('error');
      return;
    }

    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text"
                 id="name"
                 name="name"
                 value={contact.name}
                 onChange={(e) => handleChange(e)}
                 required
          />
        </div>
        <div>
          <label htmlFor="number">number</label>
          <input type="tel"
                 id="number"
                 name="number"
                 value={contact.number}
                 onChange={(e) => handleChange(e)}
                 required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
