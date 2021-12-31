const { mean, median, mode } = require("./calculators");
  describe("#mean", function () {
    it("finds the mean of numbers", function () { 
      expect(mean([10,-20,30,40,-20,60,70,80])).toEqual(31.25)
    })
    it("finds the mean of numbers", function () { 
      expect(mean([1,2,3,4,5,6,7,8,9])).toEqual(5)
    })
  })

  describe("#median", function(){
    it("finds the median of an even numbers set", function(){ 
      expect(median([1,2,3,4,5,6,7,8])).toEqual(4.5)
    })
    it("finds the median of an odd numbers set", function () { 
      expect(median([11,22,33,44,55,66,77])).toEqual(44)
    })
  })
  
  
  
  describe("#mode", function () {
    it("finds the mode of the lists of numbers", function () { 
      expect(mode([2,2,2,3,5,6,3,3,3,3])).toEqual([3])
    })
  })

 