import styled from 'styled-components';
import { useEffect, useState } from 'react';

const FilterModal = ({
  locationChangeHandler,
  isChecked,
  setIsChecked,
  setOpenModal,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  if (windowWidth < 761) {
    return (
      <>
        <Backdrop onClick={() => setOpenModal(false)} />
        <Container className="filter-modal">
          <div className="custom-select">
            <select
              className="search-panel search-form--02"
              onChange={locationChangeHandler}
            >
              <option>Filter by location...</option>
              <option value="unitedKingdom">United Kingdom</option>
              <option value="unitedStates">United States</option>
              <option value="russia">Russia</option>
              <option value="japan">Japan</option>
              <option value="germany">Germany</option>
              <option value="singapore">Singapore</option>
              <option value="newZealand">New Zealand</option>
            </select>
          </div>
          <div className="search-panel search-form--03">
            <input
              type="checkbox"
              name="fullTime"
              defaultChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label className="full-time-label" htmlFor="fullTime">
              Full Time Only
            </label>
          </div>
        </Container>
      </>
    );
  }
};

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  z-index: 10;
`;

const Container = styled.div`
  width: 80%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  .custom-select {
    width: 100%;
    position: relative;

    select {
      width: 100%;
      padding: 3rem;
      padding-left: 5rem;
      appearance: none;
      border: none;
      outline: none;
      border-bottom: 1px solid rgb(242, 242, 242);
      font-size: 2rem;
    }

    &::before {
      position: absolute;
      display: block;
      content: '';
      background-image: url('./assets/map_marker.svg');

      background-size: contain;
      background-repeat: no-repeat;
      top: 50%;
      left: 23px;
      color: blue;
      width: 2rem;
      height: 2rem;
      transform: translateY(-50%);
      z-index: 10;
    }
  }
  .search-form--03 {
    padding: 3rem;
    display: flex;
    gap: 1.5rem;

    label {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;

export default FilterModal;
