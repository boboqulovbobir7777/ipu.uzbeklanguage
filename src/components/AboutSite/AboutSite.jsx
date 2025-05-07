import Wrapper from "../Wrapper/Wrapper";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  onValue,
  set,
  runTransaction,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0ibKbeCD2MkHxwXRn_FBQpHN9G1E2Xb8",
  authDomain: "upi-sourse-viseters-counter.firebaseapp.com",
  databaseURL:
    "https://upi-sourse-viseters-counter-default-rtdb.firebaseio.com",
  projectId: "upi-sourse-viseters-counter",
  storageBucket: "upi-sourse-viseters-counter.firebasestorage.app",
  messagingSenderId: "179048962621",
  appId: "1:179048962621:web:45106f8d9346a72678a854",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default function AboutSite() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countRef = ref(database, "visitorCount/ipuuzbeklanguage");
    const pageKey = "visited_about";

    if (!sessionStorage.getItem(pageKey)) {
      runTransaction(countRef, (currentValue) => {
        return (currentValue || 0) + 1;
      })
        .then(() => {
          sessionStorage.setItem(pageKey, "true");
        })
        .catch((err) => {
          console.error("Visitor count update failed:", err);
        });
    }

    onValue(countRef, (snapshot) => {
      const value = snapshot.val();
      setCount(value);
    });
  }, []);

  return (
    <section className="mb-25">
      <Wrapper>
        <h3 className="text-3xl font-semibold text-center mb-10">
          Sayt haqida
        </h3>
        <ul className="flex justify-around">
          <li className="font-bold flex gap-2 flex-col items-center">
            <span className="text-4xl">{count}</span>
            <span className="first-letter:uppercase">
              Tashrif buyuruvchilar soni
            </span>
          </li>
        </ul>
      </Wrapper>
    </section>
  );
}
