import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate=useNavigate();
  const charging=()=>{
    navigate("/main-page")
  }

  return (
    <div className="imagenlogin">
      <div className="blur flx-ja-cc">
        <div className="login">
          <h1 className="login__title">ESIS-UNJBG</h1>
          <div className="login__logo-container flx-j-c">
            <img className="login__logo" src={logo} alt="" />
          </div>
          <form className="login__form">
            <div className="login__item">
              <label className="login__label" htmlFor="email">
                Ingrese su correo
              </label>
              <input
                className="login__input"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
              />
            </div>
            <div className="login__item">
              <label className="login__label" htmlFor="password">
                Ingrese su contraseña
              </label>
              <input
                className="login__input"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
            </div>
            <div className="login__item login__item--center">
              <input
                className="login__input login__input--submit"
                type="submit"
                value="Login"
                onClick={charging}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
