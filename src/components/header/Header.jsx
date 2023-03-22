import './Header.css'
import { MySvg } from '../icons/My'
import { MobileSvg } from '../icons/Mobile'
import { SearchSvg } from '../icons/Search'
import { BurgerSvg } from '../icons/Burger'
import { KsherqSvg } from '../icons/Ksherq'
import { CartSvg } from '../icons/Cart'
import { LoginSvg } from '../icons/Login'
import { ArrowSvg } from '../icons/Arrow'
import { SunSvg } from '../icons/Sun'
import { MoonSvg } from '../icons/Moon'
import { useContext } from 'react'
import { MainContext } from '../../context/MainContext'

const Header = () => {

  const { Themes, theme, setTheme } = useContext(MainContext);

  return (
    <header>
      <div className="logo">
        <MySvg />
        <MobileSvg />
      </div>
      <form className="form">
        <input className="search" type="search" placeholder="SEARCH ..." />
        <SearchSvg />
      </form>
      <div className="menu">
        <div className="burger">
          <BurgerSvg />
        </div>
        <div className="comprasion">
          <KsherqSvg />
        </div>
        <div className="cart">
          <CartSvg />
        </div>
        <div className="login">
          <LoginSvg />
        </div>
      </div>
      <div className="custom-select">
        <div className="selected-option">
          <div className="selected-option-name" data-value="1" data-text="AM">AM</div>
          <div className="arrow">
            <ArrowSvg />
          </div>
        </div>
        <div className="custom-options">
          <div>
            <div className="custom-option opt" data-value="1" data-text="AM">AM</div>
            <div className="custom-option opt" data-value="2" data-text="EN">EN</div>
          </div>
        </div>
      </div>
      <div className="custom-select">
        <div className="selected-option">
          <div className="selected-option-name" data-value="1" data-text="AMD">AMD</div>
          <div className="arrow">
            <ArrowSvg />
          </div>
        </div>
        <div className="custom-options">
          <div>
            <div className="custom-option opt" data-value="1" data-text="AMD">AMD</div>
            <div className="custom-option opt" data-value="2" data-text="USD">USD</div>
          </div>
        </div>
      </div>
      <div className="theme">
        <input className="toggle-theme" type="checkbox" id="theme" name="theme" checked={theme===Themes.dark} onChange={(e) => {
          if (e.target.checked) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}/>
        <label className="toggle-theme-label" for="theme">
          <div className="checkbox-theme">
            <SunSvg />
            <MoonSvg />
            <div className="circle"></div>
          </div>
        </label>
      </div>
    </header>
  )
}

export default Header