function smartGarbage(trash, bins) {
  let key=Object.keys(bins);
  for (let i = 0; i < key.length; i++) {
    if (trash === key) {
      return bins.key++;
   }
 }
 return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
