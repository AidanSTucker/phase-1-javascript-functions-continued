function saturdayFun(event = "roller-skate") {
    return(`This Saturday, I want to ${event}!`);
}



function mondayWork(work = "go to the office") {
    return(`This Monday, I will ${work}.`);
}


function wrapAdjective(input = "||") {
   return function (flare = "special") {
    return (`You are ${input}${flare}${input}!`);
    }
}