$(document).ready(() => {
    let payload = {
        country:"",
        email:"",
        mobile:"",
    };
    $('#submit').bind('click',()=>{
        payload.country=$('#country').val();
        payload.email=$('#email').val();
        payload.mobile=$('#mobile').val();
        $.ajax({
            url:'http://ec2-52-15-82-159.us-east-2.compute.amazonaws.com/gigx/api/signup',
            type:'POST',
            data:payload
        }).then(result=>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        });
    })
});
