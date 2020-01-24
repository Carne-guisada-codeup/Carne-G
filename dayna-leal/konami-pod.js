$(document).ready(function() {
    "use strict";

    $('.customMessage').hide();
    let clickOnce = 0;
    $('.customButton').click(function(){
        clickOnce += 1;
        if(clickOnce % 2 !== 0){
            $('.customMessage').show();
        } else {
            $('.customMessage').hide();
        }
    });

    var userInput = "";
    var konami = "3838404037393739666513";


    function reset() {
        userInput = "";
    }

    let numberOfEvents = 0;
    $(document).keyup(function (event) {
        // console.log(event.which);
        userInput += (event.which);
        console.log(event.which);
        console.log(userInput);
        console.log(konami);
        if (userInput.includes(konami)) {
            numberOfEvents += 1;
            switch (numberOfEvents) {
                case 1:
                    $('.firstEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                               <img src="images/sonic.gif" class="card-img-top m-2" alt="Sonic Gif" style="height: 150px; width: 150px">
                                               <div class="card-body m-0 p-1">
                                               <h6 class="card-title">Sonic</h6>
                                               </div>`);
                    reset();
                    break;
                case 2:
                    $('.secondEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                                <img src="images/megaman.gif" class="card-img-top m-2" alt="Megaman Gif" style="height: 150px; width: 150px">
                                                <div class="card-body m-0 p-1">
                                                <h6 class="card-title">Megaman</h6>
                                                </div>`);
                    reset();
                    break;
                case 3:
                    $('.thirdEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                               <img src="images/mario-color.gif" class="card-img-top m-2" alt="Mario Gif" style="height: 150px; width: 150px">
                                               <div class="card-body m-0 p-1">
                                               <h6 class="card-title">Mario</h6>
                                               </div>`);
                    reset();
                    break;
                case 4:
                    $('.fourthEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                                <img src="images/mudkip.gif" class="card-img-top m-2" alt="Mudkip Gif" style="height: 150px; width: 150px">
                                                <div class="card-body m-0 p-1">
                                                <h6 class="card-title">Mudkip</h6>
                                                </div>`);
                    reset();
                    break;
                case 5:
                    $('.fifthEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                               <img src="images/naruto.gif" class="card-img-top m-2" alt="Naruto Gif" style="height: 150px; width: 150px">
                                               <div class="card-body m-0 p-1">
                                               <h6 class="card-title">Naruto</h6>
                                               </div>`);
                    reset();
                    break;
                case 6:
                    $('.sixthEvent').html(`<div class="align-self-end m-2"><i class="fas fa-lock-open"></i></div>
                                               <img src="images/samus.gif" class="card-img-top m-2" alt="Samus Gif" style="height: 150px; width: 150px">
                                               <div class="card-body m-0 p-1">
                                               <h6 class="card-title">Samus</h6>
                                               </div>`);
                    reset();
                    break;
                // case 4:
                //     $('.fourthEvent').html(``);
                //     reset();
                //     break;
                // case 4:
                //     $('.fourthEvent').html(``);
                //     reset();
                //     break;

            }}




    });


});
