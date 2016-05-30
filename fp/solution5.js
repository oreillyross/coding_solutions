 function checkUsersValid(goodUsers) {
      
      return function(submittedUsers) {
        return submittedUsers.every(
            submittedUser => goodUsers.some(
                goodUser => goodUser.id === submittedUser.id))
      }
 }
          

  
module.exports = checkUsersValid

   var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    console.log(
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    
    );
    // => true
    console.log(
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false
    )
    