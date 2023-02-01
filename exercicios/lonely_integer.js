function lonelyinteger(a) {
    const temp = []
    for (let i = 0; i < a.length; i++) {
        if (temp.includes(a[i], a) === false) {
            temp.push(a[i])
        } else {
            
            temp.splice(temp.indexOf(a[i]), 1)
        }
    }
    return temp[0]
}

const listinha = [1, 2, 3, 4, 3, 2, 1];

lonelyinteger(listinha)

// Link do exercício
// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// https://www.w3schools.com/js/js_arrays.asp
// https://www.w3schools.com/jsref/jsref_sort.asp
// https://www.w3schools.com/jsref/jsref_push.asp
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
