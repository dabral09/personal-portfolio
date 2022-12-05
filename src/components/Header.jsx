import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai';

const Header = ({menuOpen , setMenuOpen}) => {
  return (<>
    <nav>
        <NavContent setMenuOpen={setMenuOpen}/>

    </nav>

    
    <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
</>
  )
}

  export const HeaderPhone =({menuOpen, setMenuOpen}) =>{
    return(
      <div className={`navPhone ${menuOpen?"navPhoneComes" : "" }`}>
        <NavContent menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    )
  }

const NavContent = ({setMenuOpen}) =>{
return <>
<h2>Shubham.</h2>
<div>
    <a onClick={() => setMenuOpen(false)} href='#home'>Home</a>
    <a onClick={() => setMenuOpen(false)} href='#work'>Work</a>
    <a onClick={() => setMenuOpen(false)} href='#timeline'>Timeline</a>
    <a onClick={() => setMenuOpen(false)} href='#services'>Services</a>
    <a onClick={() => setMenuOpen(false)} href='#testimonial'>Testimonial</a>
    <a onClick={() => setMenuOpen(false)} href='#contact'>Contact</a>
</div>
<a href="mailto:shubhamdabral.in@gmail.com">
    <button>Email</button>
</a>
</>
}

export default Header;