import './style.css';

import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from './Header';

export default function AdminLayouts() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
