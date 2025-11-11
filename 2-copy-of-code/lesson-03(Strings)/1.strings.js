// string = text 

'hello' // string -> 'hello' 
alert('hello'); // popup -> 'hello'

// Concatenation = (combine strings together)
'some' + 'text' // 'sometext'
'some' + 'more' + 'text' // 'somemoretext'

typeof 2 // 'number' 
typeof 'hello' // 'string' 

// Type coercion (automatic type conversion)
'hello' + 3 // 'hello3'   <- here 3 is a string not number
'$' + 20.95 + 7.99 // '$20.957.99'
// Strings also follow the Order of Operations
'$' + (20.95 + 7.99) // '$28.9399999999999998'
'$' + (2095 + 799) / 100 // '28.94'

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100 // 'Items (2): $28.94'
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100); 


/*
  3 ways to create a string: 
  1. '...' -> in js, use this by default
  2. "..." 
  3. `...` = template strings 
*/

// -----> way - 1 
'hello'

// -----> way - 2
"hello" 
// prbolem: 
// 'I'm learning JavaScript'// <- error use "..."
"I'm learning JavaScript" // solved 
// another solution: 1. Escape Character > \'
'I\'m learning JavaScript'

// 2. Escape Character -> \" = double quote that is just a text 

// 3. Escape Character -> \n = newline character 
alert('some\ntext'); 

// Escape Characters > \'    \"    \n

// -----> way - 3 
`hello` // = template strings 
/*
  Template strings: 
  1. Interpolateion = insert value directly into a string 
  2. Multi-line Strings
*/
// ---> 1
`Items (${1 + 1}): $${(2095 + 799) / 100}`
// Interpolations is a much cleaner way that Concatenation
// Intepolation = recommended solution

// ---> 2
`sum
text`



// ---------------------------------------
// what sould we use to create a string? 
// 1. Use -> '...' by default
// 2. If 

