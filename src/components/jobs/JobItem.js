import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.75,
    },
  },
};

const JobItem = ({ job }) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.4 });

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

  return (
    <motion.div variants={fade} animate={controls} ref={element}>
      <Link to={`/job/${job.id}`} style={{ textDecoration: 'none' }}>
        <StyledJob className="job-item" layout>
          <JobLogo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ backgroundColor: job?.logoBackground }}
          >
            <img src={job.logo} alt={`logo-${job?.logo}`} />
          </JobLogo>
          <div className="job__info">
            <p>{job?.postedAt}</p>
            <div className="dot"></div>
            <p>{job?.contract}</p>
          </div>
          <h2>{job?.position}</h2>
          <p>{job?.company}</p>
          <p className="job__location">{job?.location}</p>
        </StyledJob>
      </Link>
    </motion.div>
  );
};

const StyledJob = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  padding-top: 3.5rem;
  height: 20rem;

  .job__info {
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
    line-height: 1.2;
  }

  .job__location {
    margin-top: auto;
    color: #5964e0;
    font-weight: 700;
  }
`;

const JobLogo = styled(motion.div)`
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  left: 22px;
`;

export default JobItem;
