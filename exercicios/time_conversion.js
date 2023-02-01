function timeConversion(s) {
    // Write your code here
    let temp = ""
    const ampmid = s.slice(-2)
    const daynight = s.slice(-10,-8)
    let makeint = parseInt(s.slice(-10,-9))*10 + parseInt(s.slice(-9,-8))
    if (ampmid == "AM" && daynight == "12") {
        temp += "00"
        temp += s.slice(2)
        return temp.slice(0,-2)
    } else if (ampmid == "PM" && daynight != "12") {
        let a = makeint + 12
        let b = a.toString()
        temp += b
        temp += s.slice(2)
        return temp.slice(0,-2)
    } else {
        temp = s
        return temp.slice(0,-2)
    }
}

const tempo = "11:59:59PM"
timeConversion(tempo)

// link do exercício
// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// Material de apoio
// https://www.w3schools.com/js/js_comparisons.asp#gsc.tab=0
// https://www.w3schools.com/js/js_assignment.asp
// https://www.w3schools.com/js/js_string_methods.asp
// https://www.w3schools.com/jsref/jsref_tostring_number.asp