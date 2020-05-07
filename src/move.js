export default function newMove(sqaures, direction){
    //works now only for RIGHT!!
    let arr = []
    sqaures.forEach(row => {
        const result = changeRow(row);
        arr.push(result);
    });
    return arr;
    switch(direction){
        case 'Right':
            break;
        case 'Left':
            
            break;
        case 'Up':
            break;
        case 'Down':
            break;
        default:
            break;
    }
}

function changeRow(row){
    const condensed = condense(row);
    const withoutDoubles = checkForConsecDoubles(condensed);
    const res = condense(withoutDoubles);  
    return addNulls(res);
}

function condense(row){
    return row.filter(n => n);
}

function checkForConsecDoubles(con){
    for(let i = 1; i < con.length; i++){
        if(con[i] === con[i-1]){
            con[i-1] = con[i] * 2
            con[i] = null;
        }
    }
    return con;
}

function addNulls(arr){
    let i = 0;
    while(i < 4){
        if(!arr[i]){
            arr.push(null);
        }
        i++;
    }
    return arr;
}