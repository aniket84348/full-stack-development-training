import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header1 from "./Header1";
import HomePage from "./HomePage";
import Footer from "./Footer";
import CreateAccountPage from "./CreateAccountPage";
import LoginPage from "./LoginPage";
import Header2 from "./Header2";
import BankdetailPage from "./BankdetailPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";
import LogoutPage from "./LogoutPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Show Header1 if NOT logged in, else show Header2 */}
      {!isLoggedIn ? <Header1 /> : <Header2 />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/detail" element={<BankdetailPage />} />
        <Route path="/transferpage" element={<TransferPage />} />
        <Route path="/transactionpage" element={<TransactionPage />} />
        <Route
          path="/logoutpage"
          element={<LogoutPage  setIsLoggedIn={setIsLoggedIn}  />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
