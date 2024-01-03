import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import ContactsSearch from './ContactsSearch/ContactsSearch';

export default function App() {
  return (
    <div>
      <ContactsForm />
      <ContactsSearch />
      <ContactsList />
    </div>
  );
}
