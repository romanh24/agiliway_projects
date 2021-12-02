import { Input } from 'antd';
import { StyledError } from './styled';

export const MyInput = ({ input, meta, id }) => {
  return (
    <div>
      <Input
        id={id}
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
