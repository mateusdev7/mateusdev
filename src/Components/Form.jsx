import Input from "../Components/Input.jsx";
import React from "react";
import UserIcon from "../assets/contato/user-icon.svg";
import EmailIcon from "../assets/contato/email-icon.svg";
import SendIcon from "../assets/contato/send-message-icon.svg";
import styles from "../styles/Form.module.scss";

const Form = ({ isVisible }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
    <form
      className={`w-[300px] sm:w-[450px] pl-5 pr-5`}
      style={{ margin: "0 auto" }}
    >
      <Input
        srcImage={UserIcon}
        id="name"
        value={name}
        setValue={setName}
        labelName="Insira seu Nome"
        type="text"
        isVisible={isVisible}
      />
      <Input
        srcImage={EmailIcon}
        id="email"
        value={email}
        setValue={setEmail}
        labelName="Insira seu Email"
        type="email"
        isVisible={isVisible}
      />
      <textarea
        name="message"
        id="message"
        placeholder="Digite sua mensagem"
        className={`resize-none border-2 border-blueColor p-3 h-40 mb-10 text-whiteColor font-firaCode text-xs w-full ${styles.textarea}`}
        value={message}
        rows={4}
        cols={40}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button
        className={`flex flex-row items-center gap-3 px-6 py-2 md:px-8 md:py-2 border-2 border-blueColor font-audioWide text-xs md:text-sm text-whiteColor ${
          isVisible ? styles.button : ""
        }`}
        rel="noreferrer"
      >
        Enviar Mensagem
        <img src={SendIcon} alt="Send Icon" />
      </button>
    </form>
  );
};

export default Form;
