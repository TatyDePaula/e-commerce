import MainSection from './MainSection.jsx';
import CartOverlay from '../../components/Cart/CartOverlay.jsx';

export default function Home() {
  return (
    <>
      <CartOverlay />
      <MainSection></MainSection>
    </>
  );
}
