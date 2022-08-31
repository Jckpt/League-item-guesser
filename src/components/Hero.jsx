import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import GameInput from "./GameInput";
import ItemIcon from "./ItemIcon";

function Hero() {
  const [text, setText] = useState("");
  const fetchItem = async () => {
    const URL = "https://items-api.vercel.app/api/item"; // my API that I've hosted on vercel
      const response = await fetch(URL);
      return response.json();
  };
  const { data, status, refetch } = useQuery(['item'], fetchItem)
  const itemReroll = () => {
      refetch();
      setText("");
  };
  return (
    <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center mh-100">
      <ItemIcon item={data?.item} status={status}/>
      <GameInput
        itemReroll={itemReroll}
        item={data?.item}
        text={text}
        setText={setText}
        refetch={refetch}
      />
    </div>
  );
}

export default Hero;
