function barbecueSkewers(grill){
  let vegetarian = 0
  let notvegan = 0 

  for(let skewers of grill){
    const hasMeat = skewers.includes('x');
    const IsVegetarian = skewers.includes('-o') && !hasMeat;

    if(IsVegetarian){
      vegetarian++
    }else if(hasMeat){
      notvegan++
    }
  }
    return [vegetarian, notvegan]
}


module.exports = { barbecueSkewers }