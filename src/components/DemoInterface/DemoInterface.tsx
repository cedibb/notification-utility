import { useNotification } from '../Notification/useNotification';

import EventBus from '@/EventBus';

import { JButton } from '@jupiter-ds/react';

import './DemoInterface.css';

const DemoInterface: () => JSX.Element = () => {
  const notification = useNotification();

  return (
    <div className="demo">
      <h1>Notification Demo</h1>
      <br />
      <br />
      <div>
        <h2>Manual</h2>
        <div className={'button-container'}>
          <JButton
            onClick={() =>
              notification?.add({
                message: 'Success (Manual) - 1s',
                status: 'success',
                timeout: 1000
              })
            }
          >
            Success
          </JButton>

          <JButton
            onClick={() =>
              notification?.add({
                message: 'Info (Manual) - 2s',
                status: 'info',
                timeout: 2000
              })
            }
          >
            Info
          </JButton>
          <JButton
            onClick={() =>
              notification?.add({
                message: 'Warning (Manual) - 3s',
                status: 'warning',
                timeout: 3000
              })
            }
          >
            Warning
          </JButton>
          <JButton
            onClick={() =>
              notification?.add({
                message: 'Error (Manual) - 4s',
                status: 'error',
                timeout: 4000
              })
            }
          >
            Error
          </JButton>
        </div>
      </div>
      <div>
        <h2>Emitter</h2>
        <div className={'button-container'}>
          <JButton
            onClick={() =>
              EventBus.currentInstance.emit('newNotification', {
                message: 'Success (Emitter) - 1s',
                status: 'success',
                timeout: 1000
              })
            }
          >
            Success
          </JButton>

          <JButton
            onClick={() =>
              EventBus.currentInstance.emit('newNotification', {
                message: 'Info (Emitter) - 2s',
                status: 'info',
                timeout: 2000
              })
            }
          >
            Info
          </JButton>
          <JButton
            onClick={() =>
              EventBus.currentInstance.emit('newNotification', {
                message: 'Warning (Emitter) - 3s',
                status: 'warning',
                timeout: 3000
              })
            }
          >
            Warning
          </JButton>
          <JButton
            onClick={() =>
              EventBus.currentInstance.emit('newNotification', {
                message: 'Error (Emitter) - 4s',
                status: 'error',
                timeout: 4000
              })
            }
          >
            Error
          </JButton>
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;
