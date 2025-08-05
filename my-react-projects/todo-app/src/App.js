import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import AddToDopage from "./AddToDoPage";
import ShowToDoPage from "./ShowToDoPage";
import DoneToDoPage from "./DoneToDoPage";
function App() {
  return (
    <div>
      <Header/>
      <HomePage/>
      <AddToDopage/>
      <ShowToDoPage/>
      <DoneToDoPage/>
      <Footer/>
      
    </div>
  );
}

export default App;