import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
const Protected = ({ children }) => {
  const { loading, user, handleGetMe } = useAuth();
  //   const navigate = useNavigate();
  // useEffect(() => {
  //   handleGetMe();
  // }, []);

  useEffect(() => {
    if (user === null) {
      handleGetMe();
    }
  }, [user]);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Protected;
