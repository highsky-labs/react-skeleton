import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PContext } from '../../contexts/AppContext';
import './Header.css';

const Header = () => {
  const { application, setApplication } = useContext(PContext);
  const location = useLocation();
  const navigate = useNavigate();
  let hAttrs = {
    loginOptions: {
      name: 'Login',
    },
  };
  const { loginOptions } = hAttrs;

  return <div className="_header">Header</div>;
};

export default Header;
