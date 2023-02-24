
// Due date: Feb 23 (eod)

/**
 * Analyse the requirements and complete the code for below functions:
 * 
 *      changeName
 *      changeCourse
 *      makePayment
 * 
 * Pls refer "Class16/StudentTeacherSoftware-2/Requirements.js" for requirements
 * 
 */

changeName(newName) {
    if (newName.localeCompare(this.studentInfo.sName) === 0) {
        console.log(`\nName cannot be updated; as you have same name already stored in the system.`);
    } else {
        this.studentInfo.sName = newName;
        console.log(`\nYour name in the system is updated to '${newName}'`);
    }
}


changeCourse(newCourse) {
    if (!this.isCourseValid(newCourse)) {
        console.log(`\nInstitute does not provide any course on '${newCourse}'`);
    } else if (this.studentInfo.sCourseName.toLowerCase().localeCompare(newCourse.toLowerCase()) === 0) {
        console.log(`\nYou are already enrolled in the '${this.studentInfo.sCourseName}' course`);
    } else {
        const courseObject = this.isCourseValid(newCourse);
        this.studentInfo.sCourseName = courseObject.cName;
        this.studentInfo.sBalance = courseObject.cPrice;
        console.log(`\nYour course in the system is updated to '${this.studentInfo.sCourseName}'`);
        console.log(`Your updated balance is $${this.studentInfo.sBalance}`);
    }
}


makePayment(amount) {
    if (amount <= 0) {
        console.log(`\nPls provide a valid amount for payment.`);
    } else if (amount > this.studentInfo.sBalance) {
        console.log(`\nYou cannot pay more than the balance amount ($${this.studentInfo.sBalance})`);
    } else {
        this.studentInfo.sBalance -= amount;
        console.log(`\nThank you for the payment of $${amount}. Your updated balance is $${this.studentInfo.sBalance}`);
    }
}


