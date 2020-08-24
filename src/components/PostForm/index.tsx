import React from "react";
import cx from "classnames";
import Input from "../Input";
import Button from "../Button";
import { StyPostForm } from "./style";
import firebase from "firebase";
import { storage, postsRef } from "../../utils/useFirebase";

interface I_PostFrom {
  open: boolean;
  username: string;
}

const Index: React.FC<I_PostFrom> = (props) => {
  const { open, username } = props;
  const [content, setContent] = React.useState("");
  const [img, setImg] = React.useState<File | null>(null);

  const handleUpload = () => {
    if (img && content) {
      const uploadTask = storage.ref(`image/${img?.name}`).put(img);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            postsRef.add({
              user: {
                name: username,
                avatar:
                  "https://www.nretnil.com/avatar/LawrenceEzekielAmos.png",
              },
              imgs: [downloadURL],
              content: content,
              publish_date: firebase.firestore.FieldValue.serverTimestamp(),
              comments: {},
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
      <input type="file" onChange={(e: any) => setImg(e.target.files[0])} />
      <Button onClick={handleUpload}>上傳</Button>
    </StyPostForm>
  );
};

export default Index;
