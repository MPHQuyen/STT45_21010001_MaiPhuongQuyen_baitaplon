$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,  // Lặp lại khi đến cuối danh sách
        margin: 10, // Khoảng cách giữa các mục
        nav: false, //Hiển thị nút điều hướng
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        dotsEach: 3, // Hiển thị 3 nút dots sau mỗi lượt
        responsive: {
            0: {
                items: 1 //Đây là tùy chọn cho màn hình có chiều rộng từ 0px đến 599px. Nếu chiều rộng của màn hình nằm trong khoảng này (màn hình nhỏ), thì chỉ có 1 mục (item) được hiển thị trên màn hình cùng lúc.
            },
            600: {
                items: 3 //Đây là tùy chọn cho màn hình có chiều rộng từ 600px đến 999px. Nếu chiều rộng của màn hình nằm trong khoảng này (màn hình trung bình), thì sẽ có 3 mục (items) được hiển thị trên màn hình cùng lúc.
            },
            1000: {
                item: 5 //Khi kích thước màn hình đạt 1000px hoặc lớn hơn, thì sẽ hiển thị 5 mục trên mỗi lượt của carousel. Điều này áp dụng cho các màn hình có chiều rộng từ 1000px trở lên, thích hợp cho máy tính và màn hình lớn.
            }

        }
    })

    console.log(1);

    $('#abc').click(function() {
        // Lấy thông tin sản phẩm
        let imageUrl = $(this).closest('.product-item').find('.product-thumb img').attr('src');
        let productName = imageUrl.split('/').pop(); // Lấy tên hình ảnh sau dấu '/'
        let productPrice = $(this).closest('.product-item').find('.product-name2').text();

        // Tách giá từ chuỗi 
        let price = productPrice.split(' ')[0];

        // Chuyển đổi giá thành số (nếu cần)
        let priceValue = parseFloat(price);

        // Kiểm tra xem giá có hợp lệ không
        if (!isNaN(priceValue)) {
            // Kiểm tra xem localStorage có tồn tại hay không
            if (localStorage.getItem('cart') === null) {
                // Nếu chưa tồn tại, tạo một mảng rỗng
                let cart = [];
                // Thêm sản phẩm vào mảng
                cart.push({
                    name: productName,  
                    price: priceValue  
                });

                console.log(productName, priceValue);
                 
                localStorage.setItem('cart', JSON.stringify(cart));
            } 

            // else {
            //     // Nếu đã tồn tại, lấy ra và cập nhật
            //     let cart = JSON.parse(localStorage.getItem('cart'));
            //     cart.push({
            //         name: productName, 
            //         price: priceValue 
            //     });
            //     localStorage.setItem('cart', JSON.stringify(cart));
            // }

            alert('Sản phẩm đã được thêm vào giỏ hàng');
        } else {
            alert('Giá không hợp lệ');
        }
    });
});
