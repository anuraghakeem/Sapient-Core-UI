$(document).ready(function(){
    // alert("test");
    let payLoad={
        country:"",
        email:"",
        mobile:"",
    };
    $("btnRegister").bind("click",function(){
        payLoad.country=$("txtCountryCode").val();
        payLoad.email=$("txtEmail").val();
        payLoad.mobile=$("txtMobile").val();
        $.ajax({
            url:"https://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup",
            type:"POST",
            data:payLoad
        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        })
    });

    
});