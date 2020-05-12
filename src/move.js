export default function newMove(sqaures, direction){
    const dir = direction.split('Arrow')[1];
    const directions = {
        'Right': () => { return changeRight(sqaures) },
        'Left': () => { return changeLeft(sqaures) },
        'Up': () => { return changeUp(sqaures) },
        'Down': () => { return changeDown(sqaures) },
    };
    return directions[dir]();
}


const condense = (row) => row.filter(n => n);
const transpose = (board) => board[0].map((col, i) => board.map(row => row[i]));

function changeLeft(board){
    const arr = []
    board.forEach(row => {
        arr.push(changeRowLeft(row));
    });
    return arr;
   
}

function changeRowLeft(row){
    let curr = 0; 
    for(let i = 1; i < row.length; i++){
        if(row[i]){
            if(row[i] === row[curr]){
                row[curr] *= 2
                row[i] = null;
            }
            curr = i;
        }
    }

    const con = condense(row);
    const numNulls = Array(4 - con.length).fill(null);
    return [...con, ...numNulls];
}

function changeRight(board){
    const arr = []
    board.forEach(row => {
        arr.push(changeRowRight(row));
    });
    return arr;
   
}

function changeRowRight(row){
    let curr = row.length - 1; 
    for(let i = row.length - 2; i >= 0; i--){
        if(row[i]){
            if(row[i] === row[curr]){
                row[curr] *= 2
                row[i] = null;
            }
            curr = i;
        }
    }

    const con = condense(row);
    const numNulls = Array(4 - con.length).fill(null);
    return [...numNulls, ...con];
}


function changeUp(board){
    const arr = [];
    const transposed = transpose(board);
    transposed.forEach(row => {
        arr.push(changeRowLeft(row));
    });  
    return transpose(arr);
}

function changeDown(board){
    const arr = [];
    const transposed = transpose(board);
    transposed.forEach(row => {
        arr.push(changeRowRight(row));
    });  
    return transpose(arr);
}



