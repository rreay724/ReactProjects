import React, { useState } from "react";
import "../public/styles/heartrate.css";

/*  You can calculate your maximum heart rate by subtracting your age from 220. For example, if you're 45 years old, subtract 4
5 from 220 to get a maximum heart rate of 175. This is the average maximum number of times your heart 
should beat per minute during exercise. */

// HEART RATE ZONE 2: 60–70% OF HRMAX
// HEART RATE ZONE 3: 70–80% OF HRMAX
// HEART RATE ZONE 4: 80–90% OF HRMAX
// HEART RATE ZONE 5: 90–100% OF HRMAX

function HeartRate() {
  const [age, setAge] = useState("");
  const [maxHeartRate, setMaxHeartRate] = useState("0");
  const [warmupZone, setWarmUpZone] = useState("");
  const [fatBurnZone, setFatBurnZone] = useState("");
  const [cardioZone, setCardioZone] = useState("");
  const [peakZone, setPeakZone] = useState("");

  function calculateHeartRate() {
    if (age === "" || age === "0") {
      setMaxHeartRate("0");
      setWarmUpZone("");
      setFatBurnZone("");
      setCardioZone("");
      setPeakZone("");
    } else {
      setMaxHeartRate(220 - age);
      setWarmUpZone(
        Math.trunc((220 - age) * 0.55) +
          "bpm - " +
          Math.trunc((220 - age) * 0.65) +
          "bpm"
      );
      setFatBurnZone(
        Math.trunc((220 - age) * 0.66) +
          "bpm - " +
          Math.trunc((220 - age) * 0.75) +
          "bpm"
      );
      setCardioZone(
        Math.trunc((220 - age) * 0.76) +
          "bpm - " +
          Math.trunc((220 - age) * 0.85) +
          "bpm"
      );
      setPeakZone(
        Math.trunc((220 - age) * 0.85) +
          "bpm - " +
          Math.trunc((220 - age) * 0.99) +
          "bpm"
      );
    }
  }

  return (
    <div className="container">
      <div>
        <div className="info">
          <h1>Calculate Max Heart Rate</h1>
          <div>
            <p>Enter Age</p>
            <input
              className="ageInput"
              onChange={(event) => setAge(event.target.value)}
              type="number"
              placeholder="Age"
              name="age"
            ></input>
            <button className="pulse-button" onClick={calculateHeartRate}>
              Submit
            </button>
          </div>
          <div>
            <h2>Max Heart Rate</h2>
            <h3>{maxHeartRate}</h3>
          </div>
          <div>
            <h2>Heart Rate Zones</h2>
            <label>Warmup</label>
            <p className="warmup zones" name="warmup">
              {warmupZone}
            </p>
            <label>Fat Burn</label>

            <p className="fatBurn zones" name="fatburn">
              {fatBurnZone}
            </p>
            <label>Cardio</label>

            <p className="cardio zones" name="cardio">
              {cardioZone}
            </p>
            <label>Peak</label>

            <p className="peak zones" name="peak">
              {peakZone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartRate;
