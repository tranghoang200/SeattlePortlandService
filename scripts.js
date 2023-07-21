const firebaseConfig = {
  apiKey: "AIzaSyAs3Cf3jy8uX4-MyjPcEcwUOtyHyB2Cazo",
  authDomain: "seattleportlandservice.firebaseapp.com",
  projectId: "seattleportlandservice",
  storageBucket: "seattleportlandservice.appspot.com",
  messagingSenderId: "824411472115",
  appId: "1:824411472115:web:09b214fcc80376e1aa3786",
  measurementId: "G-03B73JKVMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function subscribeToFirebase() {
  const emailInput = document.getElementById("email-input").value;

  // Check if the email input is not empty
  if (emailInput !== "") {
    // Add the email to the Firebase Firestore collection (e.g., "subscribers")
    db.collection("subscribers").add({
      email: emailInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      // Success message or any additional actions you want to perform
      alert("Thank you for subscribing!");
      document.getElementById("emailInput").value = ""; // Clear the input field
    })
    .catch((error) => {
      // Error handling
      console.error("Error adding document: ", error);
    });
  } else {
    // Handle the case when the email input is empty
    alert("Please enter your email.");
  }
}

window.subscribeToFirebase = subscribeToFirebase;