// start coding your function here!

function find_max(arr){
    let max =0;
    for (let i=0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    
    }
    return max;



}

exports.find_max = find_max;