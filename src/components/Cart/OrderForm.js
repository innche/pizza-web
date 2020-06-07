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
        type="text"
        placeholder="Name"
        ref={(node) => {
          name = node;
        }}
      />
      <input
        type="text"
        placeholder="E-mail"
        ref={(node) => {
          email = node;
        }}
      />
      <input
        type="text"
        placeholder="Phone number"
        ref={(node) => {
          phone = node;
        }}
      />
      <button type="submit">Place order</button>
    </form>
  );
};

export default OrderForm;
