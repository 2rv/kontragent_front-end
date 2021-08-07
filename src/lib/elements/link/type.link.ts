export interface PrimaryLinkPropsType {
  tid: string;
  tvalue: string;
  pathname: string;
  children: any;
  config?: {
    local?: boolean;
    query?: object;
    as?: string;
    scrollTop?: boolean;
    shallow?: boolean;
  };
  className?: any;
}
