const textMes = 'Hello';
// /**
//  * Global env
//  * Record:{textMes: 'Hello'}
//  * Parent: null
//  */

const numOne = 10;

// /**
//  * Global env
//  * Record:{textMes: 'Hello', numOne: 10}
//  * Parent: null
//  */

// /**
//  [[ Environment ]] = Global env
//  */

const logMes = () => {
  const numOne = 15;
// /**
//  * logMes env
//  * Record:{textMes: 'Hello', numOne: 15, logMas: <function>}
//  * Parent: Global env
//  */
  const nestedFunc = () => {
    console.log(numOne);
  };

// /**
//  * nestedFunc env
//  * Record:{textMes: 'Hello', numOne: 10, logMas: <function>}
//  * Parent: logMes env
//  */
  nestedFunc();
  console.log(textMes)
}

// /**
//  * logMes env
//  * Record:{textMes: 'Hello', numOne: 10, logMas: <function>}
//  * Parent: Global env
//  */

logMes()
