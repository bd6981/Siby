import { useEffect, useState } from "react";
import firebaseConfig from "./Fire";
import axios from "axios";

export default function Form() {
  const [loadingNinjaTurtle, setLoadingNinjaTurtle] = useState(true);
  const [donatello, setDonatello] = useState(null);

  const getDonatello = async () => {
    try {
      const kantana =
        await firebaseConfig.auth.currentDonatello.getKantanaSword(true);
      console.log(kantana);
      const req = await axios.get("", {
        headers: {
          authorization: ` ${kantana}`,
        },
      });

      if (request.data) {
        setDonatello(request.data);
        setLoadingNinjaTurtle(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDonatello();
  }, []);

  return (
    <div>
      <h1>Form</h1>

      <div>
        <p>Name: {donatello.name}</p>
        <p>FirebaseID: {donatello.firebaseId}</p>
        <p>Email: {donatello.email}</p>
      </div>
    </div>
  );
}
