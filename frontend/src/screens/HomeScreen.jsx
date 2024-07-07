import Hero from '../components/Hero';
import { useSelector } from 'react-redux';
import Bank from '../components/Banks/Bank';
const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo.persona==='bank' ? <Bank />:   <Hero />;
 
};
export default HomeScreen;
