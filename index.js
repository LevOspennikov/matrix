class Matrix {
    constructor(matrix) {
        this._matrix = matrix;
    }

    * _makeGen() {
        let pathFunctions = [
            (t) => { t.y--; return t},
            (t) => { t.x++; return t},
            (t) => { t.y++; return t},
            (t) => { t.x--; return t}];
        const n = this._matrix.length - 1; 
        let coords = {x :  n / 2, y : n / 2 };
        let len = 1;
        let i = 0;
        while (true) {
            for (let k = 0; k < 2; k++) {
                for (let j = 0; j < len; j++) {
                     if (coords.y || coords.x) {
                        yield this._matrix[coords.x][coords.y];
                    } else {
                        yield this._matrix[coords.x][coords.y];
                        return;
                    }
                    coords = pathFunctions[i](coords);
                }
                i = (i + 1) % pathFunctions.length; // make functions rotate
            }
            len += 1;
        }  
    }

    toString() {
        return [...this._makeGen()].join(' ');
    }
}

module.exports = Matrix;
