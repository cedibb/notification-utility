import { createContext } from 'react';
import { AddNotificationType } from './Notifications.types';

export const NotificationContext = createContext<{
  add: AddNotificationType;
} | null>(null);
