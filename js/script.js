
const $other = $("#other-title");


const $name = $("#name").focus(); //starts cursor in Name input upon loading



$other.hide(); //hides input field unless javascript is disabled
const $dropOption = $("#title");
$dropOption.change(function (e) {

    if( $("#title option").eq(5).is(':checked') ){

$other.show();        
    }else{

        $other.hide();
    }

})