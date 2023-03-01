import { ErrorMessage, useField } from 'formik';
import Select from 'react-select';

type SelectOption = {
  value: string | number;
  label: string;
};

type Props = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
};

const FormikSelect = ({ name, options, ...rest }: Props) => {
  const [field, , helpers] = useField(name);
  const value = options.find((option) => option.value === field.value);

  return (
    <div>
      <Select
        name={name}
        value={value}
        onChange={(option) => helpers.setValue(option?.value)}
        options={options}
        {...rest}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

// cia sutvarkyta taip, kad butu grazinama tik value be label is selectOption objekto
export default FormikSelect;

