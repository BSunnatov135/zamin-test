import { useCallback, useRef } from "react";

const useDebounce2 = (callback, delay) => {
  const timer = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay, callback]
  );

  return debouncedCallback;
};

export default useDebounce2;
