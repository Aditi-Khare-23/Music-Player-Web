import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
//   appId: process.env.REACT_APP_FIREBASE_APPI_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDkGHeI3mrfbL7Hu2vsUy0ze-y58h34V4A",
  authDomain: "project-musicweb-66468.firebaseapp.com",
  projectId: "project-musicweb-66468",
  storageBucket: "project-musicweb-66468.appspot.com",
  messagingSenderId: "475246484775",
  appId: "1:475246484775:web:74346720e29fc3b3aa1d02",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
