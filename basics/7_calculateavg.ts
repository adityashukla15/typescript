function avg(arr: number[]): number {
    let n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }

    let average = sum / n;

    return average;
}

console.log(avg([2, 2]));