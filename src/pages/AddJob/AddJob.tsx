import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useContext } from 'react';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import Emoji from '../../components/Emoji/Emoji';
import FormikDatepicker from '../../components/Formik/FormikDatepicker';
import FormikInput from '../../components/Formik/FormikInput';
import FormikSelect from '../../components/Formik/FormikSelect';
import FormikTextArea from '../../components/Formik/FormikTextArea';
import { darkGrey } from '../../const/styles';
import { requiredField } from '../../const/validations';
import { ModalContext } from '../../context/ModalContext';
import { useCreateJob } from '../../hooks/jobsHooks';
import { JobType, NewJob } from '../../types/job';
import { toast } from 'react-hot-toast';

const initialValues: NewJob = {
  title: '',
  price: '',
  type: 'fullTime',
  starting_from: '',
  has_drivers_license: false,
  user_id: 1,
  description: '',
};

const validationSchema: Yup.ObjectSchema<NewJob> = Yup.object().shape({
  title: Yup.string().required(requiredField),
  price: Yup.number().required(requiredField),
  description: Yup.string().required(requiredField),
  type: Yup.mixed<JobType>().oneOf(['freelance', 'fullTime', 'partTime']).required(requiredField),
  starting_from: Yup.string().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
  user_id: Yup.number().required(),
});

const AddJob = () => {
  const { closeModal } = useContext(ModalContext);
  const { mutateAsync: createJob } = useCreateJob();

  const handleSubmit = (values: NewJob) => {
    console.log(values);
    createJob(values)
      .then((response) => {
        closeModal();
        toast('Job added!', {
          icon: '💪',
        });
      })
      .catch((error) => {
        console.error('Failed to post the ad');
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ submitForm }) => (
        <StyledForm>
          <Title>
            Create a job ad <Emoji symbol="✍" />
          </Title>
          <FormikInput type="text" name="title" placeholder="Job title" />
          <InputRow>
            <InputRowItem>
              <FormikInput type="number" name="price" placeholder="Pay offered" />
            </InputRowItem>
            <InputRowItem>
              <FormikDatepicker name="starting_from" placeholder="Enter start date" />
            </InputRowItem>
          </InputRow>
          <FormikSelect
            name="type"
            options={[
              { value: 'fullTime', label: 'Full Time' },
              { value: 'partTime', label: 'Part Time' },
              { value: 'freelance', label: 'Freelance' },
            ]}
          />
          <FormikTextArea type="text" name="description" placeholder="Job description" />
          <ButtonsContainer>
            <Button greyVariant={true} onClick={closeModal} title="close" />
            <Button title="save" onClick={submitForm} />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default AddJob;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 18px;
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
