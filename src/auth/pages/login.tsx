import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contex/auth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  const handleLogin = () => {
    onLogin("Javier");
    navigate("/");
  };

  return (
    <section className="d-flex flex-row align-items-center justify-content-center vh-100">
      <div className="d-flex  flex-column align-items-center justify-content-center gap-3 border border-black p-5">
        <h1>LoginPage</h1>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </section>
  );
};
