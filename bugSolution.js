```javascript
// Correct usage of $inc operator
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { count: 1 } } );
```