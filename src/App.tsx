import SecondBrain from "components/SecondBrain";
import UserPhoto from "components/UsersPhoto";
import AfforaiTranslateFeature from "components/AfforaiTranslateFeature";
import SaveFromStress from "components/SaveFromStress";
import BuiltForUser from "./components/BuiltForUser";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column">
      <SecondBrain />
      <UserPhoto />
      <AfforaiTranslateFeature />
      <SaveFromStress />
      <BuiltForUser />
    </div>
  );
}

export default App;
