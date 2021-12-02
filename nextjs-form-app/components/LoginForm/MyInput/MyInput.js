import { Field } from 'react-final-form';
import { Input } from 'antd';
import { StyledError, StyledMyInput } from './styled';

const MyInput = ({ input, meta }) => {
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
  // console.log(name, label);
  // return (
  //   <div>
  //     <label htmlFor={name}>{label}</label>
  //     <Field id={name} name={name} size='middle'>
  //       {({ id, input, meta }) => (
  //         <StyledMyInput>
  //           <Input
  //             id={id}
  //             {...input}
  //             allowClear={true}
  //             bordered={false}
  //             style={{
  //               borderBottom: '2px solid #d3d3d3',
  //               padding: '0',
  //             }}
  //           />
  //           <StyledError>
  //             {meta.error && meta.touched && <span>{meta.error}</span>}
  //           </StyledError>
  //         </StyledMyInput>
  //       )}
  //     </Field>
  //   </div>
  // );
};

export default MyInput;
