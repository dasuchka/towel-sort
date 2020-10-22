module.exports = function towelSort(matrix){
    let line_matrix=[];
    if (matrix === undefined) {
    return line_matrix;
    }
    for (let i=0; i<=matrix.length-1;i++){
        if (i%2===0){
            for (let j=0; j<=matrix[i].length-1; j++){
            line_matrix.push(matrix[i][j]);
            }
        }else{for (let j=matrix[i].length-1; j>=0; j--){
            line_matrix.push(matrix[i][j]);
            }}
    }
    return line_matrix;
}
