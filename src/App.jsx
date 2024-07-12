import Home from './pages/HomePage/Home.jsx';
import Header from './components/Header.jsx';
import Checkout from './pages/CheckoutPage/Checkout.jsx';
import { Routes, Route } from 'react-router-dom';
import PurchaseHistory from './pages/PurchaseHistoryPage/PurchaseHistory.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<PurchaseHistory />} />
      </Routes>
    </>
  );
}

export default App;
