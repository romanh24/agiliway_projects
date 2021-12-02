import { Input } from 'antd';
import { StyledError } from '../styled';

const DateOfBirth = ({ input, meta, id }) => {
  return (
    <div>
      <Input id={id} {...input} allowClear={true} />
      <StyledError>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </StyledError>
    </div>
  );
};

export default DateOfBirth;
