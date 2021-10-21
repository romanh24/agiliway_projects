export const myField = (props) => {
  console.log(props);
  const { label, input, meta } = props;
  return (
    <div className="input-group">
      <label>{label}</label>
      <input {...input} placeholder={label} autoComplete="off" />
      <div className="error">
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
