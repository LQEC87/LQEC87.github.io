$('.cliker').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".subtitle");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).children('.rotate').hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).children('.rotate').removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).children('.rotate').addClass('close');//クラス名closeを付与
    }
});
$('.p').click( function(){
    $('.s').toggle();
});
//↓無理
/*$('.rotate').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).parent('cliker').next(".subtitle");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
});*/