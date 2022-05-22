function sendEmail(){
    Email.send({
        Host: "pop.gmail.com",
        Username: "saahilali10l@gmail.com",
        Password: "BBRO735@GMAIL.COM",
        To: 'saahilaliofficial@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New query from Customer",
        Body: "Name : " + document.getElementById("name").value 
        + "<br> Email:" + document.getElementById("email").value 
        + "<br> Mobile Number :" + document.getElementById("mobile").value 
        + "<br> Message from customer :" + document.getElementById("query").value
    }).then(
        message => alert("Your query has been submitted successfully, We will contact you soon")
    );
}
