function countdown(num){
    // variable to store the interval so we can clear it later
    const x = setInterval(() => {

        // logs curr num
        console.log(num);

        // decreaments the num by 1
        num--;

        // checks if num is 0
        if (num < 0){

            // stops the interval from continuing
            clearInterval(x);

            // logs done 
            console.log('Done!');
        }

       // interval set every second  
    }, 1000);
}

function randomGame(){
    // creates counter var
    let counter = 0;

    // creates interval in a variable to clear later if needed 
    const y = setInterval(() => {

        // generates random num between 0 and 1 

        const ranNum = Math.random();

        // increaments counter by 1
        counter++;

        // checks if num is greater than 0.75
        if (ranNum > 0.75){

            //clears interval 
            clearInterval(y);

            console.log(`Attempted tries before reaching a number greater than 0.75: ${counter}`);
        }

        // logs the random num and curr counter 
        console.log(`Random number: ${ranNum}, Counter: ${counter}`);
        
    }, 1000);
}