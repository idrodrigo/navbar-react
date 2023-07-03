import styled from 'styled-components'
import BurguerButton from './BurgerButton'
import { useState } from 'react'

export default function Navbar () {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    // cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className='logo'>
          <h2>Navbar</h2>
        </div>

        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href='#h'>Home</a>
          <a onClick={handleClick} href='#h'>Shop</a>
          <a onClick={handleClick} href='#h'>About</a>
          <a onClick={handleClick} href='#h'>Contact</a>
          <a onClick={handleClick} href='#h'>Blog</a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`} />
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  height: 6vh;
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo{
    h2{
      color: yellow;
      font-weight: 400;
    }
  }

  .links{
    position: absolute;   
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    left: -50vw;
    /* transition: all .5s ease; */
    a{
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active{
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 8vh;
    left: 0;
    right: 0;
    text-align: center;
    a{
      margin-right: 0;
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      a{      
        margin-right: 1rem;
        font-size: 1rem;
        display: inline;
      }
    }
  }

  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #555;
  position: absolute;
  top: -1000px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: all .6s ease ;
  @media(min-width: 768px){
    display: none;
  }
  
  &.active{
    top: 0;
    left: 0;
  }
`
