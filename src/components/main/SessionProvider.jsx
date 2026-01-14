"use client";
import { authClient } from '@/lib/auth-client';
import { clearUser, setUser } from '@/redux/isUser/isUserSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SessionProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        if (!authClient?.getSession) return;

        const { data } = await authClient.getSession();

        if (!data?.user) {
          dispatch(clearUser());
          return;
        }

        const { id, name, email, image, emailVerified } = data.user;

        dispatch(
          setUser({
            id,
            name,
            email,
            image,
            emailVerified,
          })
        );
      } catch (err) {
        console.error("Error fetching session:", err);
        dispatch(clearUser());
      }
    };

    checkUserSession();
  }, [dispatch]);

  return <>{children}</>;
}

export default SessionProvider;