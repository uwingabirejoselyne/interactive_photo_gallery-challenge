const hasSubarrayWithSum = (arr, target) => {
    let sum = 0, start = 0;

    return arr.some((num, end) => {
        sum += num;

        while (sum > target && start <= end) {
            sum -= arr[start++];
        }

        return sum === target;
    });
};


const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target));