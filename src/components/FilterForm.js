import styled from 'styled-components';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const FilterForm = ({
  setSearchJobTerm,
  searchJobTerm,
  locationChangeHandler,
  isChecked,
  setIsChecked,
  setOpenModal,
}) => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.addEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <Container>
        <SearchForm className="search-form search-mobile">
          <input
            type="text"
            placeholder="Filter by title..."
            value={searchJobTerm}
            onChange={(e) => setSearchJobTerm(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(true);
            }}
          >
            <FaFilter />
          </button>
        </SearchForm>
      </Container>
    );
  }

  return (
    <Container>
      <SearchForm className="search-form">
        <div className="search-panel search-form--01">
          <FaSearch size={'2rem'} color={'#5964e0'} />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            onChange={(e) => setSearchJobTerm(e.target.value)}
            value={searchJobTerm}
          />
        </div>

        <div className="custom-select">
          <select
            className="search-panel search-form--02"
            onChange={locationChangeHandler}
          >
            <option value="false">Filter by location...</option>
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
          <label htmlFor="fullTime" className="full-time-label">
            <input
              type="checkbox"
              id="fullTime"
              className="checkbox"
              defaultChecked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className={`checkbox-span ${isChecked ? 'active' : ''}`}>
              Full Time Only
            </span>
          </label>
        </div>
      </SearchForm>
    </Container>
  );
};

const Container = styled.div`
  max-width: 120rem;
  margin: 1.2rem auto;

  padding: 0 1rem;
`;

const SearchForm = styled.form`
  padding: 0 1rem;
  border-radius: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);
  display: flex;
  transform: translateY(-50%);

  &.search-mobile {
    align-items: center;

    input {
      flex: 1;
      padding: 3rem 0;
      padding-left: 1.2rem;
      border: none;
      outline: none;
      font-size: 1.6rem;
      background: transparent;
    }

    button {
      font-size: 3rem;
      color: #6a6a6a;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;

      transition: all 0.3s ease-in-out;
    }
  }

  /* desktop styles */
  .search-panel {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.6rem;

    input[type='text'],
    select {
      border: none;
      outline: none;
      font-size: 1.6rem;
      flex: 1;
      background: transparent;
    }

    @media only screen and (max-width: 778px) {
      input[type='text'],
      select {
        font-size: 1.4rem;
      }
    }
  }

  .search-form--01 {
    flex: 0.5;
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }

  .custom-select {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex: 0.4;
    position: relative;

    &::before {
      position: absolute;
      display: block;
      content: '';
      background-image: url('./assets/map_marker.svg');

      background-size: contain;
      background-repeat: no-repeat;
      top: 50%;
      left: 10px;
      color: blue;
      width: 3rem;
      height: 3rem;
      transform: translateY(-50%);
      z-index: 10;
    }
  }

  .search-form--02 {
    position: relative;
    appearance: none;
    border: none;
    outline: none;
    width: 100%;
    padding-left: 6rem;
    cursor: pointer;
    background: transparent;
    border-right: 1px solid rgba(110, 128, 152, 0.2);
    color: #9e9e9e;

    &:not(:first-of-type) {
      color: #9e9e9e;
    }
  }
  .search-form--03 {
    flex: 0.3;
    border-right: 0;
    display: flex;
    gap: 1.5rem;

    .checkbox {
      display: none;
    }

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &::before {
        display: block;
        content: '';
        width: 24px;
        height: 24px;
        margin-right: 16px;
        border-radius: 3px;
      }

      &::after {
        display: none;
        color: #fff;
        width: 24px;
        height: 24px;
        margin-right: 16px;
        background-color: #5964e0;
        border-radius: 3px;
        position: absolute;
      }
    }

    span.active::after {
      display: flex;
      content: '✓';
      color: #fff;
      align-items: center;
      justify-content: center;
    }

    label {
      font-weight: 700;
      font-size: 1.8rem;
      cursor: pointer;
    }

    button {
      margin-left: auto;
    }

    @media only screen and (max-width: 778px) {
      label {
        font-size: 1.6rem;
      }
    }
  }
`;

export default FilterForm;
