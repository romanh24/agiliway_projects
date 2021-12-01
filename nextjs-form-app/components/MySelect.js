import { Select } from 'antd';
import { StyledError } from './styled';

const { Option } = Select;

export const MySelect = ({ input, meta }) => {
  return (
    <div>
      <Select
        {...input}
        style={{ width: '100%' }}
        placeholder='Select a person'
      >
        <Option value='none'></Option>
        <Option value='social network'>Social network</Option>
        <Option value='television'>Television</Option>
        <Option value='newspaper'>Newspaper</Option>
        <Option value='billboard'>Billboard</Option>
      </Select>
      <StyledError>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </StyledError>
    </div>
  );
};
