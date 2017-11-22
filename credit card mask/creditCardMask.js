// return masked string
function maskify(cc) {
  
// return first digit up until the last four digits  
return cc.slice(0, -4)
  
// replace everything except the last four digits with a hash (#)  
.replace(/./g,"#")

// add back the last four digits after the hashes (#)
+ cc.slice(-4);
}
