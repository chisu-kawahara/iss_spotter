
let creditLimit = 0;


const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    resolve(amount);
  });
};

console.log("Asking for $150, which should be okay ...");
loanOut(150) 
  .then((amountReceived) => { 
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => { 
    console.log(`\t-> Error: ${err}!`);
  });