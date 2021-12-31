
//mean
function mean (nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
}

//median
function median(nums) {

    let median = 0, numsLen = nums.length;
    nums.sort();
 
    if (
        numsLen % 2 === 0 
    ) {
        // average of two middle numbers for even
        median = (nums[numsLen / 2 - 1] + nums[numsLen / 2]) / 2;
    } else { 
        // middle number only for odd
        median = nums[(numsLen - 1) / 2];
    }
 
    return median;
}

//mode
function mode(nums) {
    
    let modes = [], count = [], i, number, maxIndex = 0;
 
    for (i = 0; i < nums.length; i += 1) {
        number = nums[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}

function paramStringToArray (str) {
    return str.split(',').map(e => parseInt(e));
}

module.exports = {
    mean,
    median,
    mode,
    paramStringToArray,
}