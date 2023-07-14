import { useNavigate } from "react-router-dom";
import {goToHome, goToProfile} from "../routes/coordinator";

const Header = () => {

    const navigate = useNavigate()

  return (
    <div>
    <header>
      <button onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfile(navigate,'1')}>
        Ir para página de perfil
      </button>
    </header>
    </div>
  );
}

export default Header;
