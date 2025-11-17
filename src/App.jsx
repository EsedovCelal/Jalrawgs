import Navbar from "./Component/Navbar";
import Log_in from "./Component/Log_in";
import Sign_up from "./Component/Sign_up";
import For_id from "./Component/For_id";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/log_in" element={<Log_in />} />
      <Route path="/Sign_up" element={<Sign_up />} />
      <Route path="/:id" element={<For_id />} />
    </Routes>
  );
};
export default App;
