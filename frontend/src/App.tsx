import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from '@/components/Login/Login'
import Layout  from "./public/Layout";
// import ProtectedRoute from '@/components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
              <Layout />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
