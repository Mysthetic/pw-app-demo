import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import FormPage from './pages/FormPage';
import DataDisplay from './pages/DataDisplay';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/data" element={<DataDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}
