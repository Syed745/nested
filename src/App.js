import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout';
import Login from './component/Login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='login' element={<Login />} />

          <Route path='/Analysis' element={<Home />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/Account' element={<Home />} />

        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
