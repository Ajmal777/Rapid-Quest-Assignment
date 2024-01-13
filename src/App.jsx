import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/NavBar";

function App() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <Main />
            </div>
        </>
    );
}

export default App;
