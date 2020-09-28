// AUTOTYPING DESIGNATION
function type(){
    // custom options
    var options = {
      selector: "#designation", // target element selector
      words: ["An aspiring django full stack web developer"], // words/sentences that will be auto typed
      charSpeed: 85, // letter typing animation speed
      delay: 1500, // word/sentence typing animation delay
      loop: true, // if loop is activated, autoTyper will start over
      flipflop: false // if flipflop is activated, letters which are typed animated will be removed ony by one animated
    };

    var typer = new autoTyper(options);

      typer.start();
    }

//DISPLAYING CERTIFICATE

function display_certificate(idd){
    var certificate = document.getElementById('certificate');
    if(idd == 'sih'){
        certificate.setAttribute('src', 'images/sih-certify.jpg');
    }
    else if(idd == 'frontend'){
      certificate.setAttribute('src', 'images/frontend-certify.png');
    }
    else if(idd == 'backend'){
      certificate.setAttribute('src', 'images/backend-certify.png');
    }
    else if(idd == 'simba-intern'){
      certificate.setAttribute('src', 'images/simba-certify.jpg');
    }
}


var modal = document.getElementById("myModal");
var certificate = document.getElementById("certificate");
var modalImg = document.getElementById("img01");

certificate.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-symbol");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}