const Matrix = require('../index.js');
require('jasmine-expect');

describe('Matrix', () => {

    it('should correct generate messages', () => {
        const matrix3 = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]);

        expect(matrix3.toString()).toEqual('5 4 7 8 9 6 3 2 1');

        const matrix5 = new Matrix([
            [1, 2, 3, 4, 5,],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ]);

        expect(matrix5.toString()).toEqual('13 12 17 18 19 14 9 8 7 6 11 16 21 22 23 24 25 20 15 10 5 4 3 2 1');
    });

    it('should always change parity', () => {
      
        for (let n = 1; n <= 15; n += 2) {
            const matrixN = [];
            let ans = '';
            for (let i = 0; i < n; i++) {
                matrixN.push([]);
                for (let j = 0; j < n; j++) {
                    matrixN[i][j] = (i + j) % 2
                    if (i + j === 0) {
                        ans += (i + j) % 2
                    } else {
                        ans += ' ' + ((i + j) % 2);
                    }
                } 
            }
            expect(new Matrix(matrixN).toString()).toEqual(ans);
        }
    });
});
