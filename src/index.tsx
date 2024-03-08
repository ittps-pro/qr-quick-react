import React, { StrictMode, Fragment, useCallback } from 'react';
import { createRoot } from 'react-dom/client';

import { Apps } from './App';
import { App, Form } from 'antd';
const root = createRoot(document.getElementById('app'));

const MyPage: React.FC = () => {
  const { message, notification, modal } = App.useApp();
  message.success('Good!');
  notification.info({ message: 'Good' });
  modal.warning({ title: 'Good' });
  // ....
  // other message, notification, modal static function
  return <div>Hello word</div>;
};

const MyApp: React.FC = () => (
  <App>
    <MyPage />
  </App>
);

root.render(
  <App>
    <Form></Form>
    <Apps name="StackBlitz" />
  </App>
);
