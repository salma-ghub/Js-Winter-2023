addGuest(guestName, partySize) {

    if (this.rCurrentStatus.localeCompare('open') !== 0)  {

      console.log(`Sorry, ${this.#restaurantInfo.rName} is currently closed. Can't add guests.`);

    } else if (partySize <= 0) {

      console.log('Party size should be greater than 0.');

    } else if (this.#restaurantInfo.rTotalGuestsNow + partySize <= this.#restaurantInfo.rGuestsCapacity ) {

      this.#restaurantInfo.rTotalGuestsNow += partySize;

      console.log(`Added ${guestName} and their party of ${partySize} to the restaurant.`);

    } else {

      console.log(`Sorry, there isn't enough capacity to add ${guestName} and their party of ${partySize}.`);

    }

} 

removeGuest(guestName, partySize) {

    if (this.rCurrentStatus.localeCompare('open') !== 0)  {

        console.log(`${this.#restaurantInfo.rName} is currently closed. Can't remove guests.`);

    } else if (partySize <= 0) {

        console.log('Party size should be greater than 0.');

    } else if (this.#restaurantInfo.rTotalGuestsNow  - partySize >= 0) {

        this.#restaurantInfo.rTotalGuestsNow -= partySize;

        console.log(`Removed ${guestName} and their party of ${partySize} from the restaurant.`);

    } else {

        console.log(`Can't remove ${partySize} guests. There are only ${this.#restaurantInfo.rTotalGuestsNow} guests.`);

    }

}


showCurrentGuestCount() {

    console.log(`Current guest count is ${this.#restaurantInfo.rTotalGuestsNow}.`);

}