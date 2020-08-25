import React from "react";
import cx from "classnames";
import Input from "../Input";
import Button from "../Button";
import { StyPostForm, StyProgress } from "./style";
import firebase from "firebase";
import { storage, postsRef } from "../../utils/useFirebase";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

interface I_PostFrom {
  open: boolean;
  onUpload: () => void;
  username: string;
}

const Index: React.FC<I_PostFrom> = (props) => {
  const { open, username, onUpload } = props;
  const [content, setContent] = React.useState("");
  const [img, setImg] = React.useState<File | null>(null);
  const [progress, setProgress] = React.useState<string | null>(null);

  const handleUpload = () => {
    if (img && content) {
      const today = dayjs().format("YYYY/MM/DD");
      const id = uuidv4();
      const uploadTask = storage.ref(`images/${today}/${id}`).put(img);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress(
            `${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`
          );
        },
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            // get img url and upload post
            postsRef
              .add({
                user: {
                  name: username,
                  avatar:
                    "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
                },
                imgs: [downloadURL],
                content: content,
                publish_date: firebase.firestore.FieldValue.serverTimestamp(),
                comments: [],
              })
              .then(() => {
                setContent("");
                setImg(null);
                setProgress(null);
                onUpload();
              });
          });
        }
      );
    }
  };

  return (
    <StyPostForm className={cx({ show: open })}>
      <Input
        type="text"
        placeholder="文章內容"
        onChange={(v) => setContent(v)}
      />
      <div className="upload">
        <StyProgress progress={progress} />
        <input type="file" onChange={(e: any) => setImg(e.target.files[0])} />
      </div>
      <Button onClick={handleUpload}>上傳</Button>
    </StyPostForm>
  );
};

export default Index;
