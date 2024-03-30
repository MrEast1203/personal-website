import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import AboutPage from "./pages/AboutPage";
import UserPage from "./pages/UserPage";
import AddUserPage from "./pages/AddUserPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;
