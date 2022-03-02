import React from "react";

export default function Welcome(props) {
  // Display the name passed as props
  return( 
      <>
  <h2>Hello, {props.name}</h2>
  <h1> from {props.country} </h1>
  </>
  );
}