import React from "react";
import PizzaCard from "./PizzaCard";
import { data } from "../data";
function PizzaList(props) {
    return (
        <div>
            {props.children}
            <div className="list-container">
                {data.map((element) => {
                    return (
                        <PizzaCard
                            key={element.pizzaName}
                            {...element}
                            // imgUrl={element.imgUrl}
                            // pizzaName={element.pizzaName}
                            // price={element.price}
                            // description={element.description}
                            pizzaAlert={props.pizzaAlert}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PizzaList;
