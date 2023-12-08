import { Header } from "components/Header";
import { SecondBrain } from "components/SecondBrain";
import { UserPhoto } from "components/UsersPhoto";
import { AfforaiTranslateFeature } from "components/AfforaiTranslateFeature";
import { SaveFromStress } from "components/SaveFromStress";
import { BuiltForUser } from "components/BuiltForUser";
import { CreateMultipleChatbot } from "components/CreateMultipleChatbot";
import { DifferentModes } from "components/DifferentModes";
import { MultipleLangSupported } from "components/MultipleLangSupported";
import { GetMoreOutOfYourFiles } from "components/GetMoreOutOfYourFiles";
import { SeamlessIntegration } from "components/SeamlessIntegration";
import { AccurayAndReliability } from "components/AccurayAndReliability";
import { MyPromise } from "components/MyPromise";
import { Testimonial } from "components/Testimonial";
import { UserSay } from "./components/UserSay";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <SecondBrain />
      <UserPhoto />
      <AfforaiTranslateFeature />
      <SaveFromStress />
      <BuiltForUser />
      <CreateMultipleChatbot />
      <DifferentModes />
      <MultipleLangSupported />
      <GetMoreOutOfYourFiles />
      <SeamlessIntegration />
      <AccurayAndReliability />
      <UserSay />
      <MyPromise />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
