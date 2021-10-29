export const Field = (props) => {
  const { name, value, type, label, error, onChange } = props;
  return (
    <div>
      <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          className="login-input"
          placeholder={label}
          autoComplete="off"
        />
      </div>
      <div className="error">
        <span>{error.length > 0 && error}</span>
      </div>
    </div>
  );
};
