import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextEditor from "./TextEditor/TextEditor";

function App() {
  return (
    <div>
     
      <Router>
        <Routes>
          <Route path='/' element={<TextEditor />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
