let foot = $("body>section");
$("#find_music").click(function () {
    for(let i = 0; i <foot.length ; i++){
        if(i==0){
            foot.eq(i).fadeIn(200);
        }else{
            foot.eq(i).fadeOut(200);
        }
    }
});
$("#my_music").click(function () {
    for(let i = 0; i <foot.length ; i++){
        if(i==1){
            foot.eq(i).fadeIn(200);
        }else{
            foot.eq(i).fadeOut(200);
        }
    }
});
$("#friend").click(function () {
    for(let i = 0; i <foot.length ; i++){
        if(i==2){
            foot.eq(i).fadeIn(200);
        }else{
            foot.eq(i).fadeOut(200);
        }
    }
});
$("#account").click(function () {
    for(let i = 0; i <foot.length ; i++){
        if(i==3){
            foot.eq(i).fadeIn(200);
        }else{
            foot.eq(i).fadeOut(200);
        }
    }
});