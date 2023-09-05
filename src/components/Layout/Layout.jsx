import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';
import { GlowingBtn } from '../Layout/Layout.styled';

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <GlowingBtn>Home</GlowingBtn>
        </NavLink>
        <NavLink to="/film">
          <GlowingBtn>Film</GlowingBtn>
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
