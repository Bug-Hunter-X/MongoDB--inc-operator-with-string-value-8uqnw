# MongoDB $inc Operator with String Value

This repository demonstrates an uncommon bug related to the `$inc` operator in MongoDB when used with an incorrect data type. Specifically, it shows what happens when you try to increment a counter field with a string value instead of a number. This can lead to unexpected behavior and data corruption.

## Bug Description
The provided code demonstrates the incorrect use of the `$inc` operator in a MongoDB update operation. Using a string ('1') instead of a number (1) for the increment value prevents the expected increment behavior and throws an error. The correct usage requires providing a numerical value. This can cause unexpected errors in your application, particularly if you are relying on atomic counters for generating IDs or tracking values.

## Solution
The solution involves carefully checking the data types used when calling the `$inc` operator.  Ensure you're providing a numerical value for the increment, avoiding strings. This will result in the expected atomic counter operation.