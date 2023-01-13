export function Signup() {
  return (
    <form action="http://localhost:3000/users" method="POST">
      <p>Name: <input type="text" name="name"/></p>
      <p>Email: <input type="email" name="email"/></p>
      <p>Password: <input type="password" name="password"/></p>
      <p>Password Confirmation: <input type="password" name="password_confirmation"/></p>
      <button type="submit">Signup</button>
    </form>
  );
}