import React from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends React.Component {
  
  constructor(){
    
    super();
    
    this.state = {
        data: [
            {
                id: Math.random(),
                label: 'Home', 
                url: '/',
                links: null
            },
        ]
    }
  }
  
  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">JobCore</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">{ this.renderMenuItems(this.state.data) }</ul>
        </div>
      </nav>
    );
  }
  
  renderMenuItems(menuData){
    var items = menuData.map((item) => {
        return this.renderNavItem(item);
    });
    
    return items;
    
  }
  
  renderNavItem(navItemData){
    
    if(navItemData.links != null) return this.renderLikeADropDown(navItemData);
    else return this.renderLikeALink(navItemData);
  }
  
  renderLikeADropDown(navItemData){
    var links = navItemData.links.map(function(link){
      return <a key={link.id} className="dropdown-item" href={link.url}>{link.label}</a>;
    });
    
    return (<li key={navItemData.id} className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href={navItemData.label} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {navItemData.label}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {links}
              </div>
            </li>);
  }
  
  renderLikeALink(navItemData){
    
    return (<li key={navItemData.id} className="nav-item">
              <a className="nav-link" href={navItemData.url}>
                {navItemData.label}
              </a>
            </li>
            );
  }
};