import React from "react";
import Card, { I_Post, I_Message } from "../../components/Card";
import { StyMain } from "./style";
import { db, postsRef } from "../../utils/useFirebase";
import dayjs from "dayjs";

const second2Date = (second: number) => {
  return dayjs.unix(second).format("MMMM DD YYYY");
};

const Index = () => {
  const [posts, setPosts] = React.useState<
    {
      id: string;
      post: I_Post;
    }[]
  >([]);

  React.useEffect(() => {
    postsRef.onSnapshot((snapshop) => {
      const firePosts: {
        id: string;
        post: I_Post;
      }[] = snapshop.docs.map((doc) => {
        const data: any = doc.data();
        const comments: I_Message[] = data.comments.map((c: any) => ({
          ...c,
          publish_date: second2Date(c.publish_date),
        }));
        return {
          id: doc.id,
          post: {
            ...data,
            publish_date: second2Date(data.publish_date.seconds),
            comments,
          },
        };
      });
      setPosts(firePosts);
    });
  }, []);

  return (
    <StyMain>
      {posts.map((p, idx) => {
        return <Card key={`${p.id}_${idx}`} {...p.post} />;
      })}
    </StyMain>
  );
};

export default Index;
