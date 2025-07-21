import ClockHeading from "./component/ClockHeading";
import ClockSlogan from "./component/ClockSlogan";
import CurrentTime from "./component/CurrentTime";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="content-box">
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </div>
    </div>
  );
}

export default App;
