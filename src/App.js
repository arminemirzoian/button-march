import './App.css';
import ButtonReact from "./components/Button";
import {ButtonStyled} from "./components/Button.styled"


function App() {
    return (
        <div className="App">
            <ButtonStyled>
                <ButtonReact
                    type="button"
                    size="large"
                    buttonStyle="btn--primary--solid"
                    disabled={false}
                >
                    BUTTON</ButtonReact>
            </ButtonStyled>
        </div>
    );
}

export default App;
