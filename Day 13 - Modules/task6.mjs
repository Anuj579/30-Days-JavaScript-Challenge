// Activity 4: Using Third-Party Modules 

import _ from 'lodash'

const array = [1,2,3,4,5,6,7,8,9]

const chunkedArray = _.chunk(array, 3)

console.log(chunkedArray);