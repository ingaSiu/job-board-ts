import { useJobs } from '../../hooks/jobsHooks';
import JobCard from './JobCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { borderRadius, darkGrey, lightGrey, mainBgColor } from '../../const/styles';
import Button from '../../components/Button/Button';
import StyledModal from '../../components/StyledModal/StyledModal';
import { ModalContext } from '../../context/ModalContext';
import Emoji from '../../components/Emoji/Emoji';
import AddJob from '../AddJob/AddJob';
import Apply from '../Apply/Apply';

const Jobs = () => {
  const { openModal, modalIsOpen1, openSecondModal, modalIsOpen2, closeModal, closeSecondModal } =
    useContext(ModalContext);
  const { data: jobs, isLoading } = useJobs();

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }
  console.log(jobs);

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <TopContainer>
        <Button greyVariant={true} onClick={openModal} title="post a job" />
      </TopContainer>
      <JobsContainer>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} onClick={openSecondModal} />
        ))}
      </JobsContainer>
      <StyledModal modalSize="medium" modalIsOpen={modalIsOpen1} closeModal={closeModal}>
        <AddJob />
      </StyledModal>
      <StyledModal modalSize="small" modalIsOpen={modalIsOpen2} closeModal={closeSecondModal}>
        <Apply />
      </StyledModal>
    </Container>
  );
};

export default Jobs;

const Container = styled.div`
  background-color: ${mainBgColor};
  margin: 50px 15vw;
  padding: 32px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${darkGrey};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;

