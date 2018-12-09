import React from 'react'
import { Link } from 'gatsby'
import menuIcon from '../assets/images/menu.svg'
import crossIcon from '../assets/images/cross.svg'

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleMenu() {
    this.setState(
      { isOpen: !this.state.isOpen },
      this.toggleNoScroll
    );
  }

  toggleNoScroll() {
    if (this.state.isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  handleNavClick() {
    console.log('handle nav click');

  }

  render() {
    return (
      <div className="menu">
        <div className={`menu__overlay${this.state.isOpen ? ' is-open' : ''}`}>
          <div className="menu__header">
            <h2>
              <Link to="/">roos van <br />greevenbroek</Link>
            </h2>
            <button className="button" onClick={() => this.toggleMenu()}>
              <img src={crossIcon} alt="" />
            </button>
          </div>

          <nav className="menu__nav" onClick={() => this.handleNavClick()}>
            {this.props.children}
          </nav>
        </div>

        <button className="menu__button button" onClick={() => this.toggleMenu()}>
          <img src={menuIcon} alt="" />
        </button>
      </div>
    )
  }
}

export default Menu
