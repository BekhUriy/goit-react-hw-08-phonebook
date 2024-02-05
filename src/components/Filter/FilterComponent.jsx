// Filter.js
import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filterSlice';
import styled from 'styled-components';
import { selectFilter } from '../../redux/selectors';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
`;

const InputFilter = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(onChangeFilter(e.target.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <InputFilter type="text" value={filter} onChange={handleFilterChange} />
    </FilterContainer>
  );
};
