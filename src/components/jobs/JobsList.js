import JobItem from './JobItem';
import styled from 'styled-components';

const JobsList = ({ jobs, isChecked, searchJobTerm }) => {
  const jobData = jobs
    .filter((job) => {
      let includesJob = false;
      if (
        job.position.toLowerCase().includes(searchJobTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchJobTerm.toLowerCase())
      ) {
        includesJob = true;
      } else {
        includesJob = false;
      }
      return includesJob;
    })
    .filter((job) => {
      if (!isChecked) return job;

      return job.contract === 'Full Time';
    });

  return (
    <>
      {jobData.length > 0 ? (
        jobData.map((job) => <JobItem job={job} key={job.id} />)
      ) : (
        <NotFound>No matching jobs found</NotFound>
      )}
    </>
  );
};

const NotFound = styled.p`
  font-size: 3rem;
  text-align: center;
  grid-column: 1 / 4;
`;

export default JobsList;
