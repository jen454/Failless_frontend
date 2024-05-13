import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SigninPage';
import SignUpPage from './pages/SignUpPage';
import WritePage from './pages/WritePage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/post-detail/:postId" element={<PostDetailPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
