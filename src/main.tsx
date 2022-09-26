import ReactDOM from 'react-dom/client';
import App from '@/components/App';

import { NotificationProvider } from '@/components/Notification/NotificationProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
