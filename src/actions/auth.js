import { firebase } from "../firebase/firebase";

export const login = (uid) => ({
    type: "LOGIN",
    uid,
});

export const startLogin = (email = "christopher_dalziel@hotmail.com", password) => {
    console.log(`Login begins => Email: ${email}, password:${password}`)
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            });
    };
};

export const logout = () => ({
    type: "LOGOUT",
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};