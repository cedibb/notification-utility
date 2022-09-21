import { useEffect, useState } from 'react';

const useAlert = (timeout) => {
  const [showing, setShowing] = useState(true);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const init: () => Promise<void> = async () =>
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          setShowing(false);
          resolve(true);
        }, timeout)
      ).then(() => {
        setTimeout(() => {
          setExpired(true);
        }, 300);
      });

    void (async () => {
      await init();
    })();
  }, []);

  return [showing, setShowing, expired];
};

export default useAlert;
