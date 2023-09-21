import LogInPage from './pages/logInPage/index.tsx';
import Dashboard from './components/dashboard/index.tsx';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LogInPage />} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
