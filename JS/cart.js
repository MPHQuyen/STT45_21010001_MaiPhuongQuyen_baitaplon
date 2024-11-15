function renderCart() {
  const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART")) || [];
  const totalPrice = carts.reduce(
    (initPrice, currentProduct) =>
      initPrice + currentProduct.price * currentProduct.numInCart,
    0
  );
  if (carts.length > 0) {
    $("#cart").html(`
        <thead>
        <tr>
            <th style="width:45%">
                <h4><b>Tên sản phẩm</b></h4>
            </th>
            <th style="width:10%">
                <h4><b>Giá</b></h4>
            </th>
            <th style="width:13%" class="text-center">
                <h4><b>Số lượng</b></h4>
            </th>
            <th style="width:20%" class="text-center">
                <h4><b>Thành tiền</b></h4>
            </th>
            <th style="width:12%"> </th>
        </tr>
    </thead>
                  <tbody>
                     ${carts
                       .map(
                         (product, index) =>
                           ` <tr>
                      <td data-th="Product">
                       
                          <div class="row">
                              <div class="col-sm-2 hidden-xs">
                                  <img src=${product.img} alt=${
                             product.name
                           } class="img-responsive"
                                      width="100">
                              </div>
                              <div class="col-sm-10 ps-5">
                                  <h4 class="nomargin">${product.name}</h4>
                                  <p>${product.desc}</p>
                              </div>
                          </div>
                      </td>
                      <td data-th="Price"><span style="color:red;">${product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace(/\./g, ',')}</span>
                      </td>
                      <td data-th="Quantity">
                          <div style="margin-left: 16px;">
                              <div style="display: flex;">
                                  <button class="minus-btn btn-outline-dark px-2" data-product="product1"
                                      onclick="handleMinus('${index}')"><i class="ti ti-minus"></i></button>
                                  <input type="text" name="amount" class="text-center num-in-cart"  data-product-id=${
                                    product.id
                                  }
                                      size="3px" value=${product.numInCart} >
                                  <button class="plus-btn btn-outline-dark px-2" data-product="product1"
                                      onclick="handlePlus('${index}')"><i class="ti ti-plus"></i></button>
                              </div>
                          </div>
                      </td>
                      <td data-th="Subtotal" class="text-center">
    <span class="product-total" data-product="product1" style="color:red;">
        ${(product.price * product.numInCart)
          .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
          .replace(/\./g, ",")}
    </span>
    </td>
                    <td><i style="font-size:25px; margin-left:25px;" id="success" class="fa-solid fa-trash xsp" onclick="handleDelete('${product.id}')"></i></td>
                      
                  </tr>`
                       )
                       .join("")}
   
                  </tbody>
                  <tfoot>
                  <tr>
                      <td><a href="../HTML/index.html" class="btn btn-dark"> Tiếp tục mua hàng</a>
                      </td>
                      <td colspan="2" class="hidden-xs"> </td>
                      <td class="hidden-xs text-center"><span id="total-amount" style="color:red;">${totalPrice
                        .toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })
                        .replace(/\./g, ",")}</span>
                      </td>
                      <td>
                          <button type="button" id="checkoutButton" class="btn btn-primary" data-bs-toggle="modal"
                              data-bs-target="#exampleModal">
                              Thanh toán
                          </button>
              
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                              aria-hidden="true">
                              <div class="modal-dialog">
                                  <div class="modal-content">
                                      <div class="modal-header">
                                          <h3 class="my-3">Thông tin Giao hàng</h3>
                                          <button type="button" class="btn-close" data-bs-dismiss="modal"
                                              aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <form>
                                              <div class="mb-3" >
                                                  <label for="exampleInputName" class="form-label"><b>Họ và
                                                          tên</b></label>
                                                  <input type="text" class="form-control" id="exampleInputName"
                                                      aria-describedby="NameHelp">
                                              </div>
                                              
                                              <div class="mb-3">
                                                  <label for="exampleInputNumber1" class="form-label"><b>Số điện
                                                          thoại</b></label>
                                                  <input type="text" class="form-control" id="exampleInputNumber"
                                                      aria-describedby="NumberHelp">
                                              </div>
                                              <div class="mb-3">
                                                  <label for="exampleInputEmail1"
                                                      class="form-label"><b>Email</b></label>
                                                  <input type="email" class="form-control" id="exampleInputEmail1"
                                                      aria-describedby="emailHelp">
                                              </div>
                                              <div class="mb-3">
                                                  <label for="exampleInputAddress1" class="form-label"><b>Địa
                                                          chỉ</b></label>
                                                  <input type="text" class="form-control" id="exampleInputAddress1">
                                              </div>
                                              <div class="mb-3">
                                                  <label for="exampleFormControlTextarea1" class="form-label"><b>Ghi
                                                          chú</b></label>
                                                  <textarea class="form-control" id="exampleFormControlTextarea1"
                                                      rows="3"></textarea>
                                              </div>
              
                                              <div class="mb-3">
                                                  <label for="exampleFormControlTextarea1" name="Pay"
                                                      class="form-label"><b>Hình thức thanh toán</b></label>
                                                  <label>
                                                      <input type="radio" name="Pay">
                                                      <span>Thanh toán khi nhận hàng</span>
                                                  </label>
                                                  <label>
                                                      <input type="radio" name="Pay">
                                                      <span>Thanh toán qua ngân hàng</span>
                                                  </label>
                                              </div>
                                              <div class="mb-3">
                                                  <label for="exampleFormControlTextarea1" class="form-label"><b>Tổng
                                                          số tiền:</b></label>
                                                  <span id="total-amount-modal"><span style="color:red;">${totalPrice
                                                    .toLocaleString("vi-VN", {
                                                      style: "currency",
                                                      currency: "VND",
                                                    })
                                                    .replace(
                                                      /\./g,
                                                      ","
                                                    )}</span></span>
                                              </div>
              
                                              <button type="submit" class="btn btn-primary">Thanh toán</button>
                                          </form>
                                      </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn-danger"
                                              data-bs-dismiss="modal">Close</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </td>
              
                  </tr>
              </tfoot>
    
    `);
  } else {
    $("#cart").html(
      '<center><p style="font-family: Open Sans, sans-serif; margin-top:20px; font-size: 30px">Giỏ hàng trống</p><img src="../IMGAGE/no-product.png" width="60%;" alt="Ảnh sản phẩm"/><a href="../HTML/index.html" style="color:black; text-decoration: none;"><p class="zoom-in-zoom-out" style="font-family: Open Sans, sans-serif; margin-top:30px; font-size: 20px; color: red; padding-left: 10px;">Hãy nhanh tay chọn ngay sản phẩm yêu thích</p></a></center>'
    );
  }
}

renderCart();
const handleMinus = (index) => {
  const input = $(".num-in-cart")[index];
  const productId = input.dataset.productId;
  const newQuantity = +input.value - 1;
  input.value = newQuantity;
  handleChangeQuantity(productId, newQuantity);
};
const handlePlus = (index) => {
  const input = $(".num-in-cart")[index];
  const productId = input.dataset.productId;
  const newQuantity = +input.value + 1;
  input.value = newQuantity;
  handleChangeQuantity(productId, newQuantity);
};
const handleChangeQuantity = (productId, newQuantity) => {
  const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART"));
  const index = carts.findIndex((product) => product.id === productId);
  carts[index] = {
    ...carts[index],
    numInCart: newQuantity,
  };
  localStorage.setItem("WEB_SHOP_CART", JSON.stringify(carts));
  // alert("giỏ hàng da duoc cap nhat");
  renderCart();
  // const index =
};
const handleDelete = (productId) => {
    const carts = JSON.parse(localStorage.getItem("WEB_SHOP_CART"));
    const newCarts = carts.filter((product) => product.id !== productId);
    localStorage.setItem("WEB_SHOP_CART", JSON.stringify(newCarts));
  
    // Use the my-alert-success class for a success message
    showAlert("Đã xóa sản phẩm thành công", "my-alert");
  
    renderCart();
  };
  
  function showAlert(message, className) {
    // Create a div element for the alert
    const alertDiv = document.createElement("div");
    alertDiv.className = className; // Apply the specified class
    alertDiv.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <div class="content">
            <div class="title">${message}</div>
        </div>
        
        <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
    `;
    // Get the body element or another suitable container where you want to display the alert
    const parentElement = document.body;
    parentElement.appendChild(alertDiv);
  
    // Remove the alert after a certain time (e.g., 3 seconds)
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
  


  