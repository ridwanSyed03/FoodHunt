import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./firebase"; 
import { doc, setDoc, getDoc } from "firebase/firestore";

// Register User with Username
export const registerUser = async (username, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save username in Firestore under users collection
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      uid: user.uid
    });

    console.log("User registered successfully:", user);
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

// Login User & Fetch Username
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch username from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("User logged in successfully:", userDoc.data());
    } else {
      console.log("No username found for this user");
    }
  } catch (error) {
    console.error("Error logging in user:", error.message);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out successfully");
  } catch (error) {
    console.error("Error logging out user:", error.message);
  }
};
