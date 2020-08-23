import React from "react";
import { useHistory } from "react-router-dom";
import cx from "classnames";
import { StyLogin, StyFixedButton } from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { auth } from "../../utils/useFirebase";

const Index = () => {
  const history = useHistory();

  const [register, setRegister] = React.useState(false);

  const loginRef = React.useRef({
    displayName: "",
    eamil: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (register) {
      if (
        loginRef.current.eamil === "" ||
        loginRef.current.password === "" ||
        loginRef.current.displayName === ""
      ) {
        alert("Pleace input email , passowrd and displayName");
        return;
      }
      auth
        .createUserWithEmailAndPassword(
          loginRef.current.eamil,
          loginRef.current.password
        )
        .then((authUser) => {
          authUser.user
            ?.updateProfile({
              displayName: loginRef.current.displayName,
            })
            .then(() => {
              history.push("/");
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      if (loginRef.current.eamil === "" || loginRef.current.password === "") {
        alert("Pleace input email and passowrd");
        return;
      }
      auth
        .signInWithEmailAndPassword(
          loginRef.current.eamil,
          loginRef.current.password
        )
        .then(() => {
          history.push("/");
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <StyLogin>
      <h1 className="title">Instagram Clone</h1>
      <form onSubmit={handleSubmit}>
        {register && (
          <Input
            placeholder="暱稱"
            type="text"
            onChange={(v) => (loginRef.current.displayName = v)}
          />
        )}
        <Input
          placeholder="電子郵件"
          type="text"
          onChange={(v) => (loginRef.current.eamil = v)}
        />
        <Input
          placeholder="密碼"
          type="password"
          onChange={(v) => (loginRef.current.password = v)}
        />
        <div className="login">
          <Button type="submit">{!register ? "登入" : "註冊"}</Button>
        </div>
      </form>
      <StyFixedButton
        className={cx({ right: !register, left: register })}
        onClick={() => setRegister(!register)}
      >
        {register ? "現有帳號登入" : "註冊新帳號"}
      </StyFixedButton>
    </StyLogin>
  );
};

export default Index;
