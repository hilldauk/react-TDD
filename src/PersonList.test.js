import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("renders a Persons List", () => {
    //Setup
    const personListWrapper = shallow(
      <PersonList people={["henry", "kendra", "brandon"]} />
    );

    //     const array1 = [1, 4, 9, 16];

    // // pass a function to map
    // const map1 = array1.map(x => x * 2);

    // console.log(map1);
    // // expected output: Array [2, 8, 18, 32]

    //Excercise
    const mypersonList = personListWrapper
      .find(".name")
      .map((person) => person.text());

    //Assert
    expect(mypersonList).toEqual(["henry", "kendra", "brandon"]);
  });

  it("returns a message if no people are in the list", () => {
    //Setup
    const personListWrapper = shallow(<PersonList people={[]} />);
    const expectedMessage = "There are no people to list";

    //Excercise
    const actualMessage = personListWrapper
      .find(".message")
      .map((message) => message.text());

    //Assert
    expect(actualMessage).toEqual(expectedMessage);
  });
});
