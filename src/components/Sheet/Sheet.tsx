import { FC, PropsWithChildren } from "react";

export interface ISheet extends PropsWithChildren {}
export const Sheet: FC<ISheet> = (props) => {
  const { children } = props;
  return <div className="w-full h-dvh bg-slate-800">{children}</div>;
};
