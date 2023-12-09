import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAq1IRE3z679IXnG_oUExle-7p8GXBQA00",
	authDomain: "demostudio-9c144.firebaseapp.com",
	projectId: "demostudio-9c144",
	storageBucket: "demostudio-9c144.appspot.com",
	messagingSenderId: "383758264742",
	appId: "1:383758264742:web:6a7e1995c0d171f7a3c767",
	measurementId: "G-G61QVDXZET",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase };
