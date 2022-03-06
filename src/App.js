import { useState } from 'react';
import GlobalStyle from './styles/global';
import CalculatorBody from './components/CalculatorBody';

function App() {

    const [clickedButton, setClickedButton] = useState([]);

    return (
        <div className="App">
            <GlobalStyle/>
            <CalculatorBody 
                clickedButton={clickedButton} 
                setClickedButton={setClickedButton}
            />
        </div>
    );
}

export default App;