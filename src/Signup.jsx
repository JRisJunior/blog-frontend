import axios from 'axios';

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/users", params).then(response => {
      console.log(response.data);
      event.target.reset();
    })
      .catch(error => {
        console.log("in the catch");
        console.log(error.response.data.errors);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Name: <input type="text" name="name"/></p>
      <p>Email: <input type="email" name="email"/></p>
      <p>Password: <input type="password" name="password"/></p>
      <p>Password Confirmation: <input type="password" name="password_confirmation"/></p>
      <button type="submit">Signup</button>
    </form>
  );
}