export interface PageLayoutPropsType {
  align?: 'CENTER' | 'TOP' | undefined;
  children?: React.ReactElement<any> | null;
}

export interface ContentLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | undefined;
  children?: React.ReactElement<any> | null;
}

export interface IndentLayoutPropsType {
  type?: 'DEFAULT' | undefined;
  children?: React.ReactElement<any> | null;
}
