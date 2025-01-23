import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "./contexts/LanguageContext";
import QuestionScreen from "./pages/QuestionScreen";
import SelectLanguageScreen from "./pages/SelectLanguageScreen";
import StartScreen from "./pages/StartScreen";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/select-language" element={<SelectLanguageScreen />} />
          <Route path="/question" element={<QuestionScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
