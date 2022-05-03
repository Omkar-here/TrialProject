  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBAHLrxeKq7M_To9ZJowMjM-4llV_3eLL0",
    authDomain: "findyourcollege-4fdcf.firebaseapp.com",
    projectId: "findyourcollege-4fdcf",
    storageBucket: "findyourcollege-4fdcf.appspot.com",
    messagingSenderId: "467596314871",
    appId: "1:467596314871:web:45640a4aad548177e1ebf2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth=firebase.auth();


function signUp(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    
    const promise=auth.CreateUserWithUsernameAndPassword(username.value, password.value)
    promise.catch(e => alert(e.message));
    
    alert("Signed In");
}