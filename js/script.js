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
$colorText.attr('selected', 'true'); //selecting option item to show first when page loads  

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

let $newDiv = $("<div></div>");
let $activityClass = $(".activities");
let $activityClass_Div = $(".activities").append($newDiv);
let ActivityCostTotal = 0;

$activityClass.change(function(){
    
    let $this = $(this);

    console.log(this);  

    


})
