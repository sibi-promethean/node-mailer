const nodemailer=require('nodemailer')

let transportmail = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sibichakaravarthy17@gmail.com',
        pass:'dizawtkmpyphjkcd'
    }
})

let mailcontent = {
    from:"sibichakaravarthy17@gmail.com",
    to:"J.rajesh256@gmail.com",
    subject:'PlayBoy',
    text:'How is your ex'
}


transportmail.sendMail(mailcontent,function(err,val){

    if(err){
        console.log(err)
    }else{
        console.log(val.response,"sent Mail.!");
    }
})
 



