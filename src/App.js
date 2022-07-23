import { useState } from "react";
import emailjs from "emailjs-com";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    subject: "",
    email: "",
    message: ""
  });
  const { subject, email, message } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evofquq",
        "template_ryn5zjh",
        e.target,
        "7eoU-hUGGubP0joVz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="App">
      <h1>Sending emails with ReactJs</h1>
      <form onSubmit={submitHandler} autoComplete="off">
        <label>Subject:</label>
        <br />
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={changeHandler}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <br />
        <label>Message:</label>
        <br />
        <input
          type="text"
          name="message"
          value={message}
          onChange={changeHandler}
        />
        <br />
        <input type="submit" name="submit" onSubmit={submitHandler} />
      </form>
    </div>
  );
}
