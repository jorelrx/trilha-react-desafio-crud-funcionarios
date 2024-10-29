import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Header, Main, Footer, Navbar, NavItem } from './styles';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children, title = 'Minha Aplicação' }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Descrição da aplicação" />
      </Head>

      <Header>
        <h1>Gerenciamento de Funcionários</h1>
        <Navbar>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/funcionarios">Listagem de Funcionários</Link>
          </NavItem>
        </Navbar>
      </Header>

      <Main>{children}</Main>

      <Footer>
        Projeto desafio DIO - CRUD Funcionários &copy; {new Date().getFullYear()}
      </Footer>
    </Container>
  );
};

export default Layout;
