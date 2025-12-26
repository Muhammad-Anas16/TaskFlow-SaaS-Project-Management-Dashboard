'use client';

import { authClient } from '@/lib/auth-client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from './Loading';

export default function AuthWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const isLoggedIn = !!session?.user?.id;

  useEffect(() => {
    if (isPending) return;

    if (!isLoggedIn && pathname === '/dashboard') {
      router.replace('/auth/login');
    }

    if (isLoggedIn && pathname.startsWith('/auth')) {
      router.replace('/dashboard');
    }
  }, [isLoggedIn, isPending, pathname, router]);

  if (isPending) {
    return <Loading />;
  }

  return children;
}
