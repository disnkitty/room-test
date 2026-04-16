import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "4567",
  authDomain: "...",
  projectId: "...",
};

const app = initializeApp(firebaseConfig);
import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);
export default app;