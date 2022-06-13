// start coding your function here!
function running_late(date){
    const day = new Date(date);
    if(day.getHours() >= 22){
        return "It is late!";
    }
    else{
        return "It is still early!";
    }
}

exports.running_late = running_late;
