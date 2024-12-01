let towerOfHanoi = function (n, source, aux, destination) {
    if (n === 1) {
        console.log("Move disks 1 from " + source + " to " + destination);
        return;
    }

    towerOfHanoi(n - 1, source, destination, aux);
    console.log("Move disks " + n + " from " + source + " to " + destination);
    towerOfHanoi(n - 1, aux, source, destination);
};

towerOfHanoi(3, 'A', 'B', 'C');
