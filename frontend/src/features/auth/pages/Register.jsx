// import { useState } from "react";
// import "../style/register.scss";
// import FormGroup from "../components/FormGroup";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const {  handleRegister } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleRegister({username, email, password});
//     navigate("/");
//   };
//   return (
//     <main className="register-page">
//       <div className="form-container">
//         <h1>Register</h1>
//         <form onSubmit={handleSubmit}>
//           <FormGroup
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//              type="text"
//             label="Username"
//             placeholder="Enter your username"
//           />
//           <FormGroup
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//              type="text"
//             label="Email"
//             placeholder="Enter your email"
//           />
//           <FormGroup
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//              type="password"
//             type="password"
//             label="Password"
//             placeholder="Enter your password"
//           />
//           <button className="button" type="submit">
//             Register
//           </button>
//         </form>
//         <p>
//           Already have an account ? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default Register;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import FormGroup from "../components/FormGroup";
import "../style/register.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  };

  return (
    <main className="register-page moodly-theme">
      <div className="login-card"> {/* Reusing the layout card structure for absolute continuity */}
        
        {/* Moodly Poetic Panel - Tailored for Account Creation */}
        <section className="mood-panel">
          <div className="mood-content">
            <h1 className="brand-name">Moodly</h1>
            <h2 className="headline">Sync your soul to your sound.</h2>
            <div className="rhyme-box">
              <p>Step in front, release your care,</p>
              <p>Let our lens catch what is there.</p>
              <p>Every emotion, big or small,</p>
              <p>We find the beat to fit them all.</p>
            </div>
          </div>
          <div className="overlay-gradient"></div>
        </section>

        {/* Form Panel */}
        <section className="form-container">
          <div className="form-header">
            <h2>Join Moodly</h2>
            <p>Create your stage, turn the page.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 
              These custom inputs will be rendered beautifully 
              by the form nested styling rules in register.scss.
            */}
            <FormGroup
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              label="Username"
              placeholder="Enter your username"
            />
            <FormGroup
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              label="Email"
              placeholder="Enter your email"
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
                Register
              </button>
            </div>
          </form>
          
          <div className="form-footer">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default Register;