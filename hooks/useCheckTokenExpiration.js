import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import useLocalStorageGetItem from "./useLocalStorageGetItem";

function useCheckTokenExpiration() {
  const [isExpired, setIsExpired] = useState(false);

  const token = useLocalStorageGetItem("token");

  useEffect(() => {
    if (token) {
      const expired = jwtDecode(token).exp * 1000 < Date.now();

      setIsExpired(expired);
    }
  }, [token]);

  return [isExpired];
}

export default useCheckTokenExpiration;