const numbersLetters = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]


let button = document.getElementById("button")
let boxOne = document.getElementById("box1")
let boxTwo = document.getElementById("box2")
let boxThree = document.getElementById("box3")
let boxFour = document.getElementById("box4")
let boxFive = document.getElementById("box5")
let boxOneHex = document.getElementById("box1-hex")
let boxTwoHex = document.getElementById("box2-hex")
let boxThreeHex = document.getElementById("box3-hex")
let boxFourHex = document.getElementById("box4-hex")
let boxFiveHex = document.getElementById("box5-hex")


function colorCodeGenerator(){
    generateRandom = Math.floor(Math.random() * 16)
    return generateRandom

}

button.addEventListener(`click`, function(){
    let HexCodeBox1 = `#`
    let HexCodeBox2 = `#`
    let HexCodeBox3 = `#`
    let HexCodeBox4 = `#`
    let HexCodeBox5 = `#`



    for(let firstLoop = 0; firstLoop <6; firstLoop++){
        colorCode = numbersLetters[colorCodeGenerator()]
        HexCodeBox1 += colorCode
    }
    boxOne.style.backgroundColor = HexCodeBox1
    boxOneHex.innerText = HexCodeBox1

    for(let secondLoop = 0; secondLoop <6; secondLoop++){
        colorCode = numbersLetters[colorCodeGenerator()]
        HexCodeBox2 += colorCode
    }
    boxTwo.style.backgroundColor = HexCodeBox2
    boxTwoHex.innerText = HexCodeBox2

    for(let thirdLoop = 0; thirdLoop<6; thirdLoop++){
        colorCode = numbersLetters[colorCodeGenerator()]
        HexCodeBox3 += colorCode
    }
    boxThree.style.backgroundColor = HexCodeBox3
    boxThreeHex.innerText = HexCodeBox3

    for(let fourthLoop = 0; fourthLoop <6; fourthLoop++){
        colorCode = numbersLetters[colorCodeGenerator()]
        HexCodeBox4 += colorCode
    }
    boxFour.style.backgroundColor = HexCodeBox4
    boxFourHex.innerText = HexCodeBox4

    for(let fifthLoop = 0; fifthLoop < 6; fifthLoop++){
        colorCode = numbersLetters[colorCodeGenerator()]
        HexCodeBox5 += colorCode
    }
    boxFive.style.backgroundColor = HexCodeBox5
    boxFiveHex.innerText = HexCodeBox5


})

let i = 14
i++
console.log(i)