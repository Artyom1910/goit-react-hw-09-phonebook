import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts';
import styles from './Filter.module.scss';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={styles.Filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Type name contact"
        />
      </label>
    </div>
  );
}
