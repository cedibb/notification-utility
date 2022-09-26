import { useState, useMemo, FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  INotification,
  AddNotificationType,
  RemoveNotificationType
} from './Notifications.types';

import { Notification } from '@/components/Notification';

import { NotificationContext } from './NotificationContext';

import EventBus from '@/EventBus';

const randomId = (): string => `${new Date().getDate()}${Math.random()}`;

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    EventBus.currentInstance.on('newNotification', add);
  }, []);

  const add: AddNotificationType = (content) =>
    setNotifications((prevNotifications) => [
      { id: randomId(), ...content },
      ...prevNotifications
    ]);

  const remove: RemoveNotificationType = (id) =>
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );

  const contextValue = useMemo(() => ({ add }), []);
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <div className="notification-container">
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              message={notification.message}
              variant={notification.status}
              timeout={notification.timeout}
              close={() => remove(notification.id)}
            ></Notification>
          ))}
        </div>,
        document.body
      )}
    </NotificationContext.Provider>
  );
};
