import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplicationForm from '@/pages/ApplicationForm';
import Thanks from '@/pages/Thanks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationForm />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}
