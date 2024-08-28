import {customerData,orderData,productData} from "../db/db.js";
import {OrderModel} from "../model/OrderModel.js";

var orderId = "O"+new Date().getTime().toString();

$('#placeOrder').on('click',function (){

    var orderArray = Object.values(orderData);

    var jsonArray = JSON.stringify(orderArray);


    $.ajax({
        url:"http://localhost:8080/pos/order",
        method:"POST",
        contentType:"application/json",
        "data":jsonArray,

        success:function(results){
            console.log(results);
            console.log("Placed")
        },

        error:function(error){
            console.log(error);
        }

    });
})



$('#addOrder').on('click',function (){

    var cusId = $('#orderCusId').val();
    var proId = $('#orderProId').val();
    var proName = $('#cusItemName').val();
    var price = $('#orderItemPrice').val();
    var qty = $('#orderItemQty').val();

    if (searchItem(proId).qty < qty) {
        alert("not enough qty");
    }

    orderData.push(new OrderModel(
        orderId,
        cusId,
        proId,
        qty,
        price
    ))

    console.log(orderData.length);
    loadTable();

});

function loadTable(){

    var lastProduct = productData[productData.length - 1];
    var proIds =lastProduct.name;

    $('#orderTable').empty();

    orderData.map(item => {
        var recode = `<tr
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  ${item.proId}
                </th>
                <td class="px-6 py-4">${proIds}</td>
                <td class="px-6 py-4"> ${item.price}</td>
                <td class="px-6 py-4"> ${item.qty}</td>
              </tr>`

        $('#orderTable').append(recode);
    });



}



$('#orderCusId').change(function () {
    var cusId = $('#orderCusId').val();

    var customer = searchCustomer(cusId);
    $('#orderCustomerName').val(customer.name);
});


$('#orderProId').change(function () {
    var proId = $('#orderProId').val();

    var item = searchItem(proId);
    $('#cusItemName').val(item.name);
    $('#orderItemPrice').val(item.price);
});

function searchCustomer(id){
    const index = customerData.findIndex(item => item.id === id);
    return customerData[index];
}

function searchItem(id){
    const index = productData.findIndex(item => item.id === id);
    return productData[index];

}








