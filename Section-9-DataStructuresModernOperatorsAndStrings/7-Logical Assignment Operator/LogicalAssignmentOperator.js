// Topic: 10
// Logical Assignment Operator:
//ES 2021

const rest1 = {
    name: 'Tapri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'Coffee shop',
    owner: 'Chetan Sharma'
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;  // o/p: {name: 'Tapri', numGuests: 20}
// rest2.numGuests = rest2.numGuests || 10;  // shortcircuiting: {name: 'Coffee shop', owner: 'Chetan Sharma', numGuests: 10}

// rest1.numGuests ||= 10;  // o/p: {name: 'Tapri', numGuests: 20}

// when (numGuests: 0) then o/P: {name: 'Tapri', numGuests: 10}
// so 0 is the falsy value  for OR , its not gonna work
// use Nullish Coalescing operator

// rest2.numGuests ||= 10;  // o/p: {name: 'Coffee shop', owner: 'Chetan Sharma', numGuests: 10}


// Nullish Coalescing Operator
rest1.numGuests ??= 10   // o/P: {name: 'Tapri', numGuests: 0}
rest2.numGuests ??= 10;  // o/p: {name: 'Coffee shop', owner: 'Chetan Sharma', numGuests: 10}


// AND Operator: return first falsy value

// rest1.owner = rest1.owner && '<ANONYNOUS>'  // {name: 'Tapri', numGuests: 0, owner: undefined}
// rest1.owner does not exist(undefined) that's why undefined, so use Nullishing operator

// rest2.owner = rest2.owner && '<ANONYMOUS>'  // {name: 'Coffee shop', owner: '<ANONYMOUS>', numGuests: 10}
// rest2.owner does exist and it is truthy so <ANONYMOUS> is falsy value and shortcircuiting.
//---------------
// rest1.owner = rest1.owner && '<ANONYNOUS>'  // {name: 'Tapri', numGuests: 0, owner: undefined}
rest1.owner &&= '<ANONYNOUS>'                  // {name: 'Tapri', numGuests: 0 }
// rest2.owner = rest2.owner && '<ANONYMOUS>'  // {name: 'Coffee shop', owner: '<ANONYMOUS>', numGuests: 10}
rest2.owner &&= '<ANONYMOUS>'                  // {name: 'Coffee shop', owner: '<ANONYMOUS>', numGuests: 10}
//---------------

// Nullish Coalescing Operator
rest1.owner ??= '<ANONYNOUS>' // {name: 'Tapri', numGuests: 0, owner: '<ANONYNOUS>'}
rest2.owner ??= '<ANONYNOUS>' // {name: 'Coffee shop', owner: 'Chetan Sharma', numGuests: 10}


console.log(rest1)
console.log(rest2)