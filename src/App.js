
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes} from './routes'
import DefautComponent from './components/DefautComponent/DefautComponent';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';  // Nếu dùng Realtime Database
import 'firebase/storage'; 
import { getDatabase, ref,get, orderByChild, equalTo, set, push, serverTimestamp } from 'firebase/database';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv696e7pdlg3MMuPWkg6UQgotM77fdwho",
  authDomain: "dongsonevent-dns.firebaseapp.com",
  databaseURL: "https://dongsonevent-dns-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "dongsonevent-dns",
  storageBucket: "dongsonevent-dns.appspot.com",
  messagingSenderId: "876765697340",
  appId: "1:876765697340:web:8c8533e37862667c9dfa39",
  measurementId: "G-C5H87K01WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);

function App() {

  return (
    <Router>
       
      <Routes>
        {routes.map((routes) => {
          const Page = routes.element
          const Layout = routes.isShowHeader ? DefautComponent : Fragment
          return (
            <Route key={routes.path} path={routes.path} element={
            <Layout>
              <Page/>
            </Layout>
         }/>
          )
        })}
        
      </Routes>
    
     </Router>
  )
}
export { database, storage, ref, set,get, push, storageRef, orderByChild, equalTo, uploadBytes, getDownloadURL, serverTimestamp };

export default App;
