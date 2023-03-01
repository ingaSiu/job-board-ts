import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import * as Yup from 'yup';
import { darkGrey } from '../../const/styles';
import { requiredField } from '../../const/validations';
import { useCreateJob } from '../../hooks/jobsHooks';
import Button from '../../components/Button/Button';
import FormikInput from '../../components/Formik/FormikInput';
import Emoji from '../../components/Emoji/Emoji';
import { ApplyUser } from '../../types/user';
import { toast } from 'react-hot-toast';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  has_drivers_license: false,
  user_id: 1,
};

const validationSchema: Yup.ObjectSchema<ApplyUser> = Yup.object().shape({
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
  email: Yup.string().required(requiredField),
  phone_number: Yup.number().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
  user_id: Yup.number().required(),
});

const Apply = () => {
  const { closeModal } = useContext(ModalContext);
  // const { mutateAsync: createJob } = useCreateJob();

  const handleSubmit = (values: any) => {
    console.log(values);
    toast('Submission successfull!', {
      icon: '🥳',
    });
    // createJob(values)
    //   .then((response) => {
    //     closeModal();
    //   })
    //   .catch((error) => {
    //     console.error("Failed to post the ad");
    //   });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ submitForm }) => (
        <StyledForm>
          <Title>
            Enter your details to apply <Emoji symbol="👇" />
          </Title>
          <InputRow>
            <InputRowItem>
              <FormikInput type="text" name="first_name" placeholder="First name" />
            </InputRowItem>
            <InputRowItem>
              <FormikInput type="text" name="last_name" placeholder="Last name" />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <InputRowItem>
              <FormikInput type="email" name="email" placeholder="Your email address" />
            </InputRowItem>
            <InputRowItem>
              <FormikInput type="number" name="phone_number" placeholder="Your phone number" />
            </InputRowItem>
          </InputRow>

          <ButtonsContainer>
            <Button greyVariant={true} onClick={closeModal} title="close" />
            <Button title="submit application" onClick={submitForm} />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default Apply;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  color: ${darkGrey};
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
