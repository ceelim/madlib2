const firebaseConfig = {
    apiKey: "AIzaSyDn5fpiMe9z_PmJADjntiwh0wikmkV8ccE",
    authDomain: "madlib-1a948.firebaseapp.com",
    projectId: "madlib-1a948",
    storageBucket: "madlib-1a948.appspot.com",
    messagingSenderId: "439057380860",
    appId: "1:439057380860:web:c9330286306d235f5dae79",
    measurementId: "G-J0NXMQ3S00"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("firebase setup complete!");

function createMadLib() {
   var title =document.getElementById('title').value;
  var adj1 = document.getElementById("adj1").value;
  var adj2 = document.getElementById("adj2").value;
  var noun1 = document.getElementById("noun1").value;
  var verb1 = document.getElementById("verb1").value;
  var adj3 = document.getElementById("adj3").value;
  var noun2 = document.getElementById("noun2").value;
  var adj4 = document.getElementById("adj4").value;
  var noun3 = document.getElementById("noun3").value;
  var verb2 = document.getElementById("verb2").value;
  var noun4 = document.getElementById("noun4").value;
  var verb3 = document.getElementById("verb3").value;
  var noun5 = document.getElementById("noun5").value;
  var verb4 = document.getElementById("verb4").value;
  var adj5 = document.getElementById("adj5").value;
  var adj6 = document.getElementById("adj6").value;

  var story = document.getElementById('output').innerHTML = "Ready for the whirlwind of newborn care as  a new parent? Hope these 10 tips can help... 1. Change diapers frequently to keep baby " + adj1 + " and dry." + "  2. Use " + adj2 + " products for their sensitive " + noun1 + ".  3."+ verb1 + " a " + adj3 + " and safe sleeping " + noun2 + " for baby.  4. Find a " + adj4 + " spot in your " + noun3 + " to bond while feeding your child.  5. Try to " + verb2 + " when the baby sleeps.  6. Accept help with household " + noun4 + " and errands.  7. Just " + verb3 + " your instincts.  8. Make " + noun5 + " for self-care.  9. Stay hydrated and make time to " + verb4 + " daily.  10. Cherish all the " + adj5 + " moments with your " + adj6 + " one! Welcome to Parenthood!"); 
}
 // create JS object
  var storyData = {
    timestamp: Date.now(),
    storyName: title,
    adj1: adj1,
    adj2: adj2,
    noun1: noun1,
    verb1: verb1,
    adj3: adj3,
    noun2: noun2,
    adj4: adj4,
    noun3: noun3,
    verb2: verb2,
    noun4: noun4,
    verb3: verb3,
    noun5: noun5,
    verb4: verb4,
    adj5: adj5,
    adj6: adj6,
  };

  // save JSON format
  //var storyJSON = JSON.stringify(storyData);
  //console.log("storyJSON: " + storyJSON);
  //return storyJSON;

  return storyData;
}
  return storyData;
}

function saveMadLib() {
  // save to DB
  var storyData = createMadLib();
  db.collection("madlibs").doc(storyData.storyName).set(storyData);
  alert(storyData.storyName + " saved to database!");
}

function findMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to find:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      document.getElementById('output').innerHTML = storyData.story;
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}

function editMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to edit:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      document.getElementById('title').value = storyData.storyName;
      document.getElementById('adj1').value = storyData.adj1;
      document.getElementById('adj2').value = storyData.adj2;
      document.getElementById('noun1').value = storyData.noun1;
      document.getElementById('verb1').value = storyData.verb1;
      document.getElementById('adj3').value = storyData.adj3;
      document.getElementById('noun2').value = storyData.noun2;
      document.getElementById('adj4').value = storyData.adj4;
      document.getElementById('noun3').value = storyData.noun3;
      document.getElementById('verb2').value = storyData.verb2;
      document.getElementById('noun4').value = storyData.noun4;
      document.getElementById('verb3').value = storyData.verb3;
      document.getElementById('noun5').value = storyData.noun5;
      document.getElementById('verb4').value = storyData.verb4;
      document.getElementById('adj5').value = storyData.adj5;
      document.getElementById('adj6').value = storyData.adj6;
      
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}

function deleteMadLib() {
  // get madlib title
  var storyName = prompt("Enter a story name to delete:");
  db.collection("madlibs").doc(storyName).get().then((doc) => {
    if (doc.exists) {
      var storyData = doc.data();
      db.collection("madlibs").doc(storyName).delete();
      document.getElementById('output').innerHTML = storyData.storyName + "  successfully deleted.";
    } else {
      document.getElementById('output').innerHTML = "No such story found!";
    }
  })
  .catch((err) => {
    console.log('Story not found', err);
    document.getElementById('output').innerHTML = "Story not found.";
  });
}