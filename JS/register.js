$(document).ready(function() {

    // func check name
    // Tên hợp lệ: Nguyen Thanh Phat hoặc (Phat)
    function checkName() {
        let name = $('#name').val()
        let nameValid = /^([A-Z][a-z]+\s)*[A-Z][a-z]+$/
        if(name == '')
        {
            $('#errName').text('*Họ tên không được rỗng!')
            return false
        }else if(!nameValid.test(name))
        {
            $('#errName').text('*Họ tên phải viết hoa chữ cái đầu!')
            return false
        }else
        {
            $('#errName').text('')
            return true
        }
    }

    $('#name').blur(function() {
        checkName();
    })

    // func check email
    function checkEmail() {
        let email = $('#email').val()
        let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        if(email == '')
        {
            $('#errEmail').text('*Email không được rỗng!')
            return false
        }else if(!emailValid.test(email))
        {
            $('#errEmail').text('*Email không hợp lệ!')
            return false
        }else
        {
            $('#errEmail').text('')
            return true
        }
    }

    $('#email').blur(function() {
        checkEmail();
    })

    // func check pass
    // Mật khẩu hợp lệ: bc12332!@_
    function checkPass() {
        let password = $('#password').val()
        let passwordValid = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
        if(password == '')
        {
            $('#errPass').text('*Mật khẩu không được rỗng!')
            return false
        }else if(!passwordValid.test(password))
        {
            $('#errPass').text('*Mật khẩu có ít nhất 8 ký tự, chứa chữ cái, chữ số và ký tự đặc biệt!')
            return false
        }else
        {
            $('#errPass').text('')
            return true
        }
    }

    $('#password').blur(function() {
        checkPass();
    })

    // func check pass confirm
    // Mật khẩu hợp lệ: bc12332!@_
    function checkPassConfirm() {
        let password = $('#password').val()
        let confirmPassword = $('#confirmPassword').val()
        
        if(confirmPassword == '')
        {
            $('#errPassConFirm').text('*Mật khẩu xác nhận không được rỗng!')
            return false
        }else if(confirmPassword != password)
        {
            $('#errPassConFirm').text('*Mật khẩu xác nhận phải trùng khớp với mật khẩu!')
            return false
        }else
        {
            $('#errPassConFirm').text('')
            return true
        }
    }

    $('#confirmPassword').blur(function() {
        checkPassConfirm();
    })

    // func check SDT
    // SDT hợp lệ: 09123456789
    function checkSDT() {
        let sdt = $('#phoneNumber').val()
        let sdtValid = /^(09|07|03)[0-9]{8}$/
        if(sdt == '')
        {
            $('#errSDT').text('*Số điện thoại không được rỗng!')
            return false
        }else if(!sdtValid.test(sdt))
        {
            $('#errSDT').text('*Số điện thoại phải có 10 ký tự và bắt đàu bằng (09, 07, 03 hoặc 08)!')
            return false
        }else
        {
            $('#errSDT').text('')
            return true
        }
    }

    $('#phoneNumber').blur(function() {
        checkSDT();
    })

    // func check address
    function checkAddress() {
        let address = $('#address').val()
        
        if(address == '')
        {
            $('#errAddress').text('*Địa chỉ không được rỗng!')
            return false
        }else
        {
            $('#errAddress').text('')
            return true
        }
    }

    $('#address').blur(function() {
        checkAddress();
    })

    $('#btnRegister').click(function() {
        if(checkAddress() && checkSDT() && checkPassConfirm() && checkPass() && checkEmail() && checkName())
        {
            let name = $('#name').val()
            let email = $('#email').val()
            let password = $('#password').val()
            let confirmPassword = $('#confirmPassword').val()
            let sdt = $('#phoneNumber').val()
            let address = $('#address').val()

            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            localStorage.setItem('confirmPassword', confirmPassword)
            localStorage.setItem('sdt', sdt)
            localStorage.setItem('address', address)
            alert('Tạo tại khoản thành công. Mời bạn trải nghiệm dịch vụ của chúng tôi!')
        }
        else
            alert('Thông tin không hợp lệ!')
    })

})