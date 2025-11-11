// https://supersimple.dev/projects/amazon/

// Basics of Math: 
2 + 2 
10 - 3 
10 * 3 
10 / 2 

2 + 2 + 2 
2.2 + 2.2 

10.90 * 2 + 20.95
10.90 * 2 + 20.95 + 4.99

// Order of Operations: (operator precedence)
/*
  1. (...)
  2. * / 
  3. + -
 */
1 + 1 * 3
(1 + 1) * 3
/*
  * / have same priority 
  2 * 3 / 5 
  -> calculate from left to right. 

  + - have the same priority 
  2 + 3 - 5 
  -> calculate from left to right.
  
  in short: B O DM AS 
*/
20.95 + 7.99 * 2
36.93 * 0.1 
(20.95 + 7.99 * 2) * 0.1


// Inaccuracies with Floats: (Computers have a problem working with floats.)
0.1 + 0.2 
20.95 + 7.99 // creats inaccurate value 
/*
  How do we avoid this problem? 
  Best practice when calculating money
  = calculate in cents insted of dollars
*/
(2095 + 799) / 100
/*
  Calculations with floats are sometimes inaccurate. 
  When working with money:
  1. Do the calculation in cents. 
  2. Convert back to dollars. 
*/


// How to round numbers: 
Math.round(2.2) // takes floor value = 2
Math.round(2.8) // takes ceiling value = 3 

((2095 + 799) * 0.1) / 100 
Math.round((2095 + 799) * 0.1) / 100