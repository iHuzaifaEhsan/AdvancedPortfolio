$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Web 3.0 Developer",
      "MERN Stack Developer",
      "React Native Developer",
      "WordPress Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Web 3.0 Developer",
      "Software Developer",
      "App Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
})

// SMTP Contact Form

// function Send() {


//   var name = document.getElementById("naam").value;
//   var mail = document.getElementById("emaal").value;
//   var sub = document.getElementById("sujbect").value;
//   var mess = document.getElementById("mosaj").value;

//   Email.send({

//     SecureToken: "a149c940-e13b-4da7-ae71-c59e84a9cc16",
//     To: 'iamhuzaifaehsan@gmail.com',
//     From: "iamhuzaifaehsan@gmail.com",
//     Name: name,
//     Mail: mail,
//     Subject: sub,
  //   Body: mess
  // }).then(
  //   message => {
  //     if (message == 'OK') {

  //       swal("Successfull", "Your Data Successfully Received", "success");
  //     }
  //     else {

  //       swal("Something Wrong", "Your Data is not Received", "error");
  //     }
  //   }
  // );



// }

  const nome = document.getElementById('naam');
  const mail = document.getElementById('emaal');
  const sub = document.getElementById('sujbect');
  const mess = document.getElementById('mosaj');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>First Name: </h1>${nome.value}
    <br>
    <h1>Email: </h1>${mail.value}
    <br>
    <h1>Subject: </h1>${sub.value}
    <br>
    <h1>Message: </h1>${mess.value}
    <br>
    `;

    Email.send({
        SecureToken : "a149c940-e13b-4da7-ae71-c59e84a9cc16", //add your token here
        To : 'iamhuzaifaehsan@gmail.com', 
        From : "iamhuzaifaehsan@gmail.com",
        Subject : sub,
        Body : ebody
    }).then(
      message => {
        if (message == 'OK') {
  
          swal("Successfull", "Your Data Successfully Received", "success");
        }
        else {
  
          swal("Something Wrong", "Your Data is not Received", "error");
        }
      }
    );
});