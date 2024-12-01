let towerOfHanoi = function (n, source, aux, destination) {
    if (n === 1) {
        console.log("Move disks 1 from " + source + " to " + destination);
        return;
    }

    towerOfHanoi(n - 1, source, destination, aux);
    console.log("Move disks " + n + " from " + source + " to " + destination);
    towerOfHanoi(n - 1, aux, source, destination);
};

function toh(N, fromm, to, aux) {
    //Write code here
    // sample print statement below
    //console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);
    //in the above statement consider we are moving disk 1 from rod 1 to rod 2
    //remember to return number of moves as well
    let count = 0;
    function helper(N, fromm, to, aux){

        if (N === 1) {
            count+=1;
            console.log("move disk " + N + " from rod " + fromm + " to rod " + to);
            return;
        }

        helper(N - 1, fromm, to, aux);
        count+=1;
        console.log("move disk " + N + " from rod " + fromm + " to rod " + to);
        helper(N - 1, aux, fromm, to);
    }
    helper(N, fromm, to, aux)
    return count;
}


towerOfHanoi(3, 'A', 'B', 'C');
toh(3, 1, 3, 2);
