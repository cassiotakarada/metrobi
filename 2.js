async function writeArrayWithDelays(array) {
  for (let i = 0; i < array.length; i++) {
    const delay = Math.pow(2, i) * 1000;
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    console.log(array[i]);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeArrayWithDelaysAlt(array) {
  for (let i = 0; i < array.length; i++) {
    const delay = Math.pow(2, i) * 1000; 
    await sleep(delay);
    
    console.log(array[i]);
  }
}

console.log('Code started...');
writeArrayWithDelays(['a', 'b', 'c', 'd']);
