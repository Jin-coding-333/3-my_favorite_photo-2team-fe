import '@/styles/components/input/input.css';

export default function Input({
  label,
  placeHolder,
  value,
  onChange,
  type = 'text',
  inputClassName = '',
}) {
  return (
    <div className="wrapper">
      <span className="label">{label}</span>
      <div className="input-container">
        <input
          className={`styled-input ${inputClassName}`}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          type={type}
        />
        {type === 'password' && (
          <img src="/icon/type=invisible.png" alt="icon" className="visibility-icon" />
        )}
      </div>
    </div>
  );
}
