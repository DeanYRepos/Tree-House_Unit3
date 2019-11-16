const $other = $("#other-title");
const $dropOption = $("#title");

const $name = $("#name").focus(); //starts cursor in Name input upon loading

//Job Role

$other.hide(); //hides input field unless javascript is disabled

$dropOption.change(function (e) { //event handler showing/hiding input field when "Other" is selected in drop down options

    if ($("#title option").eq(5).is(':checked')) {

        $other.show();
    } else {

        $other.hide();
    }

})

// T-Shirt
let $color = $('#color'); 
let $colorText = $("<option>Please select a T-shirt theme</option>");
$colorText.attr('value','color-text');

$color.prepend($colorText);
$colorText.attr('selected','true');

 


