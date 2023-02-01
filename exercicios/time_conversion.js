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