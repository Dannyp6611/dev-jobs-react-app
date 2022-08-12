// import styled from "styled-components";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import JobsData from '../data.json';
import { updateTabTitle } from '../utils/updateTabTitle';

const JobDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const jobData = JobsData.find((job) => job.id == id);

  updateTabTitle(`Devjobs | ${jobData.company} Details`);

  if (isLoading) {
    return (
      <JobContainer>
        <p className="loading__message">Loading Job...</p>
      </JobContainer>
    );
  }

  return (
    <>
      <JobContainer>
        <JobHeader className="job__header">
          <div
            className="job__header--logo"
            style={{ backgroundColor: `${jobData.logoBackground}` }}
          >
            <img src={`../..${jobData.logo}`} alt={`${jobData.company}`} />
          </div>
          <div className="job__header--content">
            <div className="left">
              <h4>{jobData.company}</h4>
              <p>{jobData.website}</p>
            </div>
            <Button secondary>
              <a href={jobData?.website} target="_blank">
                Company Site
              </a>
            </Button>
          </div>
        </JobHeader>

        <JobContent className="job__content">
          <div className="job__content--header">
            <div className="left">
              <div className="job__contract">
                <p>{jobData.postedAt}</p>
                <div className="dot"></div>
                <p>{jobData.contract}</p>
              </div>
              <h2>{jobData.position}</h2>
              <p className="location">{jobData.location}</p>
            </div>
            <Button>
              <a href={jobData?.apply} target="_blank">
                Apply Now
              </a>
            </Button>
          </div>
          <JobSection>
            <p>{jobData.description}</p>
          </JobSection>
          <JobSection>
            <h2>Requirements</h2>
            <p>{jobData.requirements?.content}</p>
            <ul>
              {jobData.requirements?.items.map((item, idx) => (
                <li key={`item-${idx}`}>{item}</li>
              ))}
            </ul>
          </JobSection>
          <JobSection>
            <h2>What You Will Do</h2>
            <p>{jobData.role?.content}</p>
            <ul>
              {jobData.role?.items.map((item, idx) => (
                <li key={`item-${idx}`}>{item}</li>
              ))}
            </ul>
          </JobSection>
        </JobContent>
      </JobContainer>

      <Footer className="footer">
        <FooterContainer>
          <div className="company">
            <h2>{jobData?.position}</h2>
            <p>{jobData?.company}</p>
          </div>
          <Button>
            <a href={jobData?.apply} target="_blank">
              Apply Now
            </a>
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
};

const JobHeader = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 2.6rem;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    position: relative;
  }

  .job__header--logo {
    padding: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    @media only screen and (max-width: 700px) {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      border-radius: 16px;
      padding: 0.5rem;
    }

    img {
      width: 8rem;
      height: 8rem;
      object-fit: contain;

      @media only screen and (max-width: 700px) {
        width: 5rem;
        height: 5rem;
      }
    }
  }
  .job__header--content {
    flex: 1;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      text-align: center;
      justify-content: space-around;
      padding: 3.6rem 0;
    }

    @media only screen and (max-width: 700px) {
      button {
        margin-top: 2rem;
      }
    }
  }
  h4 {
    font-size: 3rem;
    margin-bottom: 6px;
  }
`;

const Footer = styled.footer``;

const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 700px) {
    button {
      flex: 1;
    }

    .company {
      display: none;
    }
  }
`;

const JobSection = styled.section`
  margin: 2rem 0 3.2rem 0;
  font-size: 1.6rem;
  padding-right: 2rem;

  h2 {
    margin-bottom: 2.6rem;
  }

  p {
    margin-bottom: 1.6rem;
    line-height: 1.4;
  }

  ul {
    margin-left: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.6rem;
  transform: translateY(-30px);

  .loading__message {
    text-align: center;
    font-size: 3rem;
    margin-top: 30px;
  }
`;

const JobContent = styled.div`
  border-radius: 8px;
  padding: 2.6rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);

  .job__content--header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3.2rem;

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }

    @media only screen and (max-width: 700px) {
      button {
        width: 100%;
        margin-top: 2.6rem;
      }
    }

    .job__contract {
      display: flex;
      align-items: center;
      gap: 1rem;

      .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgb(110, 128, 152);
      }
    }

    h2 {
      margin: 1rem 0 2rem 0;
    }

    .location {
      color: #5964e0;
      font-weight: 700;
    }
  }
`;

export default JobDetails;
