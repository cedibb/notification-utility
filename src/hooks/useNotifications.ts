import { useState, useEffect } from 'react';
import EventBus from '@/EventBus';

const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setInterval(() => {
      EventBus.currentInstance.emit('newNotification', {
        message: 'Random Notification',
        color: 'red'
      });
    }, 5000);

    EventBus.currentInstance.on('newNotification', ({ message, color }) => {
      createNotification(message, color);
    });
  }, []);

  const createNotification = (message, color) =>
    setNotifications((prevNotifications) => [
      { message, color },
      ...prevNotifications
    ]);

  return [notifications, createNotification];
};

export default useNotifications;
