import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { socket } from 'core/ws/ws';

const Home = () => {
  const [state, setState] = useState({ message: '' });
  const { message } = state;

  return (
    <div>
      <div style={{ width: '250px' }}>
        <form className="d-flex flex-column">
          <TextField
            onChange={e => setState({ ...state, message: e.target.value })}
          />
          <Button
            className="mt-2"
            variant="contained"
            onClick={() => socket.emit('message', { message })}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
