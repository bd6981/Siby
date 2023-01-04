import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";

export default function RedLight() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="*" element={
            <div>
              <p>Uh Oh.... I cant find it... try again </p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}