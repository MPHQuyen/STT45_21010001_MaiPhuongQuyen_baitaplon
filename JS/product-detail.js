(function initialProductDetail() {
    const currentProduct = JSON.parse(
        localStorage.getItem("WEB_SHOP_PRODUCT_DETAILS")
    );
    if (!currentProduct) return (window.location.href = "../HTML/index.html");
    $("#product-details").html(`
    <div class="column col-6">
    <div class="image-large w-100">
        <div class="w-100">
            <img id="img-product-detail"
                src=${currentProduct.img}
                alt=${currentProduct.name}
            />
        </div>
    </div>
    </div>
    <div class="column col-6">
    <h3 class="text-fs-header text-dark mb-4">
       ${currentProduct.name}
    </h3>
    <h3 class="text-fs-header text-dark mb-4">
       ${currentProduct.id}
    </h3>
    <h5><span class="fs-5 fw-bolder" style="color:red;">${currentProduct.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND'}).replace(/\./g, ',')}</span></h5>
    <div class="mt-3">
        <span class="text-fs-normal me-3"
            >Chọn màu sắc:</span
        >
        <span class="fw-bolder text-dark fs-5"
            >M/ BLUE</span
        >
        <div class="img-sel-color mt-3">
            <img
                class="w-100"
                src="${currentProduct.img}"
                alt=""
            />
        </div>
    </div>
    <div class="size mt-4">
        <div >
            <div style="display:flex; gap:14rem; align-items: center;">
                <div><span class="text-fs-normal">Chọn size:</span>
                <span class="fs-6 text-dark" id="size-product">28</span></div>
            
            <a
                href=""
                class="instruct-link text-dark"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                </svg>
                Hướng dẫn sử dụng
            </a>
            </div>
            <div class="d-flex mt-3">
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(28)"
                >
                    28
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(29)"
                >
                    29
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(30)"
                >
                    30
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(31)"
                >
                    31
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(32)"
                >
                    32
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(34)"
                >
                    34
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(34)"
                >
                    35
                </div>
                <div
                    class="number-order p-3 border me-3 text-dark bg-white fs-6" onclick="changeSize(36)"
                >
                    36
                </div>
            </div>
        </div>
    </div>
    <div class="mt-4">
        <span class="text-fs-normal me-3"
            >Chọn số lượng:</span
        >
        <span class="fs-6" id="span-product-number">1</span>
        <div class="box-input-count">
            <div class="d-flex my-3">
                <div
                    class="box-input-number-cart position-relative me-4"
                >
                    <button class="position-absolute" onclick="handleMinus()">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                    <input style="text-align: center;"
                    id="product-number"
                        type="number"
                        value=1
                    />
                    <button class="position-absolute" onclick="handlePlus()">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    type="button"
                    class="btn-buy btn btn-dark w-38 me-md-3 border-0"
                    onclick="addToCart(event,'${currentProduct.id}')"
                >
                    Thêm vào giỏ hàng
                </button>
                <button
                    type="button"
                    class="btn-buy btn btn-dark w-38 border-0"
                    onclick="convertPagePay()"                 
                >
                    Mua ngay
                </button>
            </div>
            <div class="text-fs-normal text-black-50">
                Còn lại: <strong>100</strong> sản phẩm
            </div>
            <div>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg> -->
            </div>
        </div>
    </div>
    <div
        class="product-info d-flex justify-content-center mt-5 p-2 bg-icon-prd"
    >
        <div>
            <ul class="row-12 list-unstyled d-flex" >
                <li class="col-4 d-flex me-4">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/ghn.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong>Giao hàng nhanh</strong>
                        <p class="text-black-50">
                            Từ 2-5 ngày
                        </p>
                    </div>
                </li>
                <li class=" col-4 d-flex me-4">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/free.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong>Miễn phí vận chuyển</strong>
                        <p class="text-black-50">
                            Đơn hàng từ 399K
                        </p>
                    </div>
                </li>
                <li class="col-5  d-flex" style="padding-right:4px;">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/order.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong>
                            Theo dõi đơn <br> hàng
                            
                            một <br> cách dễ dàng
                        </strong>
                    </div>
                </li>
            </ul>
            <ul class="row-12 list-unstyled d-flex">
                <li class="col-4 d-flex me-4">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/returns.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong>Đổi trả linh <br /> hoạt</strong>
                        <p class="text-black-50">
                            Với sản phẩm  không 
                            áp dụng khuyến mãi
                        </p>
                    </div>
                </li>
                <li class="col-4 d-flex me-4">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/pay.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong
                            >Thanh toán dễ dàng nhiều
                            hình thức</strong
                        >
                    </div>
                </li>
                <li class="col-4 d-flex">
                    <div class="me-3">
                        <img
                            src="../IMGAGE/image-icon/hotline.png"
                            alt=""
                        />
                    </div>
                    <div class="text">
                        <strong>Hotline hỗ trợ</strong>
                        <p class="text-black-50">
                            012 3456 789
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
    <div class="p-3">
    <div class="d-flex align-content-center pb-3">
        <div
            class="square align-self-center bg-danger"
        ></div>
        <div class="ms-2 align-self-center fw-bolder fs-5">
            Đặc điểm nổi bật
        </div>
    </div>
    <table class="w-75">
        <tbody class="d-flex flex-wrap">
            <tr class="w-50 ps-1 pe-4">
                <th>Form:</th>
                <td class="">${currentProduct.form}</td>
            </tr>
            <tr class="w-50 ps-1 pe-4">
                <th>Chất liệu:</th>
                <td>${currentProduct.material}</td>
            </tr>
            <tr class="w-50 ps-1 pe-4">
                <th>Thiết kế:</th>
                <td class="">${currentProduct.design}</td>
            </tr>
            <tr class="w-50 ps-1 pe-4">
                <th>Giới tính:</th>
                <td>${currentProduct.gender}</td>
            </tr>
            <tr class="w-50 ps-1 pe-4">
                <th>Nhóm sản phẩm:</th>
                <td>${currentProduct.style}</td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="">
    <div class="d-flex align-content-center pb-3">
        <div
            class="square align-self-center bg-danger"
        ></div>
        <div class="ms-2 align-self-center fs-5">
            <span class="no-fwbolder text-danger"
                >THÔNG TIN CHI TIẾT</span
            >
           
        </div>
    </div>
    <div style="margin-bottom:7rem;">
    <p>
        <strong class="fw-bolder fs-5"
            >${currentProduct.name} -
            ${currentProduct.id}</strong
        >
        ${currentProduct.desc}
    </p>
    <ul>
        ${currentProduct.details
            .map((detail) => {
                return `
            <li class="p-2 text-dark dot">
                ${detail}
            </li>
    `;
            })
            .join("")}
    </ul>
    </div>
    </div>
    `);
})();

// JavaScript
function changeSize(size) {
    // Lấy thẻ span có id "size-product"
    var sizeProductSpan = document.getElementById('size-product');

    // Cập nhật giá trị của thẻ span
    sizeProductSpan.textContent = size;
}
localStorage.setItem('product-number', document.getElementById('inputValue').value);
document.addEventListener('DOMContentLoaded', function() {
    var inputElement = document.getElementById('product-number');
    var spanElement = document.getElementById('span-product-number');
  
    // Lắng nghe sự kiện input trên inputElement
    inputElement.addEventListener('input', function() {
      var newValue = inputElement.value;
      
      // Cập nhật giá trị của spanElement
      spanElement.textContent = newValue;
    });
});
function handleMinus() {
    var inputElement = document.getElementById('product-number');
    var spanElement = document.getElementById('span-product-number');

    // Lấy giá trị hiện tại của input
    var currentValue = +inputElement.value;

    // Đảm bảo giá trị không nhỏ hơn 1
    if (currentValue >= 2) {
        inputElement.value = currentValue - 1;

        // Cập nhật giá trị của spanElement khi giảm
        spanElement.textContent = inputElement.value;
    }
    // Nếu giá trị hiện tại là 1, không giảm nữa
};
  
  function handlePlus() {
    var inputElement = document.getElementById('product-number');
    var spanElement = document.getElementById('span-product-number');
    
    inputElement.value = +inputElement.value + 1;
    
    // Cập nhật giá trị của spanElement khi tăng
    spanElement.textContent = inputElement.value;
};


function addToCart() {
    const productNumber = Number.parseInt($("#product-number").val());
    const currentProduct = JSON.parse(
        localStorage.getItem("WEB_SHOP_PRODUCT_DETAILS")
    );
    if (!currentProduct) return (window.location.href = "../HTML/index.html");

    const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART")) || [];
    const index = carts.findIndex(
        (product) => product.id === currentProduct.id
    );
    if (index >= 0) {
        carts[index].numInCart = carts[index].numInCart + productNumber;
    } else {
        carts.push({
            ...currentProduct,
            numInCart: productNumber,
        });
    }
    localStorage.setItem("WEB_SHOP_CART", JSON.stringify(carts));
    alert("Sản phẩm đã được thêm vào giỏ hàng");
}
// $("#btn-buy-now").click();

function convertPagePay(){
    window.location.href = "../HTML/cart.html"
}
$("#btn-buy-now").click();

