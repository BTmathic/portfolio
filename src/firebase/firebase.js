import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref('Posts').push({
//   title: 'Hello World! An Introduction',
//   body: "Hello! This first post is aimed to (briefly) introduce myself and my goals here. I have always enjoyed learning and problem solving. Before the year 2000, when I was still in high school I started writing some HTML and just having fun seeing what could be done. I continued through university all the way beyond a PhD, refining my HTML and CSS as needed, while picking up Java, C, Matlab and Python along the way. Afterwards I started looking into Javascript more involved web development, sooner after picking up some jQuery and React/Redux, and here we are. I don't exactly have a particular aim with this blog, just writing about things I find interesting -- both while learning the basics and as I come across new things in the future --things I found difficult, or things I feel are important.I enjoy teaching as much as learning, so my goal is roughly to help others learn about web and software development.Outside of the coding world I have an adorable greyhound, am an avid(amateur!) triathlete and enjoy reading about nutrition and its connections to general health, not just sporting performance.",
//   createdAt: '0'
// });

// database.ref('Posts')
//   .once('value')
//   .then((snapshot) => {
//     const posts = [];
//     snapshot.forEach((childSnapshot) => {
//       posts.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(posts);
//   }
// );

export { firebase, googleAuthProvider, database as default };