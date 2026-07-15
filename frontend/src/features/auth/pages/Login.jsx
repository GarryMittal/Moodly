// import { useState } from "react";
// import "../style/login.scss";
// import FormGroup from "../components/FormGroup";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// const Login = () => {
//   const { handleLogin } = useAuth();

//   const navigate = useNavigate();
//   const [identifier, setIdentifer] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await handleLogin({ identifier, password });

//     navigate("/");
//   };
//   const handleRecruiterView = async () => {
//     await handleLogin({ identifier: "recruiter", password: "Recruiter@2026" });
//     navigate("/");
//   };
//   return (
//     <main className="login-page">
//       <div className="form-container">
//         <h1>Login</h1>
//         <form onSubmit={handleSubmit}>
//           <FormGroup
//             value={identifier}
//             onChange={(e) => setIdentifer(e.target.value)}
//             type="text"
//             label="Email/Username"
//             placeholder="Enter your email or username"
//           />
//           <FormGroup
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             label="Password"
//             placeholder="Enter your password"
//           />
//           <button className="button" type="submit">
//             Login
//           </button>
//           <button
//             className="button recruiter-btn"
//             onClick={handleRecruiterView}
//           >
//             👀 Recruiter's View
//           </button>
//         </form>
//         <p>
//           Dont have an account ? <Link to="/register">Register here</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import FormGroup from "../components/FormGroup";
import "../style/login.scss";

const Login = () => {
  const { handleLogin } = useAuth();
  const navigate = useNavigate();
  
  const [identifier, setIdentifer] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ identifier, password });
    navigate("/");
  };

  const handleRecruiterView = async () => {
    await handleLogin({ identifier: "recruiter", password: "Recruiter@2026" });
    navigate("/");
  };

  return (
    <main className="login-page moodly-theme">
      <div className="login-card">
        
        {/* Moodly Brand & Poetic Panel */}
        <section className="mood-panel">
          <div className="mood-content">
            <h1 className="brand-name">Moodly</h1>
            <h2 className="headline">Let your face set the pace.</h2>
            <div className="rhyme-box">
              <p>Happy, sad, or caught by surprise,</p>
              <p>We read the rhythm right in your eyes.</p>
              <p>Just face the lens and let it play,</p>
              <p>The perfect soundtrack for your day.</p>
            </div>
          </div>
          <div className="overlay-gradient"></div>
        </section>

        {/* Form Side Panel */}
        <section className="form-container">
          <div className="form-header">
            <h2>Welcome</h2>
            <p>Sign in to tune into your feelings.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 
              These FormGroups will now be styled correctly 
              by the updated SCSS below. 
            */}
            <FormGroup
              value={identifier}
              onChange={(e) => setIdentifer(e.target.value)}
              type="text"
              label="Email / Username"
              placeholder="Enter your email or username"
            />
            <FormGroup
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            
            <div className="action-group">
              <button className="button primary-btn" type="submit">
                Login
              </button>
              <button
                type="button"
                className="button recruiter-btn"
                onClick={handleRecruiterView}
              >
                👀 Recruiter's View
              </button>
            </div>
          </form>
          
          <div className="form-footer">
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default Login;