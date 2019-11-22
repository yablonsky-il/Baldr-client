import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const SelectUser = ({ usersList }) => {
  const [value, setValue] = React.useState('');
  const [labelWidth, setLabelWidth] = React.useState(0);
  const inputLabel = React.useRef(null);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => setValue(event.target.value);

  return (
    <div className="d-flex mt-1">
      <div className="my-auto mr-3">Select user:</div>
      <FormControl className="web-messenger-select" variant="outlined">
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Current user
        </InputLabel>
        <Select
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          labelWidth={labelWidth}
          MenuProps={{
            classes: {
              paper: 'select-menu',
            },
          }}
        >
          <MenuItem value="">None</MenuItem>
          {usersList && usersList.map(({ name, surname }) => (
            <MenuItem
              key={name}
              value={`${name} ${surname}`}
            >
              {name} {surname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
