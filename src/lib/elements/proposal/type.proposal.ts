export interface FormProposalPropsType {
  text_tid: string;
  link_tid: string;
  link_pathname: string;
  link_config: {
    local: boolean;
    query: object;
    as: string;
    scrollTop: boolean;
    shallow: boolean;
  };
  className: any;
}
