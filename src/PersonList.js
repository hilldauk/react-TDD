import React from "react";

const PersonList = ({ people }) => {
  const peopleList =
    (people.length < 0)
      ? (<li className="message" key="message">There are no people to list</li>)
      : people.map((person) => {
          return (
            <li className="name" key={person}>
              {person}
            </li>
          );
        });

  return (
    <>
      <ul className="nameList">{peopleList}</ul>
    </>
  );
};

export default PersonList;

// // WITH TERNARY CONDITIONAL RENDERING
// let theCorrectView =
//   activeProduct === null ? (
//     <ProductList list={products} setActiveProduct={setActiveProduct} />
//   ) : (
//     <ProductDetail product={activeProduct} photo={activeProductPhoto} />
//   );
