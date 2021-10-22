import { useRef } from "react";
import Layout from "../components/Layout";
import Title from "../components/Title";
import Card from "../components/Card";
import Image from "next/image";

function index() {
  const nameTitle = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = {name: nameTitle.current.value}
    fetch('https://api-test-617ec-default-rtdb.firebaseio.com/test.json',{
      method:'POST',
      body: JSON.stringify(enteredName),
      headers: {'Content-type' : 'application/json'}
    })
    console.log(JSON.stringify(enteredName))
    console.log(enteredName)
  };

  const ARRAY = [
    {
      name: "Tom Cruise",
      age: 56,
      Born: "Syracuse, NY",
      Birthdate: "July 3, 1962",
      photo: "https://jsonformatter.org/img/tom-cruise.jpg",
    },
    {
      name: "Robert Downey Jr.",
      age: 53,
      Born: "New York City, NY",
      Birthdate: "April 4, 1965",
      photo: "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
    },
  ];
  return (
    <Card>
      <div>
        <Layout />
        <Title />
        <h1>Hi</h1>
        <ul>
          {ARRAY.map((player) => {
            return (
              <li key={player.age}>
                <div>{player.name}</div>
                <div>{player.Birthdate}</div>
                <div>
                  <Image
                    src={player.photo}
                    alt=""
                    width={64}
                    height={90}
                    quality={100}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <form onSubmit={submitHandler}>
          <label htmlFor="title">Name: </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="title"
            ref={nameTitle}
          ></input>
        </form>
      </div>
    </Card>
  );
}

export default index;
