import React from "react";
import { Link } from "react-router-dom";
import { StyHeader, StyFixed, StyAddPost } from "./style";
import PostFrom from "../PostForm";
import { AddBoxOutlined } from "@material-ui/icons";
import { postsRef } from "../../utils/useFirebase";

const fakeData = {
  user: {
    name: "TonyKuo",
    avatar: "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
  },
  imgs: [
    "https://images.unsplash.com/photo-1523380262778-076eb862d38f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
  ],
  content:
    "The Jays were a problem in Game 1 🔥🥶. The Jays were a problem in Game 1 🔥🥶. The Jays were a problem in Game 1 🔥🥶.",
  publish_date: "2020-08-19",
  comments: [
    {
      username: "Allen",
      message: "Hi Jay",
      publish_date: "2020-08-21",
    },
    {
      username: "Mary",
      message: "Problem Gay",
      publish_date: "2020-08-20",
    },
  ],
};

interface I_Header {
  user: {
    displayName: string;
  } | null;
}

const Index: React.FC<I_Header> = (props) => {
  const { user } = props;

  const [open, setOpen] = React.useState(false);

  const handleAddPost = (content: any) => {
    setOpen(!open);
    // postsRef.doc().set(content);
  };

  return (
    <StyHeader>
      <div />
      <StyFixed>
        <div className="inside">
          <div className="logo">
            <img src="/instagram.png" alt="instagram-colne" />
          </div>
          <StyAddPost onClick={() => handleAddPost(fakeData)}>
            <AddBoxOutlined fontSize="large" color="inherit" />
          </StyAddPost>
          <div style={{ flex: "0 1 30%", textAlign: "right" }}>
            {!!user ? `${user.displayName}` : <Link to="/login">Login</Link>}
          </div>
        </div>
        <PostFrom open={open} />
      </StyFixed>
    </StyHeader>
  );
};

export default Index;
