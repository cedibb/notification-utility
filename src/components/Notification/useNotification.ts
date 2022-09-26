import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';
import { AddNotificationType } from './Notifications.types';

export const useNotification = (): {
  add: AddNotificationType;
} | null => useContext(NotificationContext);
