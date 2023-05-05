import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={MainPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
