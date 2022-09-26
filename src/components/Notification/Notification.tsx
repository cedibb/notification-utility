import { useTimeout } from '@/hooks/useTimeout';
import { JAlert } from '@jupiter-ds/react';
import { useState } from 'react';

interface Props {
  message: string;
  variant: 'error' | 'success' | 'info' | 'warning';
  timeout: number;
  close: () => void;
}

export const Notification: ({
  message,
  variant,
  timeout,
  close
}: Props) => JSX.Element = ({ message, variant, timeout, close }) => {
  const hideAnimationDuration = 300;
  const [show, setShow] = useState(true);

  const dismiss = (): void => {
    setShow(false);
    void new Promise((resolve, reject) => {
      setTimeout(() => {
        close();
        resolve(null);
      }, hideAnimationDuration);
    });
  };

  const [reset, clear] = useTimeout(dismiss, timeout - hideAnimationDuration);

  return (
    <JAlert
      message={message}
      variant={variant}
      show={show}
      onClick={close}
      onMouseEnter={clear}
      onMouseLeave={reset}
      style={{ position: 'relative' }}
    />
  );
};
