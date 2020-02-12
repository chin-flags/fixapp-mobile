/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import firebase from 'firebase';
import '@firebase/firestore';
import firebaseConfig from '../config/fbConfig';

firebase.initializeApp(firebaseConfig);

export default firebase;
