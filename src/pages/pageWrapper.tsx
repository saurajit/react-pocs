import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom'
import { AppState } from '../redux/reducers/root';

const PageWrapper = function () {
  const activeClass = ({isActive}: {isActive: boolean}) =>  isActive ? 'active' : undefined;
  const state = useSelector((state: AppState) => state.cartReducer);
          
  return (
    <div id="page-wrapper">
      <header className="fixed-top">
        <h2 id="logo">TeeTrex Store</h2>
        <nav>
          <NavLink to={''} className={activeClass}>Products</NavLink>
          <NavLink to={'cart'} className={activeClass}>Cart ({state.items})</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
    </div>
  );
}

export default PageWrapper;