import React, { useState } from "react";
import "../public/styles/heartrate.css";
import NavigationBar from "../pages/Layout/navbar";

/*  You can calculate your maximum heart rate by subtracting your age from 220. For example, if you're 45 years old, subtract 4
5 from 220 to get a maximum heart rate of 175. This is the average maximum number of times your heart 
should beat per minute during exercise. */

// HEART RATE ZONE 2: 60–70% OF HRMAX
// HEART RATE ZONE 3: 70–80% OF HRMAX
// HEART RATE ZONE 4: 80–90% OF HRMAX
// HEART RATE ZONE 5: 90–100% OF HRMAX

// warmup fat burning endurance training hardcore training maximum effort

function HeartRate() {
  const [age, setAge] = useState("");
  const [maxHeartRate, setMaxHeartRate] = useState("0");
  const [staticZone, setStaticZone] = useState("");
  const [warmupZone, setWarmUpZone] = useState("");
  const [fatBurnZone, setFatBurnZone] = useState("");
  const [cardioZone, setCardioZone] = useState("");
  const [peakZone, setPeakZone] = useState("");

  // inactive health improvement

  function calculateHeartRate() {
    if (age === "" || age === "0") {
      setMaxHeartRate("0");
      setStaticZone("");
      setWarmUpZone("");
      setFatBurnZone("");
      setCardioZone("");
      setPeakZone("");
    } else {
      setMaxHeartRate(220 - age);
      setStaticZone(
        Math.trunc((220 - age) * 0.5) +
          "bpm - " +
          Math.trunc((220 - age) * 0.6) +
          "bpm"
      );
      setWarmUpZone(
        Math.trunc((220 - age) * 0.61) +
          "bpm - " +
          Math.trunc((220 - age) * 0.7) +
          "bpm"
      );
      setFatBurnZone(
        Math.trunc((220 - age) * 0.71) +
          "bpm - " +
          Math.trunc((220 - age) * 0.8) +
          "bpm"
      );
      setCardioZone(
        Math.trunc((220 - age) * 0.81) +
          "bpm - " +
          Math.trunc((220 - age) * 0.9) +
          "bpm"
      );
      setPeakZone(
        Math.trunc((220 - age) * 0.91) +
          "bpm - " +
          Math.trunc((220 - age) * 1) +
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
          <div className="maxHeartrate">
            <h2>Max Heart Rate</h2>
            <h3>{maxHeartRate}</h3>
          </div>
          <div>
            <h2>Heart Rate Zones</h2>
            <div>
              <label>Warmup</label>
              <p className="warmup zones" name="warmup">
                {staticZone}
              </p>
            </div>
            <div>
              <label>Fat Burn</label>
              <p className="fatBurn zones" name="fatburn">
                {warmupZone}
              </p>
            </div>
            <div>
              <label>Endurance Training</label>

              <p className="endurance zones" name="endurance">
                {fatBurnZone}
              </p>
            </div>
            <div>
              <label>Intense Training</label>

              <p className="intense zones" name="intense">
                {cardioZone}
              </p>
            </div>
            <div>
              <label>Maximum Effort</label>

              <p className="maximum zones" name="maximum">
                {peakZone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeartRate;
