import React from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
function PizzaCard(props) {
    // let { imgUrl, pizzaName, price, description } = pizzaData;
    // console.log(props);
    //fucntion pizzaAlert() => props.pizzaAlert
    return (
        <Card style={{ width: "18rem", height: "700px", marginBottom: "10px" }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title> {props.pizzaName} </Card.Title>
                <Card.Subtitle>Prix : {props.price} euros</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Button
                    variant="primary"
                    onClick={() => {
                        props.pizzaAlert(props.pizzaName);
                    }}
                >
                    Order now
                </Button>
            </Card.Body>
        </Card>
    );
}
PizzaCard.defaultProps = {
    imgUrl: "https://img.freepik.com/vecteurs-premium/icone-pizza-collection-restauration-rapide-icone-nourriture-isolee_138676-504.jpg",
    pizzaName: "Default Pizza",
    price: " N/A",
    description: "N/A",
};
PizzaCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    pizzaName: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
};
export default PizzaCard;
