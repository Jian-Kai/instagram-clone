import React from "react";
import Card from "../../components/Card";
import { StyMain } from "./style";

const Post = {
  user: {
    name: "cavs",
    avatar: "/img/baby.png",
  },
  imgs: ["/img/vince-fleming-tkGXqvvsFFs-unsplash.jpg"],
  content:
    "The Jays were a problem in Game 1 🔥🥶. The Jays were a problem in Game 1 🔥🥶. The Jays were a problem in Game 1 🔥🥶.",
  publish_date: "2020-08-20",
  comments: [
    {
      username: "Allen",
      message: "Hi Jay",
      publish_date: "2020-08-20",
    },
    {
      username: "Mary",
      message: "Problem Gay",
      publish_date: "2020-08-19",
    },
  ],
};

const Index = () => {
  return (
    <StyMain>
      <Card {...Post} />
      <Card {...Post} />
      <Card {...Post} />
    </StyMain>
  );
};

export default Index;
