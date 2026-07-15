import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./features/auth/auth.context";
import { SongContextProvider } from "./features/home/song.context";
import "./features/shared/styles/global.scss";

function App() {
  return (
    <>
      <AuthProvider>
        <SongContextProvider>
          <AppRoutes />
        </SongContextProvider>
      </AuthProvider>
    </>
  );
}

export default App;
