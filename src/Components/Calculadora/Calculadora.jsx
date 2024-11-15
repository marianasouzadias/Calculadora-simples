import { useState } from "react";
import "./Calculadora.scss";

const Calculadora = () => {
    const [display, setDisplay] = useState("0"); 
    const [operador, setOperador] = useState(""); 
    const [valorAnterior, setValorAnterior] = useState(""); 
    const [resultado, setResultado] = useState(""); 

    const numeroClick = (numero) => {
        setDisplay((prevDisplay) =>
            prevDisplay === "0" ? numero : prevDisplay + numero
        );
    };

    const operadorClick = (operador) => {
        if (operador === "=") {
            EquacaoClick();
        } else {
            if (operador === "+" || operador === "-" || operador === "x" || operador === "÷") {
                setValorAnterior(display);
                setOperador(operador);
                setDisplay(display + operador); 
            }
        }
    };

    const EquacaoClick = () => {
        const numero1 = parseFloat(valorAnterior); 
        const numero2 = parseFloat(display.split(operador)[1]); 

        let resultado;

        switch (operador) {
            case "+":
                resultado = numero1 + numero2;
                break;
            case "-":
                resultado = numero1 - numero2;
                break;
            case "x":
                resultado = numero1 * numero2;
                break;
            case "÷":
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
        }

        setDisplay(resultado.toString()); 
        setValorAnterior(""); 
        setOperador(""); 
    };

    const limpa = () => {
        setDisplay("0");
        setValorAnterior("");
        setOperador("");
    };

    return (
        <section className="container-calculadora">
            <div className="container-display">
                <input type="text" readOnly className="display" value={display} />
            </div>
            <div className="container-botao">
                <button onClick={() => operadorClick("+")}>+</button>
                <button onClick={() => operadorClick("-")}>-</button>
                <button onClick={() => operadorClick("x")}>x</button>
                <button onClick={limpa}>C</button>
                <button onClick={() => numeroClick("7")}>7</button>
                <button onClick={() => numeroClick("8")}>8</button>
                <button onClick={() => numeroClick("9")}>9</button>
                <button onClick={() => operadorClick("÷")}>÷</button>
                <button onClick={() => numeroClick("4")}>4</button>
                <button onClick={() => numeroClick("5")}>5</button>
                <button onClick={() => numeroClick("6")}>6</button>
                <button onClick={() => numeroClick("1")}>1</button>
                <button onClick={() => numeroClick("2")}>2</button>
                <button onClick={() => numeroClick("3")}>3</button>
                <button onClick={() => numeroClick("0")}>0</button>
                <button onClick={EquacaoClick}>=</button>
            </div>
        </section>
    );
};

export default Calculadora;
