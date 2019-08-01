<!doctype html>
<html lang="en">
<head>
<title>Hello, world!</title>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<!--     Fonts and icons     -->
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
<!-- Material Kit CSS -->
    <link href="assets/css/material-kit.css?v=2.0.5" rel="stylesheet" />
            < !--Core JS Files-- >
<script src="assets/js/core/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/core/popper.min.js" type="text/javascript"></script>
<script src="assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
<script src="assets/js/plugins/moment.min.js"></script>
<!--    Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker -->
<script src="assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
<!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
<script src="assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
<!--  Google Maps Plugin  -->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
<!-- Control Center for Material Kit: parallax effects, scripts for the example pages etc -->
<script src="assets/js/material-kit.js?v=2.0.5" type="text/javascript"></script>
</head>

<body>
<nav class="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"  color-on-scroll="100">
<div class="container">
<div class="navbar-translate">
<a class="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">Material Kit </a>


            <div class="page-header header-filter" data-parallax="true" style="background-image: url('assets/img/bg3.jpg')">
<div class="container">
<div class="row">
<div class="col-md-8 ml-auto mr-auto">
<div class="brand text-center">
<h1>Your title here</h1>
<h3 class="title text-center">Subtitle</h3>
</div>
</div>
</div>
</div>
</div>
</body>




const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./data.json");
const collectionKey = "users"; //name of the collection
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://team5-c5e77.firebaseio.com"
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
firestore.collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {
console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
console.error("Error writing document: ", error);
});
});
}

</html>