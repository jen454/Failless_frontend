import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
