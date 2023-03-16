import FilterForm from '../components/FilterForm';
import JobsList from '../components/jobs/JobsList';
import { useState } from 'react';
import styled from 'styled-components';
import FilterModal from '../components/FilterModal';
import JobsData from '../data.json';

const Jobs = () => {
  const [jobsData, setJobsData] = useState(JobsData);
  const [filteredJobsData, setFilteredJobsData] = useState(JobsData);
  const [searchJobTerm, setSearchJobTerm] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const locationChangeHandler = (e) => {
    const locationValue = e.target.value;

    let filteredData;

    switch (locationValue) {
      case 'unitedStates':
        filteredData = jobsData.filter(
          (job) => job.location === 'United States'
        );
        break;
      case 'unitedKingdom':
        filteredData = jobsData.filter(
          (job) => job.location === 'United Kingdom'
        );
        break;
      case 'russia':
        filteredData = jobsData.filter((job) => job.location === 'Russia');
        break;
      case 'japan':
        filteredData = jobsData.filter((job) => job.location === 'Japan');
        break;
      case 'germany':
        filteredData = jobsData.filter((job) => job.location === 'Germany');
        break;
      case 'singapore':
        filteredData = jobsData.filter((job) => job.location === 'Singapore');
        break;
      case 'newZealand':
        filteredData = jobsData.filter((job) => job.location === 'New Zealand');
        break;
      default:
        filteredData = jobsData;
        break;
    }

    setFilteredJobsData(filteredData);
  };

  return (
    <div>
      {openModal && (
        <FilterModal
          locationChangeHandler={locationChangeHandler}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setOpenModal={setOpenModal}
        />
      )}
      <FilterForm
        setSearchJobTerm={setSearchJobTerm}
        searchJobTerm={searchJobTerm}
        locationChangeHandler={locationChangeHandler}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setOpenModal={setOpenModal}
      />
      {filteredJobsData && filteredJobsData.length > 0 ? (
        <JobsContainer>
          <JobsList
            jobs={filteredJobsData}
            searchJobTerm={searchJobTerm}
            isChecked={isChecked}
          />
        </JobsContainer>
      ) : (
        <p>Retrieving Jobs...</p>
      )}
    </div>
  );
};

const JobsContainer = styled.div`
  max-width: 120rem;
  margin: 1.2rem auto;

  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 5rem;
`;

export default Jobs;
