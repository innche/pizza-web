import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const CREATE_ORDER = gql`
  mutation CreateOrder(
    $name: String!
    $email: String!
    $phone: String!
    $pizzas: [OrderedPizza]!
  ) {
    createOrder(name: $name, email: $email, phone: $phone, pizzas: $pizzas)
  }
`;

const OrderForm = () => {
  let name, email, phone;
  const history = useHistory();
  const { cart, emptyCart } = useContext(CartContext);
  const [createOrder] = useMutation(CREATE_ORDER);

  return (
    <form
      className="mt5"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(
          name.value,
          Object.keys(cart).map((item) => Number.parseInt(item))
        );
        createOrder({
          variables: {
            name: name.value,
            email: email.value,
            phone: phone.value,
            pizzas: Object.keys(cart).map((item) => {
              return {
                id: Number.parseInt(item),
                quantity: cart[Number.parseInt(item)]
              };
            })
          }
        });
        name.value = "";
        email.value = "";
        phone.value = "";
        alert("Order created");
        history.replace("/");
        emptyCart();
      }}
    >
      <input
        className="mr3 mb3 pa3 ba b--black bg-lightest-blue"
        type="text"
        placeholder="Name"
        ref={(node) => {
          name = node;
        }}
      />
      <input
        className="mr3 mb3 pa3 ba b--black bg-lightest-blue"
        type="text"
        placeholder="E-mail"
        ref={(node) => {
          email = node;
        }}
      />
      <input
        className="mr3 mb3 pa3 ba b--black bg-lightest-blue"
        type="text"
        placeholder="Phone number"
        ref={(node) => {
          phone = node;
        }}
      />
      <button className="pa3 ba b--gold bg-gold br3 grow f3" type="submit">
        Place order
      </button>
    </form>
  );
};

export default OrderForm;
