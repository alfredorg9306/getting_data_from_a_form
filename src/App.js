import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData); //ESTA ES LA FUNCION QUE VA A SER USADO COMO PROP AL LLAMAR EL CHILD COMPONENT DENTRO DEL PARENT COMPONENT
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  }

  return (
    <form className="container" onSubmit={submitHandler}>
      <fieldset className="form-group">
        <legend>Personal Information</legend>
        <div className="col-md-6 offset-md-1">
          <label className="form-label">
            First Name:<sub>*</sub>
          </label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={formData.firstname}
            placeholder="First Name"
            onChange={onChange}
          />
        </div>

        <div className="col-md-6 offset-md-1">
          <label className="form-label">
            Last Name:<sub>*</sub>
          </label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={formData.lastname}
            placeholder="Last Name"
            onChange={onChange}
          />
        </div>

        <div className="col-md-6 offset-md-1">
          <label className="form-label">
            Email:<sub>*</sub>
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={onChange}
          />
        </div>

        <div className="col-md-6 offset-md-1">
          <label className="form-label">
            Password<sub>*</sub>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={onChange}
          />
        </div>

        <div className="col-md-6 offset-md-1 ">
          <button
            style={{ width: "200px", marginTop: "10px" }}
            className="btn btn-primary"
          >
            Register
          </button>
        </div>
      </fieldset>
    </form>
  );
}

function ListingUser(props) {
  return (
    <ul>
      {props.allUsers.map((user) => (
        <li key={user.email}>
          <span>
            Full Name: {user.firstname} {user.lastname} Email: {user.email}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allUsers, updateAllUsers] = useState([]);

  function addUser(user) { //ESTA FUNCION ES LA QUE PERMITE ACTUALIZAR EL VALOR QUE SE TOMA DE LOS INPUTS 
    updateAllUsers([...allUsers, user]);
  }
  return (
    <>
      <Form onAdd={addUser} />
      <ListingUser allUsers={allUsers} />
    </>
  );
}

export default App;
