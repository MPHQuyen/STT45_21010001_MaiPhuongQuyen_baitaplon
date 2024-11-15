$(document).ready(function() {
 
    // func check email
    function checkEmail() { 
        let email = localStorage.getItem('email') 
        let emailInput = $('#emailLogin').val()
        console.log(email);
        if(emailInput == '')
        {
            $('#errEmailLogin').text('*Email không được rỗng!')
            return false
        }else if(String(emailInput) != 'phatcute583@gmail.com')
        {
            console.log(123);
            $('#errEmailLogin').text('*Email không chính xác!')
            return false
        }else
        {
            $('#errEmailLogin').text('')
            return true
        }
    }

    $('#emailLogin').blur(function() {
        checkEmail();
    })

    // func check pass
    // mk: bc12332!@_
    function checkPass() { 
        let password = localStorage.getItem('password')  
        let passwordInput = $('#passLogin').val()
        
        if(password == '')
        {
            $('#errPassLogin').text('*Mật khẩu không được rỗng!')
            return false
        }else if(passwordInput != password)
        {
            $('#errPassLogin').text('*Mật khẩu không chính xác!')
            console.log(password);
            return false
        }else
        {
            $('#errPassLogin').text('')
            return true
        }
    }

    // MK: bc12332!@_
    $('#passLogin').blur(function() {
        checkPass();
    })

    $('#btnLogin').click(function() {
        if(checkEmail() && checkPass())
            alert('Đăng nhập thành công. Mời bạn trải nghiệm dịch vụ của chúng tôi!')
        else
            alert('Thông tin đăng nhập không chính xác. Vui lòng nhập đúng thông tin!')
    })

})