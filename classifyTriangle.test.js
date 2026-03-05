
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    //following tests are BVA, seeing what happens on the boundary of each variable (1-200)
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(1, 10, 10)).toBe('Isosceles');
    });//Test Case 1, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(200, 10, 10)).toBe('Not a Triangle');
    });//Test Case 2, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });//Test Case 3, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });//Test Case 4, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 1, 10)).toBe('Isosceles');
    });//Test Case 5, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 200, 10)).toBe('Not a Triangle');
    });//Test Case 6, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });//Test Case 7, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });//Test Case 8, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 10, 1)).toBe('Isosceles');
    });//Test Case 9, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 10, 200)).toBe('Not a Triangle');
    });//Test Case 10, BVA

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
    });//Test Case 11, BVA

    //end of BVA



    //The next ones are equivalence partitioning, testing valid and invalid areas to ensure the sum of two sides is not < the third side
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    }); //works because 3 is not less than 1 + 2

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
    }); //works because 10 + 10 > 5, Test Case 11 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(50, 10, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 < 50, Test Case 12 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
    }); //works because 10 + 10 > 5, Test Case 11 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(50, 10, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 < 50, Test Case 12 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 5, 10)).toBe('Isosceles');
    }); //works because 10 + 10 > 5, Test Case 13 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 50, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 < 50, Test Case 14 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    }); //works because 10 + 10 > 5, Test Case 15 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 10, 50)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 < 50, Test Case 16 EP


    //end of PA

    //These last ones are more BVA, testing boundaries of side + side > side
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(20, 10, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 < 20, Test Case 17 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(19, 10, 10)).toBe('Isosceles');
    }); //does not work because 10 + 10 < 20, Test Case 17 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(20, 10, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 == 20, Test Case 17 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(19, 10, 10)).toBe('Isosceles');
    }); //should work because 10 + 10 > 19, Test Case 18 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 20, 10)).toBe('Not a Triangle');
    }); //does not work because 10 + 10 == 20, Test Case 19 EP

    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(10, 19, 10)).toBe('Isosceles');
    }); //does not work because 10 + 10 > 19, Test Case 20 EP

  });


  //minor change
  