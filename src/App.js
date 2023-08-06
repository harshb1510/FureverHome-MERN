import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
// import Login from "./Components/Login/Login";
import Facts from "./Components/Facts/Facts";
import Feature from "./Components/Features/Feature";
import Contact from "./Components/Contact/Contact"


function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Header />
      </div>
      {/* <div>
         <Login/> 
      </div> */}
      <div>
        <Facts/>
      </div>
      <div>
        <Feature />
      </div>
        <div>
        <Contact/>
        </div>
    
    </>
  );
}

export default App;
