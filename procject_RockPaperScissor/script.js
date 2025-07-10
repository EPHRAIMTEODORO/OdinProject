console.log("hello");

const computerChoice = function(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

const humanChoice = function(choice){
    choice = prompt("Rock Paper Scissor Shoot: ")
    return choice.toLowerCase();
}


const judge = function(){
    let man = humanChoice();
    let ai = computerChoice();
    console.log(ai)
    console.log(man)
    if(man ==='rock' && ai ==='scissor'){
        return 'man wins'
    }else if(man ==='rock' && ai ==='paper'){
        return 'ai wins'
    }else if(man ==='scissor' && ai ==='paper'){
        return 'man wins'
    }else if(man ==='scissor' && ai ==='rock'){
        return 'ai wins'
    }else if(man ==='paper' && ai ==='scissor'){
        return 'ai wins'
    }else if(man ==='paper' && ai ==='rock'){
        return 'man wins'
    }else if(ai ==='rock' && man ==='paper'){
        return 'man wins'
    }else if(ai ==='scissor' && man ==='paper'){
        return 'ai wins'
    }else if(ai ==='scissor' && man ==='rock'){
        return 'man wins'
    }else if(ai ==='paper' && man ==='scissor'){
        return 'man wins'
    }else if(ai ==='paper' && man ==='rock'){
        return 'ai wins'
    }else if(ai ==='rock' && man ==='scissor'){
        return 'ai wins'
    }else{
        return 'draw'
    }
}
console.log(judge());