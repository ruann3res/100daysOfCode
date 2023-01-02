function ageInDays(age){
    if (isNaN(age) || age < 0) {
    throw Error('Age must be valid!');
  }

     return age * 365
}
module.exports = { ageInDays };