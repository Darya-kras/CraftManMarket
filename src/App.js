import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderAdd from './pages/OrdersAddPage/OrderAdd';
import OrderList from './pages/OrdersListPage/OrderList';
import Info from './pages/InfoPage/Info';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="description" content="Заказ уникальных сувениров ОНЛАЙН. Гравировки по вашему дизайну." />
        <title>Egor CraftMan</title>
      </Helmet>
      <Router>
        <Header />
        <Routes>
            <Route path='/OrderAdd' element={<OrderAdd />}></Route>
            <Route path='/OrderList' element={<OrderList />}></Route>
            <Route path='/' element={<Info />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
