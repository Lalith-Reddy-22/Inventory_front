import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authService";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login");
  };

  return (
    <div className="--pad header" style={{ backgroundColor: 'lightblue' }}>
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Hi !!, </span>
          <span className="--color-danger" style={{ color: 'green' }}>{name}</span>
        </h3>
        <button
          onClick={logout}
          className="--btn --btn-danger"
          style={{
            backgroundColor: 'red',
            fontSize: '1.5rem',
            padding: '8.5px 35px',
            borderRadius: '10px',
            marginTop: '-20px',
          }}
        >
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
