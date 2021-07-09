export interface PageLayoutPropsType {
  align?: 'CENTER' | 'TOP' | undefined;
  children?: React.ReactElement<any> | null;
}

export interface ContentLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | undefined;
  children?: React.ReactElement<any> | null;
}

export interface IndentLayoutPropsType {
  type?: 'DEFAULT' | 'SMALL' | 'MEDIUM' | undefined;
  children?: React.ReactElement<any> | null;
  className?: string;
}

export interface SectionLayoutPropsType {
  type?: 'DEFAULT' | 'MEDIUM' | 'SMALL' | 'LARGE' | undefined;
  children: React.ReactElement<any> | null;
  className?: string;
}

export interface GridLayoutPropsType {
  type?: 'double' | undefined;
  children: React.ReactElement<any> | null;
}
