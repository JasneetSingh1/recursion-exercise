function mergeSort(arr){
    
    if(arr.length == 1){
        return arr;
    }

    const half = Math.round(arr.length/ 2) ;
    const left = [];

    for(let i = 0; i < half; i++){
        left[i] = arr[i];
    }

    const right = [];
    let index = 0;
    for(let i = half; i < arr.length; i++){
        right[index] = arr[i];
        index++;
    }

   

    const leftAr = mergeSort(left);
    const rightAr = mergeSort(right);

   

    let lPoint = 0;
    let rPoint = 0;

    const long = leftAr.length + rightAr.length;
    const mergeAr = [];

    for(let i = 0; i < long; i++){

        if(rightAr[rPoint] == null && leftAr[lPoint] != null){
            mergeAr[i] = leftAr[lPoint];
            lPoint++;
        }

        if(leftAr[lPoint] == null && rightAr[rPoint] != null){
            mergeAr[i] = rightAr[rPoint];
            rPoint++;
        }

        if(leftAr[lPoint] != null && leftAr[lPoint]  <= rightAr[rPoint]){
            mergeAr[i] = leftAr[lPoint];
            lPoint++;
        
        }
        else if(rightAr[rPoint] != null && rightAr[rPoint]  <= leftAr[lPoint]){
            mergeAr[i] = rightAr[rPoint];
            rPoint++;
        
        }

    }


    
    return mergeAr;
}

const test = mergeSort([105, 79, 100, 110]);
console.log(test);