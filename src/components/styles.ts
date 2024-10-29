import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  h1 {
    font-size: 1.5rem;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  min-width: 60%;
  margin: 1em auto;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.9rem;
`;
