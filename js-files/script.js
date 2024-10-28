var number = parseInt(document.getElementById("digit").innerHTML);

//console.log(number);



function on_click()
{ 
    var color_list = ["black","grey","blue"]
    number = number + 1;
    console.log(number);
    document.getElementById("digit").innerHTML = number;

    var color_num = 1;
    
    if (color_num > color_list.length)
    {

    document.querySelector(".background").style.backgroundColor = color_list[color_num + 1];
    
}
}



