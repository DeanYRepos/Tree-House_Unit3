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
            if ($dateAndTime === $($inputIterations[i]).attr('data-day-and-time') && $name != $($inputIterations[i]).attr('name')) {//checking whether dates/time and names match iterations



                $($inputIterations[i]).attr('disabled', true); //if attributes matched, matching items disabled 

            }
        } else {
            if ($dateAndTime === $($inputIterations[i]).attr('data-day-and-time') && $name != $($inputIterations[i]).attr('name')) {

                $($inputIterations[i]).removeAttr('disabled');

            }
        }
    }
})
let $payPal = $('#payment option[value="PayPal"]');
let $bitCoin = $('#payment option[value="Bitcoin"]');
let $creditCard = $('#payment option[value="Credit Card"]');
let $selectPayment = $('#payment option [value="select method"]');
let $payment = $('#payment option');

$creditCard.prop('selected',true);

$selectPayment.prop('hidden',true);

$payment.change(function (){



if($(this).val() === 'Credit Card'){
   
    $creditCard.show();
    $bitCoin.hide();
    $payment.hide();


} if ($(this).val() === 'Bitcoin'){
    $bitCoin.show();
    $creditCard.hide();
    $payment.hide();


}  else ($(this).val() === 'PayPal')
    $payPal.show();
    $creditCard.hide();
    $bitCoin.hide();
    






})

