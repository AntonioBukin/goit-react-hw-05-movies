import { useState } from 'react';
import { toastWarningMessage } from '../../service/toastInfo';


import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Search.styled';

const Searchbar = ({ inputValue }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInput = e => {
    setSearchQuery(e.currentTarget.value.trimLeft());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      return toastWarningMessage();
    }

    inputValue(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInput}
          value={searchQuery}
        />
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;
