import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
