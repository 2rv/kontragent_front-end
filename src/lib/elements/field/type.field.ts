export interface FieldPrimaryPropsType {
  titleTid: string;
  placeholderTid: string;
  name: string;
  onChange: any;
  onBlur: any;
  value: any;
  error: string;
  type: 'password' | 'number';
}

type optionObject = { id: number; tid: string; tvalue?: object };
export interface PrimarySelectPropsType {
  titleTid: string;
  option: optionObject[];
  onChange: any;
  onBlur: any;
  name: string;
  className: string;
}

export interface TextAreaPropsType {
  titleTid: string;
  placeholderTid: string;
  onChange: any;
  onBlur: any;
  name: string;
  row?: number;
  error: string;
}
