import React, {useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export default function Alert() {
  const {alert, hide} = useContext(AlertContext);

  if(!alert) return null

  return (
    <div
      className={`alert alert-${alert.type || "secondary"} alert-dismissible`}
      role="alert"
    >
      {alert.text}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={hide}></button>
    </div>
  );
}

