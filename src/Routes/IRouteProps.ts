import { FC } from 'react';

export interface IRouteProps {
  name: string;
  exact?: boolean;
  path: string;
  main: FC;
  public?: boolean;
}
