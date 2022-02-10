import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { text } from '../../../lib/common/text';
import { COMPANY_TYPE } from '../company-admin-import.constant';

export function CompanyAdminImportUpdateTypeComponent(props) {
  const { onChange, value } = props;
  return (
    <Select onChange={onChange} value={value}>
      {Object.keys(COMPANY_TYPE).map((item, key) => (
        <MenuItem key={key} value={COMPANY_TYPE[item]} children={text(item)} />
      ))}
    </Select>
  );
}
