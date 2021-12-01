import { Input } from 'antd';
import { StyledError } from './styled';

export const MyInput = ({ input, meta }) => {
  return (
    <div>
      <Input
        {...input}
        allowClear={true}
        bordered={false}
        style={{
          borderBottom: '2px solid #d3d3d3',
          padding: '0',
        }}
      />
      <StyledError>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </StyledError>
    </div>
  );
};
