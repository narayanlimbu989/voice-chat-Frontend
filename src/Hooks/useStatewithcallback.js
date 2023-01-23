import { useCallback, useEffect, useRef, useState } from "react";

export const useWithcallback = (init) => {
  const [state, setstate] = useState(init);
  const cbref = useRef();
  const updateState = useCallback((newState, cb) => {
    cbref.current = cb;
    setstate((pre) => {
      return typeof newState === "function" ? newState(pre) : newState;
    });
  }, []);
  useEffect(() => {
    if (cbref.current) {
      cbref.current(state);
      cbref.current = null;
    }
  }, [state]);
  return [state, updateState];
};
