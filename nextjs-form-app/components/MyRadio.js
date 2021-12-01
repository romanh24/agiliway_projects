import { Radio } from 'antd';
import { StyledError } from './styled';

export const MyRadio = ({ input, meta }) => {
  return (
    <div>
      <Radio.Group defaultValue='male' buttonStyle='solid'>
        <Radio.Button
          style={{ width: '120px', textAlign: 'center' }}
          {...input}
          value='male'
        >
          MALE
        </Radio.Button>
        <Radio.Button
          style={{ width: '120px', textAlign: 'center' }}
          {...input}
          value='female'
        >
          FEMALE
        </Radio.Button>
        <Radio.Button
          style={{ width: '120px', textAlign: 'center' }}
          {...input}
          value='unspecified'
        >
          UNSPECIFIED
        </Radio.Button>
      </Radio.Group>
      <StyledError>
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </StyledError>
    </div>
  );
};
