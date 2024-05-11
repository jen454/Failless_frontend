import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import SignInPage from './pages/SigninPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ArticlePage />} />
            <Route path="signin" element={<SignInPage/>} />
            <Route path="signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
