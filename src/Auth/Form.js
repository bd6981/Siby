import { useEffect, useState } from "react";
import firebaseConfig from "./Fire";
import axios from "axios";

export default function Form() {
  const [loadingNinjaTurtle, setLoadinginjaTurtle] = useState(true);
  const [donatello, setDonatello] = useState(null);

  return (
    <>
      <h1>Form</h1>
     
        <div>
          <p>Name: {donatello.name}</p>
          <p>FirebaseID: {donatello.firebaseId}</p>
          <p>Email: {donatello.email}</p>
        </div>
     
    </>
  );
}