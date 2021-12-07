import { Select } from 'antd';
import { StyledError } from './styled';

const { Option } = Select;

const HearFrom = ({ input, meta, id }) => {
  return (
    <div>
      <Select id={id} {...input} style={{ width: '100%' }}>
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

export default HearFrom;
