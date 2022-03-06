import { useState} from 'react';
import { Container, ButtonsContainer } from './style';
import Screen from '../Screen';
import Button from '../Button';

const CalculatorBody = ({ clickedButton, setClickedButton }) => {

    const [finalResult, setFinalResult] = useState(0);

    const calculatorFunction = (value) => {
        
        if(value.includes("x")) {

            const expression = value.join("").split("x");
            let result = Number(expression[0]) * Number(expression[1]);
            if(isNaN(result)) {
                setFinalResult(0);
                console.log("Xxxxxxxxxx")
            } else {
                setFinalResult(result);
            }

        } else if(value.includes("/")) {

            const expression = value.join("").split("/");
            let result = Number(expression[0]) / Number(expression[1]);
            if(isNaN(result)) {
                setFinalResult(0);
            } else {
                setFinalResult(result);
            }

        } else if(value.includes("+")) {

            const expression = value.join("").split("+");

            let result = Number(expression[0]) + Number(expression[1]);
            if(isNaN(result)) {
                setFinalResult(0);
            } else {
                setFinalResult(result);
            }

        } else if(value.includes("-")) {

            const expression = value.join("").split("-");

            let result = Number(expression[0]) - Number(expression[1]);
            if(isNaN(result)) {
                setFinalResult(0);
            } else {
                setFinalResult(result);
            }

        }
    };

    

    const mainFunction = (event) => {

        const clickedButtonValue = event.target.textContent;
        
        if(clickedButtonValue === "AC") {

            setClickedButton([]);
            setFinalResult(0);
           
        } else if(event.target.textContent !== "AC" && event.target.textContent !== "=") {

            if(clickedButton.length === 0 && clickedButtonValue !== "x" && clickedButtonValue !== "/" && clickedButtonValue !== "+") {
                setClickedButton([...clickedButton, clickedButtonValue]);
            }

            if(clickedButton.length !== 0) {
                setClickedButton([...clickedButton, clickedButtonValue]);
            }
           
        } else if(clickedButtonValue === "=") {

            calculatorFunction(clickedButton)
        }
    };

    const buttonsValue= ["/","9","8","7","x","6","5","4","-","3","2","1","=","+",".","0","AC"];
    
    return (
        <Container>
            <Screen>{finalResult !== 0 ? finalResult : clickedButton.length !== 0 ? clickedButton : 0}</Screen>
            <ButtonsContainer>
                {
                    buttonsValue.map((value) => {
                        return (
                            <Button 
                                key={value}
                                id={value === "=" ? "equalButton" : value === "AC" ? "clearButton" : undefined}
                                onClick={(event) => {

                                    setClickedButton([]);
                                    setFinalResult(0);
                                    mainFunction(event);

                                }}
                            >{value}</Button>
                        ) 
                    })
                }
            </ButtonsContainer>
        </Container>
    );
}

export default CalculatorBody;