/*
* Complete the 'getTotalX' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
* 1. INTEGER_ARRAY a
* 2. INTEGER_ARRAY b
*/
function getTotalX(a, b) {

    let maxNumber = Math.max(...b)
    let minNumber = Math.min(...a)
    let band = false

    let cont = 0


    for (let i = minNumber; i <= maxNumber; i++) {

        band = false

        for (let j = 0; j < a.length; j++) {

            if (i % a[j] != 0) {
                band = true
            }
        }

        for (let k = 0; k < b.length; k++) {

            if (b[k] % i != 0) {
                band = true
            }
        }

        if (band == false) {
            cont++
        }

    }


    return cont
}
