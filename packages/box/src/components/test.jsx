import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { socket } from 'core/ws/ws';

export const Test = () => {
  const [state, setState] = useState({ message: '', count: 0 });
  const { count, message } = state;

  return (
    <div>
      <div>
        <p>
          {count < 6 ? `Кол-во кликов: ${count}` : 'Have a nice day!'}
        </p>
        <Button
          variant="contained"
          onClick={() => setState({ ...state, count: count + 1 })}
        >
          Click
        </Button>
      </div>
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
  )
}
