import Flatpickr from 'react-flatpickr';
import { useField, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { darkGrey, lightGrey, mainBgColor, smallBorderRadius } from '../../const/styles';

type Props = {
  name: string;
  placeholder: string;
};

const FormikDatepicker = ({ name, placeholder }: Props) => {
  const [field, , helpers] = useField(name);
  return (
    <div>
      <StyledDatePicker
        placeholder={placeholder}
        name={name}
        value={field.value}
        onChange={([date]) => helpers.setValue(date.toISOString())}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikDatepicker;

// useField => name, kuri mes paduosim, paziures i formik vidu
// ir istrauks mums jo reiksmes ir tt.

const StyledDatePicker = styled(Flatpickr)`
  font-size: 16px;
  border-radius: ${smallBorderRadius};
  color: ${darkGrey};
  background-color: ${mainBgColor};
  border: 1px solid ${lightGrey};
  padding: 10px 14px;
  outline: none;
  width: 100%;
`;
