addMembers(numOfMembers) {
    if (!houseId) {
       console.log(`Sorry, this house is not registered. Can't add ${numOfMembers} members.`);
    }  else if (numOfMembers <= 0) {
       console.log('Number of members should be greater than 0.');
    }  else {
       totalMembers += numOfMembers;
       console.log(`Added ${numOfMembers} members to the house.`);
    }

}



removeMembers(numOfMembers) {
 
    if (!houseId) {
       console.log(`Sorry, this house is not registered. Can't remove ${numOfMembers} members.`);
    }  else if (numOfMembers <= 0) {
       console.log('Number of members should be greater than 0.');
    }  else {
       totalMembers -= numOfMembers;
       console.log(`Removed ${numOfMembers} members from the house.`);
    }

}


showTotalMembers() {
    console.log(`The number of total members are ${totalMembers}.`);
}




 