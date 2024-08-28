import {ProductModel} from "../model/ProductModel.js";
import {productData} from "../db/db.js";


$('#itemSection').ready(function (){

    getAll();

    console.log("Ready")

});


$('#addProduct').on('click', function(){

    var proId =  "P"+new Date().getTime().toString()
    var proName = $('#proName').val();
    var proPrice = $('#proPrice').val();
    var proQty = $('#proQty').val();

    $.ajax({
        url:"http://localhost:8080/pos/product",
        method:"POST",
        contentType:"application/json",
        "data":JSON.stringify({
            id : proId,
            name : proName,
            price : proPrice,
            qty : proQty
        }),

        success:function(results){
            getAll();
        },

        error:function(error){
            console.log(error);
        }

    });
    
});


$('#updateProduct').on('click', function(){

    var proId =  $('#proId').val();
    var proName = $('#proName').val();
    var proPrice = $('#proPrice').val();
    var proQty = $('#proQty').val();

    $.ajax({
        url:"http://localhost:8080/pos/product",
        method:"PUT",
        contentType:"application/json",
        "data":JSON.stringify({
            id : proId,
            name : proName,
            price : parseFloat(proPrice),
            qty : parseFloat(proQty)
        }),

        success:function(results){
            console.log(results);
            
            getAll();
        },

        error:function(error){
            console.log(error);
        }

    });

});


$('#deleteProduct').on('click', function(){

    var proId = $('#proId').val();

    $.ajax({
        url:"http://localhost:8080/pos/product?id="+proId,
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
        url:"http://localhost:8080/pos/product",
        method:"GET",
        success:function (results){

            productData.length=0;

            results.forEach(function(items){
                productData.push(new ProductModel(items.id,items.name,items.price,items.qty));
            });
            setIds();
            setTableValues();
        },
        error:function(error){
            console.log(error);

        }
    })
}

function setIds(){

    $('#proId').empty();

    productData.map(item =>{
       var recode =`<option value="${item.id}">${item.id}</option>`;
       $('#proId').append(recode);
    });

}


function setTableValues(){

    $('#proTable').empty();

    productData.map(item => {
        var recode = `
            <tr
                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  ${item.id}"
                </th>
                <td class="px-6 py-4">${item.name}</td>
                <td class="px-6 py-4">${item.price}</td>
                <td class="px-6 py-4">${item.price}</td>
              </tr>
        `;

        $('#proTable').append(recode);
    });

}

