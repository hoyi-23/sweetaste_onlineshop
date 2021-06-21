//資料
var data =[
    { "product_name" : "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "today_product",
      "zh-label": "本日精選",
      "product_img": "https://bit.ly/2QvsT63"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "today_product",
      "zh-label": "本日精選",
      "product_img": "https://bit.ly/2QvsT63"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "today_product",
      "zh-label": "本日精選",
      "product_img": "https://bit.ly/2QvsT63"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "today_product",
      "zh-label": "本日精選",
      "product_img": "https://bit.ly/2QvsT63"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "popular_product",
      "zh-label": "人氣推薦",
      "product_img": "https://bit.ly/2Dwoxd7"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "popular_product",
      "zh-label": "人氣推薦",
      "product_img": "https://bit.ly/2Dwoxd7"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "popular_product",
      "zh-label": "人氣推薦",
      "product_img": "https://bit.ly/2Dwoxd7"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "new_product",
      "zh-label": "新品上市",
      "product_img": "https://bit.ly/2zKOP7w"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "new_product",
      "zh-label": "新品上市",
      "product_img": "https://bit.ly/2zKOP7w"
    },
    { "product_name": "焦糖馬卡龍",
      "product_pri": "450",
      "product_label": "new_product",
      "zh-label": "新品上市",
      "product_img": "https://bit.ly/2zKOP7w"
    }
];
var dataLen = data.length;
//dom
//procuct-page
var selectList = document.querySelector('#product_select_list');
var productList = document.querySelector('.product_list');
var allNum = document.querySelector('.all_product_num');
var todayNum = document.querySelector('.today_product_num');
var popularNum = document.querySelector('.popular_product_num');
var newNum = document.querySelector('.new_product_num');
//index
var todayList = document.querySelector('.todaylist');

//function
//index_page 載入後顯示商品
function showTodayList(e){
    //index_page
    var todayTemp = [];
    var todayStr ='';
    for(var a=0;a<dataLen;a++){
        if(data[a]["zh-label"] == "本日精選"){
            todayTemp.push(data[a]);
        };
    }
    for(var b=0; b < 3; b++){   
        todayStr += 
        '<div class="col-lg-4">'+
        '<div class="product_img zoomimage position-relative"  some-attribute-name="'+todayTemp[b]["zh-label"]+'" style="background-image: url('+ todayTemp[b].product_img +'); height: 315px;"></div>'+
        '<div class="d-flex">'+
            '<div class="col-7 text-center py-3 border-2 border-start border-end border-secondary text-primary fs-5 fw-bolder">'+ todayTemp[b].product_name +'</div>'+
            '<div class="col-5 text-center py-3 border-end border-secondary text-primary fs-5 fw-bolder">NT$'+ todayTemp[b].product_pri +'</div>'+
        '</div>'+
        '<div class="btn col-12 fw-bold fs-4 text-center py-3 rounded-0 product_add_btn">加入購物車</div>'+
    '</div>';
    }
    todayList.innerHTML = todayStr;
};//end

//product_page 載入後顯示商品與數量
function showAllList(e){
    var allStr ='';
    var numToday =[];
    var numPopular =[];
    var numNew =[];
    for (var c = 0; c < dataLen; c++) {
        allStr +=
            '<li class="col-lg-6 mb-4">'+
                '<div>'+
                '<div class="product_img zoomimage position-relative" some-attribute-name="'+data[c]["zh-label"]+'" style="background-image: url('+ data[c].product_img +'); height: 315px;"></div>'+
                '<div class="d-flex">'+
                '<div class="col-7 text-center py-3 border-2 border-start border-end border-secondary text-primary fs-5 fw-bolder">'+ data[c].product_name +'</div>'+
                    '<div class="col-5 text-center py-3 border-end border-secondary text-primary fs-5 fw-bolder">NT $'+ data[c].product_pri +'</div>'+
                '</div>'+
                '<div class="btn col-12 fw-bold fs-4 text-center py-3 rounded-0 product_add_btn">加入購物車</div>'+
                '</div>'+
            '</li>';

        //num
        if(data[c]['product_label'] == 'popular_product'){
            numPopular.push(data[c]);
        }else if(data[c]['product_label'] == 'today_product'){
            numToday.push(data[c]);
        }else if(data[c]['product_label'] == 'new_product'){
            numNew.push(data[c]);
        }
    }
    
    productList.innerHTML = allStr;
    //num
    allNum.textContent = String(dataLen);
    todayNum.textContent = String(numToday.length);
    popularNum.textContent = String(numPopular.length);
    newNum.textContent = String(numNew.length);


    //商品內容換頁
    selectList.addEventListener('click',changeList);
};//end

//Product_page : 監聽父元素改變productList內容
function changeList(e) {
    var temp = []; //用來存放選取後篩選出來的data
    var str = '';
    var confirm = e.target.nodeName;
    var select = e.target.dataset.label;
    productList.innerHTML = '';
    if(confirm !== 'A'){return}else{
        e.preventDefault();
        
        for (var i = 0; i < dataLen; i++) {
            if (select === data[i]['product_label']) {
                temp.push(data[i])
            } else if (select === 'all_product') {
                temp.push(data[i]);
            }
        }
    }
    var tempLen = temp.length;
    for (var j = 0; j < tempLen; j++) {
        str +=
            '<li class="col-lg-6 mb-4">'+
                '<div>'+
                '<div class="product_img zoomimage position-relative" some-attribute-name="'+temp[j]["zh-label"]+'" style="background-image: url('+ temp[j].product_img +'); height: 315px;"></div>'+
                '<div class="d-flex">'+
                '<div class="col-7 text-center py-3 border-2 border-start border-end border-secondary text-primary fs-5 fw-bolder">'+ temp[j].product_name +'</div>'+
                    '<div class="col-5 text-center py-3 border-end border-secondary text-primary fs-5 fw-bolder">NT $'+ temp[j].product_pri +'</div>'+
                '</div>'+
                '<div class="btn col-12 fw-bold fs-4 text-center py-3 rounded-0 product_add_btn">加入購物車</div>'+
                '</div>'+
            '</li>';
        }
        productList.innerHTML = str;
};//end

//pagination







//event