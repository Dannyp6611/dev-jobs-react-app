import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import desktopBackgroundImage from '../assets/desktop/bg-pattern-header.svg';
import mobileBackgroundImage from '../assets/mobile/bg-pattern-header.svg';
import tabletBackgroundImage from '../assets/tablet/bg-pattern-header.svg';
import logo from '../assets/logo.svg';

const Header = ({ themeToggler, currentTheme }) => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <div className="logo">
            <Link to="/" reloadDocument>
              <img src={logo} alt="devjobs logo" />
            </Link>
          </div>
          <ThemeToggle
            onClick={themeToggler}
            className={`${currentTheme === 'dark' ? 'dark' : ''}`}
          >
            <input type="checkbox" className="checkbox" id="checkbox" />
            <BsSunFill className="icon-sun" />
            <label htmlFor="checkbox">
              <div className="ball"></div>
            </label>
            <BsMoonFill className="icon-moon" />
          </ThemeToggle>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-image: url(${desktopBackgroundImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  height: 15rem;
  width: 100%;
  padding: 2.5rem;
  color: #fff;

  @media only screen and (max-width: 1200px) {
    background-image: url(${tabletBackgroundImage});
  }

  @media only screen and (max-width: 768px) {
    background-image: url(${mobileBackgroundImage});
  }
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.dark {
    .ball {
      transform: translateX(140%);
    }
  }

  .checkbox {
    width: 100%;
    position: absolute;
    z-index: 3;
    opacity: 0;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    height: 26px;
    width: 60px;
    border-radius: 50px;
    padding: 5px;
    position: relative;

    .ball {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: #5964e0;
      position: absolute;
      top: 2px;
      left: 2px;
      transition: all 0.2s ease-in-out;
    }
  }

  .icon-moon,
  .icon-sun {
    color: #fff;
    font-size: 2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    cursor: pointer;
  }
`;

export default Header;
