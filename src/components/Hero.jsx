import React from "react";
import { useEffect, useState } from "react";
import GameInput from "./GameInput";
import ItemIcon from "./ItemIcon";

function Hero() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [chosenItem, setChosenItem] = useState("");

  const getRandomItem = (arr) =>{
    let randomItem = arr[Math.floor(Math.random() * arr.length)];
    let allNames = [...randomItem.alternativeName, randomItem.name];
    allNames = allNames.map((element,i)=>{
      return element.toLowerCase();
    });
    randomItem = { ...randomItem, "allNames":allNames};
    return randomItem;
  }

  useEffect(() => {
    const url = "/json/items.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const { item } = await response.json();
        const randomItem = getRandomItem(item);
        setData(item);
        setChosenItem(randomItem);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  if(chosenItem.allNames?.includes(text.toLowerCase())){
    const randomItem = getRandomItem(data);
    setChosenItem(randomItem);
    setText("");
  }
  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center mh-100">
      <ItemIcon icon={chosenItem.file} />
      <GameInput text={text} setText={setText} />
    </div>
  );
}

export default Hero;
