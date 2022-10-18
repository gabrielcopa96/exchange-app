import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD475ygwykjt0CsMKkVbIuKjQu76oiN_FY",
    authDomain: "exchange-65681.firebaseapp.com",
    projectId: "exchange-65681",
    storageBucket: "exchange-65681.appspot.com",
    messagingSenderId: "1060596754262",
    appId: "1:1060596754262:web:98ca8806699029628298f7"
};

const app = initializeApp(firebaseConfig)


const provider = new GoogleAuthProvider()
const auth = getAuth();

export const signInGoogle = () => {

    return signInWithPopup(auth, provider)
        .then((result) => {
            return result.user
        }).catch((error) => {
            console.error(error)
        })
}