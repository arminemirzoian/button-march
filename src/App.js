import './App.css';
import ButtonReact from "./components/Button";

function App() {
    return (
        <div className="App">
            <ButtonReact
                type="button"
                size="medium"
                buttonStyle="btn--primary--solid"
                disabled={false}>
                BUTTON
            </ButtonReact>
        </div>
    );
}

export default App;
