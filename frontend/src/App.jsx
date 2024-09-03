import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/signup/SignUp";
import LoginPage from "./pages/auth/login/LoginPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
