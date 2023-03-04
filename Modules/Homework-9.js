class Teacher {

    // static-variable
    static courseData = [
        { 
            cName: 'Web Development',
            cSalary: 15000
        },
        { 
            cName: 'SDET Course',
            cSalary: 14000
        },
        { 
            cName: 'Backend Development',
            cSalary: 13000
        },
        { 
            cName: 'FrontEnd Development',
            cSalary: 12000
        },
        { 
            cName: 'Manual QA',
            cSalary: 10000
        }
    ]

    // static-variable
    static teacherIdCounter = 0;
    
    teacherInfo = {
            tId: 0,
            tName: 'Default Name',
            tAge: 0,
            tCourseName: 'Default Course Name',
            tSalary: 0,

    }


    constructor(name, age, courseName) {
        if (age < 21) {
            console.log('\nSorry: We only hire who is 21 or above');
            throw 'Invalid age'
        } else if (!this.isCourseValid(courseName)) {
            console.log(`\nSorry: We don't have any course for ${courseName}`);
            throw 'Invalid course name'
        } else {
            this.teacherInfo.tName = name;
            this.teacherInfo.tAge = age;
            const courseObject = this.isCourseValid(courseName);
            this.teacherInfo.tCourseName = courseObject.cName;
            this.teacherInfo.tSalary = courseObject.cSalary;
            Teacher.teacherIdCounter++;
            this.teacherInfo.tId = Teacher.teacherIdCounter;
            console.log('\nCongratulations to be part of the institute.');
            console.log(`Your teacher id: ${this.teacherInfo.tId}`);
        }
    }

  
    showMyDetails() {
        console.log(`\Teacher Info:`);
        console.log(`Id : ${this.teacherInfo.tId}`);
        console.log(`Name : ${this.teacherInfo.tName}`);
        console.log(`Course name : ${this.teacherInfo.tCourseName}`);
        console.log(`Salary : $${this.teacherInfo.tSalary}`);
    }

    changeName(newName) {
       if (this.teacherInfo.tName.localeCompare(newName) === 0); {
            console.log('Name cannot be updated; as you have same name already stored in the system.');
       } else {
        this.teacherInfo.tName = newName;
        console.log('Your name in the system is updated to new-name');
       }

    }

    gradeStudent(studentId, studentGrade) {
        if (sId !== studentId) {
            console.log('Incorrect student-id provided');
        } else if (sGrade.localeCompare(studentGrade) !== 0) {
                console.log('Student is already graded; to update student-grade pls use updateGrade-method');
        } else {
            sGrade = studentGrade;
            console.log('Thank you for grading student with id = student-id');
        }
    }

    updateGrade() {
        
    }


















}