var findGCD = function(nums) {
    min = Infinity
    max = -Infinity

    for(let i=0; i < nums.length; i++){
        if(nums[i] < min) min =  nums[i]
        if(nums[i] > max) max = nums[i]
    }

    let divisor = min
    while (!(min % divisor === 0 && max % divisor === 0)){
        divisor--
    }
    return divisor
};