const products = [
  //Sale product 1
  {
    // sp1
    name: "Balo Daily Phụ Kiện Khởi Nguyên 9",
    id: "#0022448",
    desc: "là chiếc balo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 457000,
    img: "../IMGAGE/sale_balo_2.jpg",
    form: "Vertical",
    design: "Sọc trắng 2 bên",
    style: "Balo Daily",
    group: "sale-product",
    material: "Polyester",
    gender: "Nam",
    details: [
      "Chất liệu vải polyester chống thấm nước, chống bám bụi, bền bỉ, dễ dàng vệ sinh.",
      "Thiết kế đơn giản, hiện đại, phù hợp với nhiều phong cách khác nhau.",
      "Form dáng rộng rãi, thoải mái, chứa được nhiều đồ dùng.",
      "Balo có nhiều ngăn tiện dụng, giúp phân chia đồ dùng gọn gàng.",
      "Balo là một phụ kiện thời trang tiện dụng, không thể thiếu trong cuộc sống hàng ngày.",
    ],
  },
  {
    // sp2
    name: "Túi Đeo Daily Phụ Kiện Khởi Nguyên 3",
    id: "#0022449",
    desc: "là chiếc túi được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 244000,
    img: "../IMGAGE/sale_tui_2.jpg",
    form: "Nhỏ",
    design: "Daily",
    style: "Túi đeo chéo",
    group: "sale-product",
    material: "Polyester",
    gender: "Nam",
    details: [
      "Chất liệu vải polyester cao cấp, chống thấm nước, chống bám bụi, bền bỉ, dễ dàng vệ sinh.",
      "Thiết kế đơn giản, hiện đại, phù hợp với nhiều phong cách khác nhau.",
      "Form dáng nhỏ gọn, tiện lợi, dễ dàng mang theo.",
      "Túi có nhiều ngăn tiện dụng, giúp phân chia đồ dùng gọn gàng",
      "Túi là một phụ kiện thời trang cá tính, không thể thiếu trong cuộc sống hàng ngày.",
    ],
  },
  {
    // sp3
    name: "Túi Đeo Vintage Miền Gió Cát 10",
    id: "#0022450",
    desc: "là chiếc túi được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 377000,
    img: "../IMGAGE/tui-mien-gio-cat.jpg",
    form: "Vừa",
    design: "Miền gió cát",
    style: "Túi đeo",
    group: "sale-product",
    material: "Canvas",
    gender: "Nam",
    details: [
      "Chất liệu vải canvas bền bỉ, chống thấm nước, chống bám bụi, dễ dàng vệ sinh.",
      "Thiết kế đơn giản, trẻ trung, năng động, phù hợp với nhiều phong cách khác nhau.",
      "Form dáng nhỏ gọn, tiện lợi, dễ dàng mang theo.",
      "Túi có nhiều ngăn tiện dụng, giúp phân chia đồ dùng gọn gàng",
      "Túi là một phụ kiện thời trang cá tính, không thể thiếu trong cuộc sống hàng ngày.",
    ],
  },
  {
    // sp4
    name: "Balo Modern Thiết Kế SPEED 52",
    id: "#0022451",
    desc: "là chiếc balo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/balo-bts.jpg",
    form: "Rộng",
    design: "BTS",
    style: "Balo",
    group: "sale-product",
    material: "Polyester",
    gender: "Nam",
    details: [
      "Chất liệu vải polyester cao cấp, chống thấm nước, chống bám bụi, bền bỉ, dễ dàng vệ sinh.",
      "Thiết kế phong cách thể thao năng động, trẻ trung, cá tính, phù hợp với nhiều phong cách khác nhau.",
      "Form dáng rộng rãi, thoải mái, chứa được nhiều đồ dùng, phù hợp cho cả đi học, đi làm, đi chơi.",
      "Ngăn chính rộng rãi, ngăn laptop chống sốc, ngăn phụ tiện dụng, giúp phân chia đồ dùng gọn gàng.",
      "Logo racing nổi bật, mang đậm tinh thần thể thao.",
    ],
  },
  {
    // sp5
    name: "Balo Daily Phụ Kiện Nguyên Bản Ver11",
    id: "#0022452",
    desc: "là chiếc balo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 327000,
    img: "../IMGAGE/balo-stt4.jpg",
    form: "Rộng",
    design: "Daily",
    style: "Balo",
    group: "sale-product",
    material: "Polyester",
    gender: "Nam",
    details: [
      "Chất liệu Vải polyester cao cấp, chống thấm nước, chống bám bụi, bền bỉ, dễ dàng vệ sinh.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng rộng rãi, thoải mái, chứa được nhiều đồ dùng, phù hợp cho cả đi học, đi làm, đi chơi.",
      "Ngăn chính rộng rãi, ngăn laptop chống sốc, ngăn phụ tiện dụng, giúp phân chia đồ dùng gọn gàng.",
      "Điểm nhấn logo adidas nổi bật, mang đậm tinh thần thể thao.",
    ],
  },
  {
    // sp6
    name: "Balo Modern Phụ Kiện Khởi Nguyên 2",
    id: "#0022453",
    desc: "là chiếc balo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 497000,
    img: "../IMGAGE/xem_them_1_balo_7.jpg",
    form: "Rộng",
    design: "Modern",
    style: "Balo",
    group: "sale-product",
    material: "Polyester",
    gender: "Nam",
    details: [
      "Chất liệu Vải polyester cao cấp, chống thấm nước, chống bám bụi, bền bỉ, dễ dàng vệ sinh.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng rộng rãi, thoải mái, chứa được nhiều đồ dùng, phù hợp cho cả đi học, đi làm, đi chơi.",
      "Ngăn chính rộng rãi, ngăn laptop chống sốc, ngăn phụ tiện dụng, giúp phân chia đồ dùng gọn gàng.",
      "Điểm nhấn logo adidas nổi bật, mang đậm tinh thần thể thao.",
    ],
  },
  //----------------------------------------------------------------------------------------------------------------------------
  //Sale product 2
  {
    // sp1
    name: "Áo Khoác Có Nón Thiết Kế JHS 31",
    id: "#0022454",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 897000,
    img: "../IMGAGE/sale-product-22.jpg",
    form: "Rộng",
    design: "Qủy thần",
    style: "Áo khoác ",
    group: "sale-product2",
    material: "Cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton, thoáng mát, thấm hút mồ hôi tốt.",
      "Áo có thiết kế đơn giản, trẻ trung, năng động ",
      "Form dáng rộng rãi, thoải mái. Phần mũ trùm đầu có thể kéo lên che nắng, che gió, giữ ấm cho đầu và cổ.",
      "Điểm nhấn in biểu tượng Quỷ thần Nhật Bản nổi bật ở mặt trước, mang lại vẻ cá tính, mạnh mẽ cho người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging, phù hợp với nhiều hoàn cảnh khác nhau.",
    ],
  },
  {
    // sp2
    name: "Áo Khoác Không Nón SPEED 41",
    id: "#0022454",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 797000,
    img: "../IMGAGE/sale-2323.jpg",
    form: "Dáng Rộng",
    design: "BTS",
    style: "Áo khoác ",
    group: "sale-product2",
    material: "Vải dù",
    gender: "Nam",
    details: [
        "Chất liệu vải dù cao cấp, mềm mại, thoáng mát, chống thấm nước, chống nắng.",
        "Form dáng rộng rãi, thoải mái, phù hợp với nhiều hoàn cảnh.",
        "Thiết kế phối màu trẻ trung, cá tính, mang đậm phong cách đường phố.",
        "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
        "Là món đồ thời trang không thể thiếu trong tủ đồ của mọi chàng trai, cô gái yêu thích phong cách đường phố.",
    ],
  },
  {
    // sp3
    name: "Áo Khoác Thiết Kế SPEED 37",
    id: "#0022456",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 662000,
    img: "../IMGAGE/sale-2324.jpg",
    form: " Vừa",
    design: "BTS",
    style: "Áo khoác",
    group: "sale-product2",
    material: "Denim",
    gender: "Nam",
    details: [
      "Chất liệu vải denim cao cấp, bền chắc, thoáng mát, chống nắng.",
      "Form dáng rộng rãi, thoải mái, phù hợp với nhiều hoàn cảnh.",
      "Thiết kế phối màu trẻ trung, cá tính, mang đậm phong cách đường phố.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
      "Là món đồ thời trang không thể thiếu trong tủ đồ của mọi chàng trai, cô gái yêu thích phong cách đường phố.",
    ],
  },
  {
    // sp4
    name: "Áo Khoác Không Nón Vải Denim  Phối Màu Dáng Rộng BST Thiết Kế The Day's Eye 34",
    id: "#0022457",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 597000,
    img: "../IMGAGE/sale-2326.jpg",
    form: "Vừa",
    design: "BTS",
    style: "Áo khoác",
    group: "sale-product2",
    material: "Denim",
    gender: "Nam",
    details: [
      "Chất liệu vải denim cao cấp, dày dặn, bền chắc, chống nhăn, chống xước.",
      "Form dáng rộng rãi, thoải mái, tôn dáng, phù hợp với mọi vóc dáng.",
      "Thiết kế phối màu trẻ trung, năng động, mang đậm phong cách Hàn Quốc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
      "Là món đồ thời trang không thể thiếu trong tủ đồ của mọi cô gái yêu thích phong cách Hàn Quốc.",
    ],
  },
  {
    // sp5
    name: "Áo Khoác Không Nón No Style 71",
    id: "#0022458",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 263000,
    img: "../IMGAGE/sale-2325.jpg",
    form: "Vừa",
    design: "BTS",
    style: "Áo khoác",
    group: "sale-product2",
    material: "Denim",
    gender: "Nam",
    details: [
        "Chất liệu vải denim cao cấp, dày dặn, bền chắc, chống nhăn, chống xước.",
        "Form dáng rộng rãi, thoải mái, tôn dáng, phù hợp với mọi vóc dáng.",
        "Thiết kế phối màu trẻ trung, năng động, mang đậm phong cách Hàn Quốc.",
        "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
        "Là món đồ thời trang không thể thiếu trong tủ đồ của mọi cô gái yêu thích phong cách Hàn Quốc.",
    ],
  },
  {
    // sp6
    name: "Áo Khoác Không Nón No Style 71",
    id: "#0022459",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 457000,
    img: "../IMGAGE/sale-2327.jpg",
    form: "Vừa",
    design: "BTS",
    style: "Áo khoác",
    group: "sale-product2",
    material: "Denim",
    gender: "Nam",
    details: [
        "Chất liệu vải denim cao cấp, dày dặn, bền chắc, chống nhăn, chống xước.",
        "Form dáng rộng rãi, thoải mái, tôn dáng, phù hợp với mọi vóc dáng.",
        "Thiết kế phối màu trẻ trung, năng động, mang đậm phong cách Hàn Quốc.",
        "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
        "Là món đồ thời trang không thể thiếu trong tủ đồ của mọi cô gái yêu thích phong cách Hàn Quốc.",
    ],
  },
  // BEST T SHIRT----------------------------------------------------------------------
  {
    // sp1
    name: "Áo Polo Đơn Giản PREMIUM 04",
    id: "#0022460",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 263000,
    img: "../IMGAGE/best-t-shirt-black.jpg",
    form: "Regular fit",
    design: "Sọc trắng",
    style: "Áo polo",
    group: "t-shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng Regular fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp2
    name: "Áo Polo Thiết Kế SPEED 39",
    id: "#0022461",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 327000,
    img: "../IMGAGE/best-t-shirt-gray.jpg",
    form: "Regular fit",
    design: "Sọc trắng",
    style: "Áo polo",
    group: "t-shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng regular fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp3
    name: "Áo Polo The Day's Eye 36",
    id: "#0022462",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 327000,
    img: "../IMGAGE/best-t-shirt-green-while.jpg",
    form: "Regular fit",
    design: "Sọc xanh",
    style: "Áo polo",
    group: "t-shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng regular fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp4
    name: "Áo Polo Originals Ver94",
    id: "#0022463",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 257000,
    img: "../IMGAGE/best-t-shirt-green.jpg",
    form: "Regular fit",
    design: "Sọc trắng",
    style: "Áo polo",
    group: "t-shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng regular fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  //----------------------------------------------------------------------------------------------------------------------------------------------------
  // BEST SHIRT
  {
    // sp1
    name: "Áo Sơ Mi WRINKLE FREE 03",
    id: "#0022464",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 237000,
    img: "../IMGAGE/best-shirt-while.jpg",
    form: "slim fit",
    design: "Trơn",
    style: "Áo sơ mi",
    group: "shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng slim fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp2
    name: "Áo Sơ Mi WRINKLE FREE 03",
    id: "#0022465",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 237000,
    img: "../IMGAGE/best-shirt-black.jpg",
    form: "slim fit",
    design: "Trơn",
    style: "Áo sơ mi",
    group: "shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng slim fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp3
    name: "Áo Sơ Mi WRINKLE FREE 03",
    id: "#0022466",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 237000,
    img: "../IMGAGE/best-shirt-blue.jpg",
    form: "slim fit",
    design: "Trơn",
    style: "Áo sơ mi",
    group: "shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng slim fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },
  {
    // sp4
    name: "Áo Sơ Mi WRINKLE FREE 03",
    id: "#0022467",
    desc: "là chiếc áo được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 237000,
    img: "../IMGAGE/best-shirt-brown.jpg",
    form: "slim fit",
    design: "Trơn",
    style: "Áo sơ mi",
    group: "shirt",
    material: "cotton",
    gender: "Nam",
    details: [
      "Chất liệu vải cotton 100%, mềm mại, thấm hút mồ hôi tốt, mang lại cảm giác thoải mái khi mặc.",
      "Thiết kế lịch sự, sang trọng, phù hợp với nhiều hoàn cảnh khác nhau",
      "Form dáng slim fit, vừa vặn với cơ thể, tôn lên vóc dáng người mặc.",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần âu, quần jean đến váy, quần short.",
      "Áo là một item thời trang không thể thiếu trong tủ đồ của mọi chàng trai",
    ],
  },

  //---------------------------------------------------------------------------------------------------------
  // BEST JACKET
  {
    // sp1
    name: "Áo Khoác Đơn Giản PREMIUM 22",
    id: "#0022468",
    desc: "là chiếc áo khoác được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/best-jacket-black.jpg",
    form: "oversize",
    design: "Trơn",
    style: "Áo hoodie",
    group: "jacket",
    material: "Vải nỉ",
    gender: "Nam",
    details: [
      "Chất liệu vải nỉ dày dặn, thoáng mát, thấm hút mồ hôi tốt.",
      "Vải còn mang lại cảm giác thoáng mát và có độ bền cao",
      "Form dáng rộng rãi, thoải mái. Phần mũ trùm đầu có thể kéo lên che nắng, che gió, giữ ấm cho đầu và cổ.",
      "Áo có thiết kế đơn giản, trẻ trung, năng động với logo mắt Obey nổi bật ở mặt trước",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
    ],
  },
  {
    // sp2
    name: "Áo Khoác Đơn Giản PREMIUM 22",
    id: "#0022469",
    desc: "là chiếc áo khoác được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/best-jacket-blue.jpg",
    form: "oversize",
    design: "Trơn",
    style: "Áo hoodie",
    group: "jacket",
    material: "Vải nỉ",
    gender: "Nam",
    details: [
      "Chất liệu vải nỉ dày dặn, thoáng mát, thấm hút mồ hôi tốt.",
      "Vải còn mang lại cảm giác thoáng mát và có độ bền cao",
      "Form dáng rộng rãi, thoải mái. Phần mũ trùm đầu có thể kéo lên che nắng, che gió, giữ ấm cho đầu và cổ.",
      "Áo có thiết kế đơn giản, trẻ trung, năng động với logo mắt Obey nổi bật ở mặt trước",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
    ],
  },
  {
    // sp3
    name: "Áo Khoác Đơn Giản PREMIUM 22",
    id: "#0022470",
    desc: "là chiếc áo khoác được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/best-jacket-brown.jpg",
    form: "oversize",
    design: "Trơn",
    style: "Áo hoodie",
    group: "jacket",
    material: "Vải nỉ",
    gender: "Nam",
    details: [
      "Chất liệu vải nỉ dày dặn, thoáng mát, thấm hút mồ hôi tốt.",
      "Vải còn mang lại cảm giác thoáng mát và có độ bền cao",
      "Form dáng rộng rãi, thoải mái. Phần mũ trùm đầu có thể kéo lên che nắng, che gió, giữ ấm cho đầu và cổ.",
      "Áo có thiết kế đơn giản, trẻ trung, năng động với logo mắt Obey nổi bật ở mặt trước",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
    ],
  },
  {
    // sp4
    name: "Áo Khoác Đơn Giản PREMIUM 22",
    id: "#0022471",
    desc: "là chiếc áo khoác được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/best-jacket-pink.jpg",
    form: "oversize",
    design: "Trơn",
    style: "Áo hoodie",
    group: "jacket",
    material: "Vải nỉ",
    gender: "Nam",
    details: [
      "Chất liệu vải nỉ dày dặn, thoáng mát, thấm hút mồ hôi tốt.",
      "Vải còn mang lại cảm giác thoáng mát và có độ bền cao",
      "Form dáng rộng rãi, thoải mái. Phần mũ trùm đầu có thể kéo lên che nắng, che gió, giữ ấm cho đầu và cổ.",
      "Áo có thiết kế đơn giản, trẻ trung, năng động với logo mắt Obey nổi bật ở mặt trước",
      "Áo có thể phối với nhiều loại trang phục khác nhau, từ quần jean, quần short đến váy, quần legging.",
    ],
  },
  //---------------------------------------------------------------------------------------------------------
  //Best PANTS-JEANS
  {
    // sp1
    name: "Quần Jean Đơn Giản PREMIUM 37",
    id: "#0022472",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 427000,
    img: "../IMGAGE/best-pants-jeans-black.jpg",
    form: "Dáng ôm",
    design: "Trơn",
    style: "Quần jean",
    group: "pants-jeans",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp1
    name: "Quần Jean Đơn Giản PREMIUM 38",
    id: "#0022473",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 405000,
    img: "../IMGAGE/best-pants-jeans-blue.jpg",
    form: "Dáng ôm",
    design: "Trơn",
    style: "Quần jean",
    group: "pants-jeans",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp1
    name: "Quần Jean Đơn Giản PREMIUM 39",
    id: "#0022474",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 397000,
    img: "../IMGAGE/best-pants-elastic-black.jpg",
    form: "Dáng ôm",
    design: "Trơn",
    style: "Quần jean",
    group: "pants-jeans",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp1
    name: "Quần Dài Đơn Giản Cool Touch 03",
    id: "#0022475",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu.",
    price: 352000,
    img: "../IMGAGE/best-pants-wide_tube-while.jpg",
    form: "Ống rộng",
    design: "Trơn",
    style: "Quần thun",
    group: "pants-jeans",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải thun dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  //---------------------------------------------------------------------------------------------------------
  //Best Short
  {
    // sp1
    name: "Quần Short Đơn Giản Cosmo 30",
    id: "#0022476",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu cho các chàng",
    price: 257000,
    img: "../IMGAGE/BEST_SHORT_1.jpg",
    form: "Wide Leg",
    design: "Trơn",
    style: "Quần jean",
    group: "short",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp2
    name: "QUẦN JEAN NAM FORM WIDE LEG",
    id: "#0022477",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu cho các chàng:",
    price: 489000,
    img: "../IMGAGE/BEST_SHORT_2.jpg",
    form: "Wide Leg",
    design: "Trơn",
    style: "Quần jean",
    group: "short",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp3
    name: "QUẦN JEAN NAM TRƠN MÀU XANH ",
    id: "#0022478",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu cho các chàng:",
    price: 389000,
    img: "../IMGAGE/BEST_SHORT_3.jpg",
    form: "Wide Leg",
    design: "Trơn",
    style: "Quần jean",
    group: "short",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
  {
    // sp4
    name: "QUẦN THUN NAM TRƠN MÀU XANH",
    id: "#0022479",
    desc: "là chiếc quần jean được thiết kế đơn giản nhưng mang vẻ đẹp hiện đại và sành điệu cho các chàng:",
    price: 280000,
    img: "../IMGAGE/BEST_SHORT_4.jpg",
    form: "Wide Leg",
    design: "Trơn",
    style: "Quần jean",
    group: "short",
    material: "Jeans",
    gender: "Nam",
    details: [
      "Chất vải jean dệt đôi hiện đại tạo nên màu sắc vải đẹp và ít lỗi mốt",
      "Vải còn mang lại cảm giác thoáng mát, giữ form tốt và có độ bền cao",
      "Form dáng quần hiện đại với phần eo và mông ôm nhẹ, phần ống rộng, suông vừa tôn dáng vừa thoải mái",
      "Thiết kế quần trơn, đơn giản giúp cho các chàng dễ dàng mix&match cùng nhiều trang phục khác và có thể phù hợp với mọi phong cách",
      "Là một chiếc quần mang vẻ đẹp thanh lịch và cá tính cho chàng sử dụng mặc đi làm, đi chơi hay du lịch đều được.",
    ],
  },
];

const handleNavigateToDetail = (shortId) => {
  const short = products.find((product) => product.id === shortId);
  if (!short) return;
  console.log({ short });
  localStorage.setItem("WEB_SHOP_PRODUCT_DETAILS", JSON.stringify(short));
  window.location.href = "../HTML/product-detail.html";
};

function renderCart() {
  const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART")) || [];

  $("#cart-list").html(`
    <span style="font-size: 20px;"><b>Sản phẩm đã thêm </b></span>
    ${
      carts.length > 0
        ? carts
            .map(
              (product, index) =>
                `
 <div data-th="Product" style="margin-top:12px;">
     <div class="row">
         <div class="col-sm-3">
             <img src=${product.img} alt=${product.name} class="img-responsive"
                 width="50">
            
         </div>
         <div class="col-sm-9">
            <h6 class="pt-name">${product.name}</h6>
            <div style="display: flex; justify-content: right; gap:5rem; align-items: center;">
                <h6><span style="color: red;">${product.price
                  .toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })
                  .replace(
                    /\./g,
                    ","
                  )}</span><span id="displayProductNumber"></span></h6>
                <span class="xsp" onclick="handleDelete('${
                  product.id
                }')"><i style="font-size:18px; padding-right:13px;" class="fa-solid fa-trash"></i></span>
            </div>
         </div>  
     </div>
 </div>
`
            )
            .join("")
        : `<div>
        <img id="img-cart" class="header__cart-list--no-cart-img" style="width:190px;" src="../IMGAGE/no-product.png" alt="">
        <div style="margin-top:3px;"><span style="color:red;">Chưa có sản phẩm</span></div>
 </div>`
    }`);
  $("#number-in-cart").html(`${carts.length}`);
}
renderCart();
function showAlert(message, className, initialIconClass) {
  const alertDiv = $(`
        <div class="${className}">
            <i style="font-size: 30px" class="${initialIconClass}"></i>
            <div class="content">
                <div class="title">${message}</div>
            </div>
            <i class="fa-solid fa-xmark" onclick="$(this).closest('.alert').remove()"></i>
        </div>
    `);

  const parentElement = $("body");
  parentElement.append(alertDiv);

  setTimeout(() => {
    alertDiv
      .find("i")
      .removeClass(initialIconClass)
      .addClass("fa-solid fa-circle-check");
  }, 500);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

$(".xsp").on("click", function () {
  const productId = $(this).data("product-id"); // Add a data-product-id attribute to your element

  // Assuming deletion is successful, show the alert
  showAlert(
    "Product deleted successfully",
    "alert-success",
    "fa-solid fa-info-circle"
  );

  // Perform additional logic as needed (e.g., remove the product from the cart)
  // ...

  // Remove the corresponding product from the cart visually
  $(this).closest(".row").remove();
});

// Example usage:
// This is just an example; you'll need to adapt it based on your actual usage

function addToCart(event, shortId) {
  event.stopPropagation();
  const short = products.find((product) => product.id === shortId);
  if (!short) return;
  const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART")) || [];
  const index = carts.findIndex((product) => product.id === shortId);

  if (index >= 0) {
    carts[index].numInCart = carts[index].numInCart + 1;
  } else {
    carts.push({
      ...short,
      numInCart: 1,
    });
  }
  localStorage.setItem("WEB_SHOP_CART", JSON.stringify(carts));

  // Show notification
  showAlert(
    "Sản phẩm đã được thêm vào giỏ hàng",
    "my-alert",
    "fa-solid fa-circle"
  );
  renderCart();
}

function showAlert(message, className, initialIconClass) {
  // Create a div element for the alert
  const alertDiv = document.createElement("div");
  alertDiv.className = className; // Apply the specified class
  alertDiv.innerHTML = `
      <i style="font-size: 30px" class="${initialIconClass}"></i>
      <div class="content">
        <div class="title">${message}</div>
      </div>
      <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
    `;

  // Get the body element or another suitable container where you want to display the alert
  const parentElement = document.body;
  parentElement.appendChild(alertDiv);

  // Change the icon to a checkmark after a delay (e.g., 500 milliseconds)
  setTimeout(() => {
    alertDiv.querySelector("i").className = "fa-solid fa-circle-check";
  }, 500);

  // Remove the alert after a certain time (e.g., 3 seconds)
  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}

const renderProduct = (product, dom) => {
  dom.append(`<li onclick="handleNavigateToDetail('${product.id}')">
    <div class="product-item">
        <div class="product-top">
            <span class="product-thumb">
                <img src=${product.img} alt=${
    product.name
  } width="300px" height="50%">
            </span>
            <button class="buy-now" type="button" onclick="addToCart(event,'${
              product.id
            }')" >Thêm vào giỏ hàng</button>
        </div>
        <div class="product-info text-center" style="display: flex; gap:10px; align-items: center; justify-content: center;">
            <h5><span class="product-name"
            style="display: inline-block; color: red;">${product.price
              .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
              .replace(/\./g, ",")}</span></h5>
            <span style="margin-top:-4px">Giá tốt</span>
        </div>
    </div>
</li>`);
};
const groupsaleProduct = products.filter(
  (product) => product.group == "sale-product"
);
const groupsaleProduct2 = products.filter(
  (product) => product.group == "sale-product2"
);
const groupTShirt = products.filter((product) => product.group == "t-shirt");
const groupShirt = products.filter((product) => product.group == "shirt");
const groupJacket = products.filter((product) => product.group == "jacket");
const groupPantsJeans = products.filter(
  (product) => product.group == "pants-jeans"
);
const groupShort = products.filter((product) => product.group == "short");
// gán ID ul vào 1 biến
const saleProduct = $("#sale-product");
const saleProduct2 = $("#sale-product2");
const bestTShirt = $("#best-t-shirt");
const bestShirt = $("#best-shirt");
const bestJacket = $("#best-jacket");
const bestPantsJeans = $("#best-pants-jeans");
const bestShort = $("#best-short");
// Gọi biến để hiển thị sản phẩm
groupsaleProduct.forEach((item) => renderProduct(item, saleProduct));
groupsaleProduct2.forEach((item) => renderProduct(item, saleProduct2));
groupTShirt.forEach((item) => renderProduct(item, bestTShirt));
groupShirt.forEach((item) => renderProduct(item, bestShirt));
groupJacket.forEach((item) => renderProduct(item, bestJacket));
groupPantsJeans.forEach((item) => renderProduct(item, bestPantsJeans));
groupShort.forEach((item) => renderProduct(item, bestShort));

const handleDelete = (productId) => {
  const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART"));
  const newCarts = carts.filter((product) => product.id !== productId);
  localStorage.setItem("WEB_SHOP_CART", JSON.stringify(newCarts));
  alert("Đã xóa sản phẩm thành công");
  renderCart();
};
