function displayFR() {
  var x = document.getElementById("func-list");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function displayNFR() {
  var x = document.getElementById("nonfunc-list");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}

function display_rate() {
  var hours = document.getElementById("input").value;
  document.getElementById("rate").innerText = (hours * 400) + " PKR";
}


function render_list(funcreq_prev, nonfuncreq_prev) {

  let funcreq, nonfuncreq;

  if (funcreq_prev != null && nonfuncreq_prev != null) {
    funcreq = funcreq_prev;
    nonfuncreq = nonfuncreq_prev;
  }

  if (funcreq_prev == null) {
    funcreq = [
          "User authentication using a login username and a password",
          "Error-reporting using precise and constructive error messages",
          "Process textual queries using natural language processing (NLP)",
          "Curate legal information based on search queries",
          "Answer queries accordingly with citations to the PPC (Pakistan Penal Code) and Constitution",
          "Store and organize legal files, including contracts, case files, notes, and emails",
          "Pull specific documents required for due diligence",
          "Knowledge-based database and configured to swiftly retrieve information",
          "The administrator should be able to to add, update and delete questions, answers and keywords",
          "Show an error message in case of a network issue",
          "Selection of preferred language for user-interface",
          "Periodic updates to the database",
          "A textbox on the GUI that can be filled for user input",
          "Heuristic retrieval of relevant facts and figures",
          "Store data needed to provide answers SQL database",
          "Display queries and responses from the current session the window",
          "Reply the user with the solution as a text message",
          "Show waiting time to the user during processing",
          "Determine keywords in the query entered by the user",
          "Auto-correct feature to improve comprehension in case of errors"
      ]
      shuffle(funcreq)
  }
  if (nonfuncreq_prev == null) {
    nonfuncreq = [
          "Safety of confidential documents and clients' history",
          "Connect to other systems like Microsoft Office to easily share files with others",
          "Document automation to help law firms create documents using intelligent templates",
          "Scan electronic information to obtain non-privileged information relevant to a case or claim",
          "Quickly scan and search large databases of regulations, statutes, practice areas, jurisdictions, and case laws",
          "Determining the viability of litigation by extensive analysis of precedent-setting cases",
          "Interact with a user using text or speech",
          "Simple and natural dialogue / speak the user's language",
          "Efficiency and ease of use",
          "Check-in/check-out privileges to maintain version control and security",
          "Ability of the system to protect itself against accidental or deliberate intrusion",
          "Description of the different user roles and their authorization levels",
          "Text-based communications making the use of natural language to process conversations",
          "Availability of components and integrity of information maintained and supplied to the system",
          "Adaptive system design (maintainability, enhanceability, portability)",
          "Detailed descriptions of system dialogs (error-handling)",
          "Easy-to-learn and good-looking user interface (satisfaction)",
          "Protection of user data against malware attacks or unauthorized access (security)",
          "Robust response to users' actions under a high workload (performance)",
          "In line with the context of the local market-to-be (localization)"

      ]

      shuffle(nonfuncreq)
  }

  const rootdivforFR = document.getElementById("root")
  const rootdivforNFR = document.getElementById("root1")

  rootdivforNFR.innerHTML = "<ul id='nfrlist'></ul>";
  rootdivforFR.innerHTML = "<ul id='frlist'></ul>";

  for (let i = 0; i < nonfuncreq.length; i++) {
      // rootdivforNFR.innerHTML += "<li>" + nfr[i] + "</li>"
      document.getElementById("nfrlist").innerHTML += "<li>" + "<a href='javascript://' id='nfrlink' onclick='char_alert(this)'>" + nonfuncreq[i] + "</a></li>";
  }

  for (let i = 0; i < funcreq.length; i++) {
      document.getElementById("frlist").innerHTML += "<li>" + "<a href='javascript://' id='frlink' onclick='char_alert(this)'>" + funcreq[i] + "</a></li>";

  }

  var ul = document.getElementById("nfrlist");
  var items = ul.getElementsByTagName("li");
  for (var i = 0; i < items.length; ++i) {
      if (items[i].checked = true) {
          items[i].style.color = "blue";
      };
  };

  var ul = document.getElementById("frlist");
  var items = ul.getElementsByTagName("li");
  var links = items.getElementsByTagName("a");
  for (var i = 0; i < items.length; ++i) {
      if (items[i].checked = true) {
          items[i].style.color = "red";
      };
  };

}

function shuffle(array) {

  let currentIndex = array.length, randomIndex;

  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    console.log(Math.random);

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

function sortList() {

  let nonfuncreq = [
    "Safety of confidential documents and clients' history",
    "Connect to other systems like Microsoft Office to easily share files with others",
    "Document automation to help law firms create documents using intelligent templates",
    "Scan electronic information to obtain non-privileged information relevant to a case or claim",
    "Quickly scan and search large databases of regulations, statutes, practice areas, jurisdictions, and case laws",
    "Determining the viability of litigation by extensive analysis of precedent-setting cases",
    "Interact with a user using text or speech",
    "Simple and natural dialogue / speak the user's language",
    "Efficiency and ease of use",
    "Check-in/check-out privileges to maintain version control and security",
    "Ability of the system to protect itself against accidental or deliberate intrusion",
    "Description of the different user roles and their authorization levels",
    "Text-based communications making the use of natural language to process conversations",
    "Availability of components and integrity of information maintained and supplied to the system",
    "Adaptive system design (maintainability, enhanceability, portability)",
    "Detailed descriptions of system dialogs (error-handling)",
    "Easy-to-learn and good-looking user interface (satisfaction)",
    "Protection of user data against malware attacks or unauthorized access (security)",
    "Robust response to users' actions under a high workload (performance)",
    "In line with the context of the local market-to-be (localization)"

  ]

  let funcreq = [
    "User authentication using a login username and a password",
    "Error-reporting using precise and constructive error messages",
    "Process textual queries using natural language processing (NLP)",
    "Curate legal information based on search queries",
    "Answer queries accordingly with citations to the PPC (Pakistan Penal Code) and Constitution",
    "Store and organize legal files, including contracts, case files, notes, and emails",
    "Pull specific documents required for due diligence",
    "Knowledge-based database and configured to swiftly retrieve information",
    "The administrator should be able to to add, update and delete questions, answers and keywords",
    "Show an error message in case of a network issue",
    "Selection of preferred language for user-interface",
    "Periodic updates to the database",
    "A textbox on the GUI that can be filled for user input",
    "Heuristic retrieval of relevant facts and figures",
    "Store data needed to provide answers SQL database",
    "Display queries and responses from the current session the window",
    "Reply the user with the solution as a text message",
    "Show waiting time to the user during processing",
    "Determine keywords in the query entered by the user",
    "Auto-correct feature to improve comprehension in case of errors"
  ]

  funcreq.sort();
  nonfuncreq.sort();

  render_list(funcreq, nonfuncreq)

}

function char_alert(element) {
  var count = element.innerText.length
  alert("Characters in this requirement are: " + count)
  alert.title = 'Character count'
}


function render() {
  alert("Page is loaded");
  }
 
  
 