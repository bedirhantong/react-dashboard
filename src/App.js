import LoginForm from "./Components/LoginForm/LoginForm";
import ForgotPassword from "./Components/LoginForm/ForgotPassword";
import SignUp from "./Components/LoginForm/SignUpForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
