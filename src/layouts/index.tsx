import { useUserContext } from '../context/user';
import AdminLayouts from './AdminLayouts';
import DefaultLayouts from './DefaultLayouts';

export default function Layouts() {
  const { isLogin } = useUserContext();

  return isLogin ? <AdminLayouts /> : <DefaultLayouts />;
}
