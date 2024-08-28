import {CustomerModel}  from "../model/CustomerModel.js";
import {customerData} from "../db/db.js";

$('#customerSection').ready(function(){
    getAll();
});


$('#addCustomer').on('click', function(){

    var cusId = "C"+new Date().getTime().toString();
    var cusName = $('#cusName').val();
    var cusAddress = $('#cusAddress').val();
    var cusTel = $('#cusTel').val();

    $.ajax({
        url:"http://localhost:8080/pos/customer",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            id : cusId,
            name : cusName,
            address : cusAddress,
            tel : cusTel
        }),

        success:function(results){
            console.log(results);
            getAll();
        },

        error:function(error){
            console.log(error);
        }

    });


})



$('#updateCustomer').on('click', function(){

    var cusId = $('#cusId').val();
    var cusName = $('#cusName').val();
    var cusAddress = $('#cusAddress').val();
    var cusTel = $('#cusTel').val();

    $.ajax({
        url:"http://localhost:8080/pos/customer",
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            id : cusId,
            name : cusName,
            address : cusAddress,
            tel : cusTel
        }),

        success:function(results){
            getAll();
        },

        error:function(error){
            console.log(error);
        }

    });

});


$('#deleteCustomer').on('click', function(){

    var cusId = $('#cusId').val();

    $.ajax({
        url:"http://localhost:8080/pos/customer?id="+cusId,
        method:"DELETE",
        success:function(results){
            console.log(results);
            getAll();
        },

        error:function(error){
            console.log(error);
        }

    });

})


function getAll(){
    $.ajax({
        url:"http://localhost:8080/pos/customer",
        method:"GET",
        success:function(results){
            customerData.length=0;
            results.forEach(function(item) {
                customerData.push(new CustomerModel(item.id,item.name,item.address,item.tel));
            });
            setTableValues();
            setIds();
        },

        error:function(error){
            console.log(error);
        }

    });
}

function setTableValues(){

    $('#customerTable').empty();

    customerData.map(item => {
        var recode = `
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${item.id}
                </th>
                <td class="px-6 py-4">${item.name}</td>
                <td class="px-6 py-4">${item.address}</td>
                <td class="px-6 py-4">${item.tel}</td>
            </tr>
        `;

        $('#customerTable').append(recode);
    });

}

function setIds(){

    $('#cusId').empty();

    customerData.forEach(item => {
        var recode = `<option value="${item.id}">${item.id}</option>`;
        $('#cusId').append(recode);
    });


    $('#orderCusId').empty();

    customerData.forEach(item => {
        var recode = `<option value="${item.id}">${item.id}</option>`;
        $('#orderCusId').append(recode);
    });

}


