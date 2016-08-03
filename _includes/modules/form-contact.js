/* Contact Form */

function getLocation(n){function a(a){t[a]||n(a),t[a]=!0}var e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,c=new e({iceServers:[]}),i=function(){},t={},d=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;c.createDataChannel(""),c.createOffer(function(n){n.sdp.split("\n").forEach(function(n){n.indexOf("candidate")<0||n.match(d).forEach(a)}),c.setLocalDescription(n,i,i)},i),c.onicecandidate=function(n){n&&n.candidate&&n.candidate.candidate&&n.candidate.candidate.match(d)&&n.candidate.candidate.match(d).forEach(a)}}

function insertLocation(ip) {
    var contactLocation = document.getElementById("contact-location");
    contactLocation.value = "http://www.infosniper.net/?ip_address=" + ip;
}

getLocation(insertLocation);

var passName = function(subjectName){
    if (this.subjectName == '') return;
    var contactSubject = document.getElementById("contact-subject");
    contactSubject.value = "DK Form - " + subjectName;
};


[].forEach.call(
  document.querySelectorAll(".contact-field"), 
    function(e){

        e.addEventListener('input', function(){
            if (this.value) {
                this.parentNode.classList.add('filled');
            } else {
                this.parentNode.classList.remove('filled');
            }
        });

    }
);