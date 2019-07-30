import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-notifications/lib/notifications.css";

// import { NotificationContainer } from "react-notifications";
import SavedList from "./component/SavedList";

function App() {
  return (
    <>

      <div className="container my-2">
        <SavedList />

      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
