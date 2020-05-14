
// Modules
import React, {useState} from 'react'

// Assets
import { ReactComponent as Icon } from '../paccopy.svg';

// styling 
import './Header.css'


export default function Header(props) {
  return (
    <div>
      <Navbar>
        <NavItem icon={<Icon />}>
          <DropDownMenu></DropDownMenu>
          {/* DROP DOWN */}
        </NavItem>
      </Navbar>
    </div>
  );
}


function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState()

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
function DropDownMenu(){

  function DropDownItem(props) {
    return ( 
      <div className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        
      </div>
    )
  }

  return (
    <div className='dropdown'>
      <DropDownItem leftIcon={<Icon />}>TESTING</DropDownItem>

    </div>
  );

}






