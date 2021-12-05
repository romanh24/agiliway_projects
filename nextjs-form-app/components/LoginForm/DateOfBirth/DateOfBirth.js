import { Field } from 'react-final-form';
import { Input } from 'antd';
import { StyledDateInput, StyledError } from './styled';

const DateOfBirth = ({ id, name, label, placeholder }) => {
  return (
    <div>
      {/* <label htmlFor={id}>{label}</label> */}
      <StyledDateInput>
        <Field id={id} name={name} placeholder={placeholder}>
          {(props) => (
            <div>
              <Input
                {...props.input}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                style={{ width: '120px', textAlign: 'center' }}
              />
              <StyledError>
                {props.meta.error && props.meta.touched && (
                  <span>{props.meta.error}</span>
                )}
              </StyledError>
            </div>
          )}
        </Field>
      </StyledDateInput>
    </div>
  );
};

export default DateOfBirth;

// import { Input } from 'antd';
// import { StyledError } from './styled';

// const DateOfBirth = ({ input, meta, id }) => {
//   return (
//     <div>
//       <Input id={id} {...input} allowClear={true} />
//       <StyledError>
//         {meta.error && meta.touched && <span>{meta.error}</span>}
//       </StyledError>
//     </div>
//   );
// };

// export default DateOfBirth;
