import React from "react";
import dayjs from "dayjs";
import { StyArticle, StyHeader, StyPhoro, StyMessage } from "./style";
import Avatar from "../Avatar";

export interface I_Message {
  username: string;
  message: string;
  publish_date: string;
}

export interface I_Post {
  user: {
    name: string;
    avatar: string;
  };
  imgs: string[];
  content: string;
  publish_date: string;
  comments: I_Message[];
}

const Message: React.FC<I_Message> = (props) => {
  const { username, message, publish_date } = props;

  return (
    <StyMessage>
      <strong className="username">{username}</strong>
      <span className="text">{message}</span>
      <span className="date">{dayjs(publish_date).format("MMMM DD YYYY")}</span>
    </StyMessage>
  );
};

const Index: React.FC<I_Post> = (props) => {
  const { user, imgs, content, publish_date, comments } = props;

  return (
    <StyArticle>
      <StyHeader>
        <div>
          <Avatar imgUrl={user.avatar} name={user.name} size={30} />
        </div>
        <div className="title">
          <span className="main">
            <a href="#">{user.name}</a>
          </span>
        </div>
      </StyHeader>
      <StyPhoro>
        <img src={imgs[0]} alt="" />
      </StyPhoro>
      <section className="content">
        <Message
          username={user.name}
          message={content}
          publish_date={publish_date}
        />
        {comments.map((c, idx) => (
          <Message key={`${user.name}_${c.username}_${idx}`} {...c} />
        ))}
      </section>
    </StyArticle>
  );
};

export default Index;
