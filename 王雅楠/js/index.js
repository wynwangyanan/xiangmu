$(document).ready(function(){
    $.ajax({
        url:"http://mock.shtodream.cn/mock/5e9923950f0ab03f6d504725/example_copy/banner",
        type:"post",
        dataType:"json",
        success:function(res){
            console.log(res.data);
            $.each(res.data,function(index,value){
                $(".swiper-wrapper").append("<div class='swiper-slide'><img src='"+value.banner+"'</div>")
            })
    
    }
    })
    })