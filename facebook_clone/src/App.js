import "./app.css";
import React from "react";
import { Header, Sidebar, Feed, Widgets } from "./components/index";
import Login from "./pages/Login/Login";

function App() {
  const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            {console.log(
              "ENV return: " + process.env.REACT_APP_FIREBASE_API_KEY
            )}

            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
