var firepad;

function start() {
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.
    var config = {
        apiKey: "AIzaSyDIY4dr9w-zKYHzJ2S8NGIDYK0JXKcTkFc",
        authDomain: "delegat-io.firebaseapp.com",
        databaseURL: "https://delegat-io.firebaseio.com",
    };
    firebase.initializeApp(config);
    //// Get Firebase Database reference.
    var firepadRef = getExampleRef();
    //// Create CodeMirror (with line numbers and the JavaScript mode).
    var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
        lineNumbers: true,
    });
    //// Create Firepad.
    firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
        defaultText: 'Let us begin collaborating here!',
        richTextToolbar: true,
        richTextShortcuts: true,
    });
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        });
    return vars;
}

// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
    var ref = firebase.database().ref();
    var hash = getUrlVars()["id"];
    if (hash) {
        ref = ref.child(hash);
    } else {
        // ref = ref.push(); // generate unique location.
        // window.location = window.location + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
    }
    return ref;
}

function downloadText() {
    var textToWrite = firepad.getText().replace(/\n/g, "\r\n");
    var textFileAsBlob = new Blob([textToWrite], {
        type: 'text/plain'
    });
    alert("Your download will begin now.");
    var fileNameToSaveAs = "downloadFile";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}