function add(...numbers) {
    let total = numbers.reduce(function(total, next){
        return total + next;
    });

    console.log(total);
}

add(1, 2, 3, 4);

//--anonima--//

function add(...numbers) {
    let total = numbers.reduce((total, next) => total + next); //arrow function

    console.log(total);
}

add(1, 2, 3, 4);
