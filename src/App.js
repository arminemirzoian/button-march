import './App.css';
import ButtonReact from "./components/Button";
import {iconUsd, iconButterfly} from "./assets/icons";
import {ButtonStyled} from "./components/Button.styled"


function App() {
    return (
        <div className="App">
            <ButtonStyled>
                <ButtonReact
                    type="button"
                    boxSize="btn--box--small"
                    buttonStyle="btn--secondary--solid"
                    buttonSize="btn--small"
                    disabled={false}
                    icon={iconUsd}
                >
                    BUTTON</ButtonReact>
            </ButtonStyled>
        </div>
    );
}

export default App;
