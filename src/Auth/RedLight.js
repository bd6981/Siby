import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

export default function UnauthorizedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/"  />
        <Route path="/signin" element={<Login />} />
              <Route path="*" element= {<main><p>nope</p></main>}  />
      </Routes>
    </Router>
  );
}

