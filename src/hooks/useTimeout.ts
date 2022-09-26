import { useEffect, useRef, useCallback } from 'react';

type timeoutRefType = React.MutableRefObject<
  ReturnType<typeof setTimeout> | undefined
>;

export function useTimeout(
  callback: () => void,
  delay: number
): [reset: () => void, clear: () => void] {
  const callbackRef = useRef(callback);
  const timeoutRef: timeoutRefType = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    'current' in timeoutRef && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return [reset, clear];
}
