import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit, value  }) => {
  const [searchMovie, setSearchMovie] = useState(value);

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(searchMovie.trim().toLowerCase());
  };
    
  const onInputChange = ({ target }) => {
     setSearchMovie(target.value);
  };

  return (
      <Form onSubmit={onFormSubmit}
            autoComplete="off">
      <Input
        type="text"
        value={searchMovie}
        onChange={onInputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};