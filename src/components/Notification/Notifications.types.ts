export interface NotificationContent {
  message: string;
  status: 'error' | 'success' | 'info' | 'warning';
  timeout: number;
}

export interface INotification extends NotificationContent {
  id: string;
}

export type AddNotificationType = (content: NotificationContent) => void;

export type RemoveNotificationType = (id: string) => void;
