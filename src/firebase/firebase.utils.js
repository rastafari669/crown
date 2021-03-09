import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
        apiKey: "AIzaSyD559vvgxPOACvTLRJYtT8cyVSB675Mfmo",
        authDomain: "crown-db-dba39.firebaseapp.com",
        databaseURL: "https://crown-db-dba39.firebaseio.com",
        projectId: "crown-db-dba39",
        storageBucket: "crown-db-dba39.appspot.com",
        messagingSenderId: "599261310786",
        appId: "1:599261310786:web:cb8a1b525d2f709763a2db",
        measurementId: "G-JKZD6F1P97"
       
}

export const createUserProfileDocument =  async (userAuth,additionalData) =>{
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

        
  //checking if the data exists if not will create new user     
       if (!snapShot.exists) {
             const {displayName,email} = userAuth;
             const createAt = new Date();
             
             try{
await userRef.set({
      displayName,
      email,
      createAt,
      ...additionalData

})
             }catch(error){
console.log('error creating user',error.message);
             }
       }
        return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;