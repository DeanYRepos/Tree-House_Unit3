//Global variables
let $other = $("#other-title");
let $dropOption = $("#title");
let $cornFlowerBlue = $('#color option[value="cornflowerblue"]');
let $darkSlateGrey = $('#color option[value="darkslategrey"]');
let $gold = $('#color option[value="gold"]');
let $tomato = $('#color option[value="tomato"]');
let $steelBlue = $('#color option[value="steelblue"]');
let $dimGrey = $('#color option[value="dimgrey"]');

const $name = $("#name").focus(); //starts cursor in Name input upon loading

//Job Role

$other.hide(); //hides input field unless javascript is disabled

$dropOption.change(function () { //event handler showing/hiding input field when "Other" is selected in drop down options

    if ($("#title option").eq(5).is(':checked')) {

        $other.show();
    } else {

        $other.hide();
    }

})

// T-Shirt
let $color = $('#color'); //list of color options
let $colorOp = $('#color option');
let $design = $('#design');
let $colorText = $("<option>Please select a T-shirt theme</option>"); //inserted option item to prompt user to select theme
$colorText.attr('value', 'color-text'); // seting value of attr

$color.prepend($colorText); //prepending to color option list
$colorText.attr('selected', true); //selecting option item to show first when page loads  

$design.change(function () { //event handler hides select theme option
    $('#design :first').prop('hidden', true);

})
$colorOp.prop('hidden', true); //hides all color options except first option

$design.change(function () { //event handler, listening for design selection, showing corresponding colors
    console.log(this);
    if ($(this).val() === 'js puns') { //conditional determning theme selected
        $cornFlowerBlue.prop('selected', true); //selects first available color for theme

        $cornFlowerBlue.show();
        $gold.show();
        $darkSlateGrey.show();
        $tomato.hide();
        $steelBlue.hide();
        $dimGrey.hide();



    } else if ($(this).val() === 'heart js') {

        $tomato.prop('selected', true);
        $tomato.show();
        $steelBlue.show();
        $dimGrey.show();
        $cornFlowerBlue.hide();
        $gold.hide();
        $darkSlateGrey.hide();

    }

})

//Activity Section

let $newDiv = $("<div>Total Cost: $</div>");
let $activityClass = $(".activities");
let $activityClass_Div = $(".activities").append($newDiv);
let activityCostTotal = 0;


$activityClass.change(function (e) {
    let $target = $(e.target);
    let $dateAndTime = $target.attr('data-day-and-time');
    let $dataCost = parseInt($target.attr('data-cost').slice(-3)); //parsing the input clicked to an integer

    console.log($target);
    console.log($dateAndTime);


    console.log($dataCost);

    if ($target.prop('checked')) {

        activityCostTotal += $dataCost;


    } else
        activityCostTotal -= $dataCost;







    $('.activities div').html('<div>Total Cost: $' + activityCostTotal + '</div>'); //concatinating total cost of activities to div string

    let $inputIterations = $('.activities input');
    for (let i = 0; i <= $inputIterations.length; i++) { //looping through activitiy inputs 
        let $name = $target.attr('name');

        console.log($inputIterations[i]);
        console.log($name);
        if ($target.prop('checked')) { //if target is checked 
            if ($dateAndTime === $($inputIterations[i]).attr('data-day-and-time') && $name != $($inputIterations[i]).attr('name')) { //checking whether dates/time and names match iterations



                $($inputIterations[i]).attr('disabled', true); //if attributes matched, matching items disabled 

            }
        } else {
            if ($dateAndTime === $($inputIterations[i]).attr('data-day-and-time') && $name != $($inputIterations[i]).attr('name')) {

                $($inputIterations[i]).removeAttr('disabled');

            }
        }
    }
})
let $payPal = $('#paypal');
let $bitCoin = $('#bitcoin');
let $creditCard = $('#credit-card');
let $payment = $('#payment');

$creditCard.attr('selected', true);

$payPal.hide();
$bitCoin.hide();




$payment.change(function () { //hiding and showing payment options based on selection



    if ($(this).val() === 'Credit Card') {

        $creditCard.show();
        $bitCoin.hide();
        $payPal.hide();


    } else if ($(this).val() === 'Bitcoin') {
        $bitCoin.show();
        $creditCard.hide();
        $payPal.hide();


    } else if ($(this).val() === 'PayPal') {
        $payPal.show();
        $creditCard.hide();
        $bitCoin.hide();





    }

})

const $nameInput = $('#name');
const $nameInputSpan = $('<span class="validate">Please enter a valid name</span>');

function name() {



    if ($nameInput.val().length === 0) {
        $nameInput.addClass('error');
        $nameInputSpan.show();

        return false;

    } else {
        $nameInput.removeClass('error');
        $nameInputSpan.hide();

        return true;

    }
}
console.log(name());
const $emailInput = $('#mail');
const $emailInputSpan = $('<span class="validate">Please enter a valid email address</span>');
const regex = /^[^@]+@[^@.]+\.[a-z]{3}$/i;

function email() {

    if (!(regex.test($($emailInput).val()))) {

        $emailInput.addClass('error');
        $emailInputSpan.show();
        return false;
    } else {
        $emailInput.removeClass('error');
        $emailInputSpan.hide();
        return true;


    }
}
console.log(email());
const $activitySpan = $('<span class="validate">Please choose at least one activity</span>');

function activity() {

    if (activityCostTotal === 0) {

        $activityClass.css('color', 'red');
        $activitySpan.show();


        return false;

    } else {
        $activityClass('color', 'black');
        $activitySpan.hide();
        return true;
    }

}

const ccRegex = /^[\d]{4}[\d]{4}[\d]{4}[\d]{1,4}$/;
const $ccSpan = $('<span class="validate">Please enter a valid credit card number</span>');
const $creditCardInput = $('#cc-num');

function creditCardNum() {

    if (!(ccRegex.test($('#cc-num').val()))) {

        $creditCardInput.addClass('error');
        $ccSpan.show();

        return false;

    } else {

        $creditCardInput.removeClass('error');
        $ccSpan.hide();

        return true;


    }

}
const zipRegex = /^[/d]{5}$/;
const $zipSpan = $('<span class="validate">PLease enter valid zipcode</span>');
const $zipcodeInput = $('#zip');

function zipcode() {

    if (!(zipRegex.test($('#zip').val()))) {

        $zipcodeInput.addClass('error');
        $zipSpan.show();

        return false;

    } else {

        $zipcodeInput.removeClass('error');
        $zipSpan.hide();

        return true;
    }


}

const cvvRegex = /^[/d]{3}$/;
const $cvvSpan = $('<span class= "validate">Please enter valid cvv number</span>');
const $cvvInput = $('#cvv');

function cvv() {

    if (!(cvvRegex.test($('#cvv').val()))) {

        $cvvInput.addClass('error');
        $cvvSpan.show();
        return false;


    } else {

        $cvvInput.removeClass('error');
        $cvvSpan.hides();

        return true;

    }


}

function creditCardVal() {

    $('#cc-num').keyup(function () {

        creditCardNum();
        $ccSpan.show();


    })
    $('#zip').keyup(function () {

        zipcode();



    })
    $('#cvv').keyup(function () {

        cvv();

    })
}
creditCardVal();
console.log(creditCardVal());


$('form').submit(function(e){

if(name() === true){
e.preventDefault();


}

    if(email() === true){
        e.preventDefault();
        
        
        }
        if(activity() === true){
            e.preventDefault();
            
            
            }
            if($('#payment').val() === 'credit card'){
                if(creditCardNum() === true){
               
                    e.preventDefault();
            }
                
                
                if(zipcode() === true){
                    e.preventDefault();
                    
                    
                    }
                    if(cvv() === true){
                        e.preventDefault();
                        
                        
                        }
                    }
})