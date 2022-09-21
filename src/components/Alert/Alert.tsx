/* eslint-disable react/prop-types */

import useAlert from './useAlert';
import { JAlert } from '@jupiter-ds/react';

const Alert: ({ message, color }: Props) => JSX.Element = ({
  message,
  color
}) => {
  const [showing, setShowing, expired] = useAlert(3000);

  return (
    !expired && (
      <JAlert
        message={message}
        show={showing}
        color={color}
        style={{ position: 'relative' }}
        onClick={() => {
          setShowing(false);
        }}
      />
    )
  );
};

export default Alert;
