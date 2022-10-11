import './App.css';
import { Routes, Route } from "react-router-dom";
import Front from './pages/FrontPage/FrontPage';
import Home from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import InfoPage from './pages/InfoPage/InfoPage';

function App() {
  let stuff = "Home";
  let completePath = "/" + "Home";
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Front />} />
        <Route path={completePath} element={<Home />} />
        <Route path="/Info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
