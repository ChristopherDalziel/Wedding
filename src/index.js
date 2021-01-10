import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';

import configureStore from "./store/configureStore";
// import { login, logout } from "./actions/auth";
// import { firebase } from "./firebase/firebase";

const store = configureStore();

const state = store.getState();

console.log(state)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// const wrappedApplication = (
//   <Provider Provider store={store} >
//     <App />
//   </Provider >
// );

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(wrappedApplication, document.getElementById("root"));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<ApplicationLoading />, document.getElementById("root"));

// firebase.auth().onAuthStateChanged((user) => {
//   const savedUid = process.env.REACT_APP_FIREBASE_ADMIN_ID;
//   if (user && user.uid === savedUid) {
//     store.dispatch(login(user.uid));
//     store.dispatch(startSetProjects()).then(() => {
//       renderApp();
//       // if (history.location.pathname === "/login") {
//       //   console.log("User logged in!");
//       // }
//     });
//   } else {
//     store.dispatch(logout());
//     store.dispatch(startSetProjects()).then(() => {
//       renderApp();
//     });
//   }
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
