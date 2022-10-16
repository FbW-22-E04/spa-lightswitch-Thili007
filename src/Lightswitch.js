import { useState } from "react";
import "./lightswitch.css";

const Light = () => {
  const [lightOn, setLightOn] = useState(true);
  return (
    <div className={`room ${lightOn ? "light" : "dark"}`}>
      <button onClick={() => setLightOn(!lightOn)}>Switch</button>

      {lightOn === true ? (
        <p className="light">The room's Light On</p>
      ) : (
        <p className="dark">The room's Light Off</p>
      )}
    </div>
  );
};

export default Light;
