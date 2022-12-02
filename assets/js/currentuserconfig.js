    // Import the functions you need from the SDKs you need
    import {getDatabase, ref, get, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const db = getDatabase(app);
