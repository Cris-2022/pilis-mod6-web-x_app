import AdminLayouts from './AdminLayouts';
import DefaultLayouts from './DefaultLayouts';

export default function Layouts() {
  const isLogin = false;

  return isLogin ? <AdminLayouts /> : <DefaultLayouts />;
}
