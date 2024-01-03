import { useDispatch } from 'react-redux';
import { DELETE_CONTACT } from '../../store/type';

export default function ContactsItem({ contact }) {
  const { name, number, id } = contact;
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  return (
    <>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={handleClick}>Delete</button>
    </>
  );
}
