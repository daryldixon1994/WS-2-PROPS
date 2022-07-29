import "./App.css";
import PizzaList from "./components/PizzaList";
function App() {
    function pizzaAlert(name) {
        alert(`You picked : ${name} 🍕`);
    }
    return (
        <div className="App">
            <PizzaList pizzaAlert={pizzaAlert}>
                <h1>Notre Pizzas</h1>
            </PizzaList>
        </div>
    );
}

export default App;
