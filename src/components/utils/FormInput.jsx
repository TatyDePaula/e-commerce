export default function FormInput({
  id,
  required,
  fieldLabel,
  fieldType,
  placeholder,
  className = '',
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900">
        {fieldLabel}
      </label>
      <input
        type={fieldType}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
