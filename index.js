function receivesAFunction(spy){
    return spy();

}

function returnsANamedFunction()
{
    console.log('hi')
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction(){

    return (function(){
        console.log("Anonymous");
    });
} 

