function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    
    const result = Array.from(duplicates);
    return result.length === 0 ? "There is no duplicate" : result;
}

function findDuplicatesWithReduce(arr) {
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
    
    const result = Object.keys(counts).filter(key => counts[key] > 1)
        .map(key => {
            return isNaN(key) ? key : Number(key);
        });
    
    return result.length === 0 ? "There is no duplicate" : result;
}

console.log("Testing findDuplicates function:");
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
console.log(findDuplicates(['a', 'b', 'c', 'b', 'd', 'a']));
console.log(findDuplicates([1, 2, 3, 4, 5]));
console.log(findDuplicates([]));

console.log("\nTesting findDuplicatesWithReduce function:");
console.log(findDuplicatesWithReduce([1, 2, 3, 2, 4, 5, 1]));
console.log(findDuplicatesWithReduce(['a', 'b', 'c', 'b', 'd', 'a']));
console.log(findDuplicatesWithReduce([1, 2, 3, 4, 5]));
console.log(findDuplicatesWithReduce([]));