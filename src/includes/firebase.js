import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore, collection} from "firebase/firestore"; // Add this line

const firebaseConfig = {
    apiKey: "AIzaSyCo_HEDejl9A6DNjy3vPmo-TcixvnOaK1s",
    authDomain: "alraghad-f1221.firebaseapp.com",
    projectId: "alraghad-f1221",
    storageBucket: "alraghad-f1221.appspot.com",
    messagingSenderId: "550498582818",
    appId: "1:550498582818:web:fa1313da96704fd933e57b",
    measurementId: "G-QLZT8GT52V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const offers = collection(db, "offers");
const jobs = collection(db, "jobs");
const partners = collection(db, "partners");
const clients = collection(db, "clients");
const team = collection(db, "team");
const projects = collection(db, "projects");
const hero = collection(db, "hero");

export {db, offers, jobs, partners, clients, team, projects, hero};