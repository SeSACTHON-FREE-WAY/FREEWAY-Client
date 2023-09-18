'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';

import SearchContextProvider from '@/common/context/SearchContext';

const Provider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>{children}</SearchContextProvider>
    </QueryClientProvider>
  );
};

export default Provider;