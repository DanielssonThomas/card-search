import Button from "../components/Button/index";

function Login(props) {
  return (
    <div className="loginScreen">
      <pre>{props.accessToken}</pre>
      <Button text="Login" />
    </div>
  );
}
export default Login;
