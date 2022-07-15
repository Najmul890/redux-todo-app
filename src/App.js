import {
  Routes,
  Route,
} from "react-router-dom";
import AddBook from "./components/AddBook/AddBook";
import Books from "./components/Books/Books";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <div className="px-5">
       
       <Header></Header>
       <Routes>
        <Route path="/" element={<Books></Books>} ></Route>
        <Route path="/addBook" element={<AddBook></AddBook>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
       </Routes>
    </div>
  );
}

export default App;
