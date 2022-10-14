import './App.css';
import { Routes, Route } from "react-router-dom";
import Front from './pages/FrontPage/FrontPage';
import Home from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import DisplayPage from './pages/InfoPage/DisplayPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Front />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Info" element={<DisplayPage />} />
      </Routes>
    </div>
  );
}

export default App;
