
import React, { Fragment } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes} from './routes/indexRoute'
import DefautComponent from './components/DefautComponent/DefautComponent';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';  // Nếu dùng Realtime Database
import 'firebase/storage'; 
import { getDatabase, ref,get, orderByChild, equalTo, set, push, serverTimestamp } from 'firebase/database';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './config/firebaseConfig';
import PageTitleManager from './routes/PageTitleManager';


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const storage = getStorage(app);
const db = getFirestore(app);

function App() {

  return (
    <Router>
     <PageTitleManager/>
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
export { database, storage, db, ref, set,get, push, storageRef, orderByChild, equalTo, uploadBytes, getDownloadURL, serverTimestamp , getStorage};

export default App;
