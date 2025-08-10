import Header1 from "./Header1"
import HomePage from "./HomePage"
import Footer from "./Footer"
import CreateAccountPage from "./CreateAccountPage"
import LoginPage from "./LoginPage"
import Header2 from "./Header2"
import BankdetailPage from "./BankdetailPage"
import TransferPage from "./TransferPage"
import TransactionPage from "./TransactionPage"
import LogoutPage from "./LogoutPage"
function App(){
    return(
        <div>
            <Header1/>
            <homePage/>
            <Footer/>
            <CreateAccountPage />
            <LoginPage/>
            <Header2/>
            <BankdetailPage/>
            <TransferPage/>
            <TransactionPage/>
            <LogoutPage/>
            
        </div>
    )
}

export default App;