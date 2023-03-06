addGuest(guestName, partySize) {
    if (!this.rIsOpen) {
      console.log(`Sorry, ${this.rName} is currently closed.`);
    } else if (this.rCurrentGuestCount + partySize <= this.rMaxGuestCapacity) {
      this.rCurrentGuestCount += partySize;
      console.log(`Added ${guestName} and their party of ${partySize} to the restaurant.`);
    } else {
      console.log(`Sorry, there isn't enough capacity to add ${guestName} and their party of ${partySize}.`);
    }
}
  
removeGuest(guestName, partySize) {
    if (!this.rIsOpen) {
        console.log(`${this.rName} is currently closed. Can't remove guests.`);
    } else if (this.rCurrentGuestCount - partySize >= 0) {
        this.rCurrentGuestCount -= partySize;
        console.log(`Removed ${guestName} and their party of ${partySize} from the restaurant.`);
    } else {
        console.log(`Can't remove ${partySize} guests. There are only ${this.rCurrentGuestCount} guests.`);
    }
}
  
showCurrentGuestCount() {
    console.log(`Current guest count is ${this.rCurrentGuestCount}.`);
}
  