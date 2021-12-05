import { Field } from 'react-final-form';
import { Input } from 'antd';
import { StyledError, StyledMyInput } from './styled';

const MyInput = ({ name, id, label, type: myType }) => {
  return (
    <StyledMyInput>
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} myType={myType} size='middle'>
        {(props) => (
          <div>
            <Input
              {...props.input}
              id={props.id}
              name={props.name}
              type={props.myType}
              allowClear={true}
              bordered={false}
              style={{
                borderBottom: '2px solid #d3d3d3',
                padding: '0',
              }}
            />
            <StyledError>
              {props.meta.error && props.meta.touched && (
                <span>{props.meta.error}</span>
              )}
            </StyledError>
          </div>
        )}
      </Field>
    </StyledMyInput>
  );
};

export default MyInput;
