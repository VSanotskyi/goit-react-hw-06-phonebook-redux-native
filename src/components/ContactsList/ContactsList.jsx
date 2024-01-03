import { useSelector } from 'react-redux';
import ContactsItem from '../ContactsItem/ContactsItem';

const filterArrayByName = (nameBySearch, contacts) => {
  if (nameBySearch.length > 0 && contacts.length > 0) {
    return contacts.filter(
      el => el.name.toLowerCase().includes(nameBySearch.toLowerCase()));
  }
  return contacts;
};

export default function ContactsList() {
  const contacts = useSelector((store) => store.contacts);
  const nameBySearch = useSelector((store) => store.findContact);
  const contactsForRender = filterArrayByName(nameBySearch, contacts);

  return (
    <div>
      {
        contactsForRender.length > 0 &&
        <ul>
          <li>
            {contactsForRender.map(contact => (
              <ContactsItem key={contact.name}
                            contact={contact}
              />),
            )}
          </li>
        </ul>
      }
    </div>
  );
}

