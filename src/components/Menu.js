import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" exact activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ask/" activeStyle={activeLinkStyle}>
              Ask
            </Link>
          </li>
          <li>
            <Link to="/notify/" activeStyle={activeLinkStyle}>
              Notify
            </Link>
          </li>
          <li>
            <Link to="/sell/" activeStyle={activeLinkStyle}>
              Sell
            </Link>
          </li>
          <li>
            <Link to="/config/" activeStyle={activeLinkStyle}>
              Config
            </Link>
          </li>
          <li>
            <Link to="/counter/" activeStyle={activeLinkStyle}>
              Counter
            </Link>
          </li>
          <li>
            <Link to="/file/" activeStyle={activeLinkStyle}>
              Files
            </Link>
          </li>          
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
