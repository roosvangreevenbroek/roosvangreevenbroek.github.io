import React from 'react'
import { Link } from 'gatsby'
import menuIcon from '../assets/images/menu.svg'
import crossIcon from '../assets/images/cross.svg'

const CLASS_NO_SCROLL = 'overflow-hidden'

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
      document.body.classList.add(CLASS_NO_SCROLL);
      document.documentElement.classList.add(CLASS_NO_SCROLL);
    } else {
      document.body.classList.remove(CLASS_NO_SCROLL);
      document.documentElement.classList.remove(CLASS_NO_SCROLL);
    }
  }

  handleNavClick() {
    if (this.state.isOpen) {
      this.toggleMenu();
    }
  }

  render() {
    return (
      <div className="menu">
        <div className={`menu__overlay${this.state.isOpen ? ' is-open' : ''}`}>
          <div className="menu__header">
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
