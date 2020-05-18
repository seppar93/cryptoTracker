// Modules
import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../redux/actions/action';



// Assets
import { ReactComponent as Icon } from '../assets/icons/paccopy.svg';

// styling
import './Header.css';

function Header(props) {
  
  

  return (
    <div className='Header-container'>
      <Navbar>
        <NavItem icon={<Icon />}>
          <DropDownMenu
            addCoin={props.actions.moveCoinToTable}
            data={props.data}
          />
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
  const [open, setOpen] = useState();

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropDownMenu(props) {
  
  return (
    <div className='dropdown'>
      {!props.data ? (
        <>LOADING</>
        ) : (
          props.data.map((val) => {
            return <DropDownItem key={val.id} addCoin={props.addCoin} coin={val} leftIcon={<Icon />} />;
          })
          )}
    </div>
  );
  
  function DropDownItem(props) {
    
    return (
      <a className='menu-item'>
        <span className='icon-button'>{props.leftIcon}</span>
        <div onClick={() => props.addCoin(props.coin)}>
          {props.coin.name}
        </div>
      </a>
    );
  }

  
}

function mapStateToProps(state) {
  return {
    data: state.dropDownData,
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
