// 1. Viết hàm random(start, end) trả về kết quả là 1 số nguyên trong khoảng start-end
function random(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log("random", random(0, 10));

// 2. Tạo 1 mảng init gồm 10 phẩn tử ngẫu nhiên lấy từ hàm random
let init = [];
for (let i = 0; i < 10; i++) {
    init.push(random(0, 20));
}
console.log("init", init)

// 3. Viết hàm getOddNumbers với đầu vào là mảng array, trả về kết quả là mảng con gồm các số lẻ trong mảng array
// input: [1, 2, 3, 4, 5]
// output: [1, 3, 5]
// suggest:
//         	function getOddNumbers(array) {
//                     	return …
//         	}
function getOddNumbers(array) {
    return array.filter(number => number % 2 !== 0)
}
const input = [1, 2, 3, 4, 5];
console.log("getOddNumbers", getOddNumbers(input));

// 4. Viết hàm double với đầu vào là mảng array, trả về kết quả là mảng mới gồm các phần tử là gấp đôi phần tử của mảng array
// input: [1, 2, 3, 4, 5]
// output: [2, 4, 6, 8, 10]
function GetDoubleNumbers(array) {
    return array.map(number => number * 2)
}
const arrDouble = [1, 2, 3, 4, 5]
console.log("GetDoubleNumbers", GetDoubleNumbers(arrDouble));

// 5. Dùng hàm reduce để kiểm tra số lượng phần tử có trong mảng
// input: [1, 3, 4, 5, 1, 3, 1]
// output: { 1: 3, 3: 2, 4: 1, 5: 1}
function countArray(input) {
    const result = input.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {});
    return result;
}
const inputCount = [1, 3, 4, 5, 1, 3, 1]
console.log("countArray", countArray(inputCount));