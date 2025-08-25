import Access from "./components/Access";
import Login from "./components/Login";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();
  return isLogin ? <Access/> : <Login/>
}

export default App
