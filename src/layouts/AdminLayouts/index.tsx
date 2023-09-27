import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Estados from '@/pages/Orders/components/Estados';


export default function AdminLayouts() {
  return (
    <>
      <Header />
          <main className='container'>
             <Outlet />
          </main>
      <Footer />
    </>
  );
}
