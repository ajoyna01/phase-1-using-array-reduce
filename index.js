const batteryBatches = [4, 5, 3, 4, 4, 6, 5]

const totalBatteries = batteryBatches.reduce(function(accumulator, batteryNum) {
  return batteryNum + accumulator}, 0)




// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ 
//   return element * 2 + accumulator}, 0)