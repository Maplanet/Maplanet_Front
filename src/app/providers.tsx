'use client';

import { SWRConfig } from 'swr';

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FunctionComponent<IProvidersProps> = ({ children }) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;

  console.log(url)
  const fetcher = (path: string) => fetch(`${url}${path}`).then((res) => res.json());

  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default Providers;
