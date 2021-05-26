export interface PrimaryLinkPropsType {
  tid: string;
  tvalue: string;
  pathname: string;
  config: {
    local: boolean;
    query: object;
    as: string;
    scrollTop: boolean;
    shallow: boolean;
  };
}
