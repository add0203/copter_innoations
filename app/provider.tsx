"use client";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

// export default function Provider({ children }: { children: ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools initialIsOpen={false} />
//       {children}
//     </QueryClientProvider>
//   );
// }
// Provider.tsx
import { Provider } from 'react-redux';
import { store } from '../redux/store'; // Import the Redux store

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
