export interface ButtonPropsType {
  tid?: string;
  disabled: any;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  children?: React.ReactElement<any> | null;
  onClick?: any;
}
