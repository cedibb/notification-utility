import Notification from '../Alert';
import useNotifications from '../../hooks/useNotifications';

import EventBus from '@/EventBus';

import './App.css';

const App: () => JSX.Element = () => {
  const [notifications, createNotification] = useNotifications();
  return (
    <>
      <div className="notification-container">
        {notifications.map(({ message, color }, i) => (
          <Notification key={i} message={message} color={color} />
        ))}
      </div>
      <h1>Notification Demo</h1>
      <button onClick={() => createNotification('Info', 'info')}>
        Info (Manual)
      </button>
      <button onClick={() => createNotification('Success', 'success')}>
        Success (Manual)
      </button>
      <button onClick={() => createNotification('Warning', 'warning')}>
        Warning (Manual)
      </button>
      <button onClick={() => createNotification('Error', 'alert')}>
        Error (Manual)
      </button>
      <br />

      <button
        onClick={() => {
          EventBus.currentInstance.emit('newNotification', {
            message: 'Info',
            color: 'info'
          });
        }}
      >
        Info (Emit)
      </button>
      <button
        onClick={() => {
          EventBus.currentInstance.emit('newNotification', {
            message: 'Success',
            color: 'success'
          });
        }}
      >
        Success (Emit)
      </button>
      <button
        onClick={() => {
          EventBus.currentInstance.emit('newNotification', {
            message: 'Warning',
            color: 'warning'
          });
        }}
      >
        Warning (Emit)
      </button>
      <button
        onClick={() => {
          EventBus.currentInstance.emit('newNotification', {
            message: 'Error',
            color: 'error'
          });
        }}
      >
        Error (Emit)
      </button>
    </>
  );
};

export default App;
