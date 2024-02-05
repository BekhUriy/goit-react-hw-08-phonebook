// ContactList.js
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operation';
import styled from 'styled-components';
import { selectVisibleContacts } from '../../redux/selectors';

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #c82333;
  }
`;

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContact = useSelector(selectVisibleContacts);

  return (
    <ItemsList>
      {visibleContact.map(el => (
        <ContactItem key={el.id}>
          <span>{el.name}</span>
          <span>{el.number}</span>
          <DeleteButton
            type="button"
            onClick={() => dispatch(deleteContact(el.id))}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ItemsList>
  );
};
