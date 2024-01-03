import { useDispatch } from 'react-redux';

import { FIND_CONTACT } from '../../store/type';

export default function ContactsSearch() {
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch({ type: FIND_CONTACT, payload: value });
  };

  return (
    <div>
      <input onChange={handleChange}
             type="text"
      />
    </div>
  );
}
