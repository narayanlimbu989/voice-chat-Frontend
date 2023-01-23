import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/AuthSclice";
export function useLogingwithrefresh() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/refresh",
          {
            withCredentials: true,
          }
        );
        dispatch(setAuth(data));
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    })();
  }, []);
  return { loading };
}
