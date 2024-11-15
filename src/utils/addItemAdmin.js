import { collection, addDoc } from "firebase/firestore";
import { db } from "../App";

export const addItemAdmin = async (e, value, collectionName) => {
    e.preventDefault();

    try {
      // Adding document to Firestore
      const docRef = await addDoc(collection(db, collectionName), {
        ...value
      });
      alert("Thêm tin tức thành công ");
       window.location.reload()
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to add document");
    }
  };