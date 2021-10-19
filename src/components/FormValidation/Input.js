export const Input = (props) => {
  return (
    <div>
      <div className="input-group">
        <label htmlFor={props.fieldProps.name}>{props.fieldProps.label}</label>
        <input
          type={
            props.fieldProps.name === "password" ||
            props.fieldProps.name === "confirmPassword"
              ? "password"
              : "text"
          }
          onChange={props.onChange}
          value={props.fieldProps.value}
          name={props.fieldProps.name}
          id={props.fieldProps.name}
          className="login-input"
          placeholder={props.fieldProps.label}
          autoComplete="off"
        />
      </div>
      <div className="error">
        <span>
          {props.fieldProps.error.length > 0 && props.fieldProps.error}
        </span>
      </div>
    </div>
  );
};
