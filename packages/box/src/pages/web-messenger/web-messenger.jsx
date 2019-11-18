import React from 'react';

import { withCore } from 'core/hocs/with-core-component';
import { WebMessenger as WebMessengerCore } from 'core/pages/web-messenger';

import { SelectUser } from '../../components/messenger/select-user/select-user';

import './web-messenger.scss';

const WebMessengerUI = ({ isInProgress, usersList }) => (
  <div className="web-messenger">
    <SelectUser
      isInProgress={isInProgress}
      usersList={usersList}
    />
    <div className="d-flex mt-2">
      <div className="web-messenger-user-list">messages</div>
      <div className="web-messenger-correspondence">messenger</div>
    </div>
  </div>
);

export default withCore(WebMessengerCore, WebMessengerUI);
