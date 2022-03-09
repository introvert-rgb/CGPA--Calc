let dataSet = {
    semester01: {
        subjectCodes: ['BCHE/BCHH-111 :', 'BCH-111 :', 'BCH-112 :', 'BCH-113 :', 'BCH-114 :', 'BCH-115 :'],
        subjectNames: [' Language(Hindi/English) :', 'Financial Accounting - I :', 'Principles Of Management :', 'Business Environment :', 'Monetary Theory :', ' Fundamentals Of Marketing :'],
        subjectWeightages: [3, 4, 3, 3, 4, 3]

    },
    semester02: {
        subjectCodes: ['BCH-121 :', 'BCH-122 :', 'BCH-123 :', 'BCH-124 :', 'BCH-125 :', 'BCH-126 :'],
        subjectNames: ['Business Organisation', 'Financial Accounting -II', 'Banking and Financial Institutions', 'Business Entrepreneurship', 'Fundamentals of Human Resource Management', 'Information Technology & Business Communication'],
        subjectWeightages: [3, 4, 3, 3, 3, 4]

    },
    semester03: {
        subjectCodes: ['BCH-211 :', 'BCH-212 :', 'BCH-213 :', 'BCH-214 :', 'BCH-215 :', 'BCH-216 :'],
        subjectNames: ['Business Regulatory Framework I', 'Business Economics I', 'Specialised Accounts I', 'Cost Accounting', 'Fundamentals of Business Finance', 'Basic Statistics'],
        subjectWeightages: [3, 3, 4, 3, 3, 4]
    },
    semester04: {
        subjectCodes: ['BCH-221 :', 'BCH-222 :', 'BCH-223 :', 'BCH-224 :', 'BCH-225 :', 'BCH-226 :'],
        subjectNames: ['Business Regulatory Framework II', 'Business Economics II', 'Specialised Accounts II', 'Business Mathematics', 'Public Finance', 'Business Statistics'],
        subjectWeightages: [3, 3, 4, 3, 3, 4]
    },
    semester05: {
        subjectCodes: ['BCH-311 :', 'BCH-312 :', 'BCH-313 :', 'BCH-314 :', 'BCH-315 :', 'BCH-316 :'],
        subjectNames: ['Advance Company Accounts', 'Income Tax Laws & Accounts', 'Company Law', 'Banking Law & Practice', 'Auditing', 'Business Ethics & Governance'],
        subjectWeightages: [4, 4, 3, 3, 3, 3]
    },
    semester06: {
        subjectCodes: ['BCH-321 :', 'BCH-322 :', 'BCH-323 :', 'BCH-324 :', 'BCH-325 :', ' ', ' '],
        subjectNames: ['Financial Analysis', 'Indirect Taxes', 'Secreterial Practice', 'Principles of Insurance', 'Comprehensive Viva Voice', 'Elective Courses 1', 'Elective Courses 2'],
        subjectWeightages: [4, 3, 3, 3, 3, 3, 3]
    }
};

let dropBtn = document.querySelector('#semester');
let subjectName = document.querySelectorAll('.subjectName');
let subjectCode = document.querySelectorAll('.subjectCode');
let inputFields = document.querySelectorAll('.inputNum');
let mySet = [];
let gradeWeightages = 0; //returns grade points of respective semesters
let sixthSem = document.querySelector('.sixth');
let dropSelect = 0;
let grade = document.querySelector('.grade');
let Btn = document.querySelector('.calc-btn');
let doneMsg = document.querySelector('.doneMsg');
let overlay = document.querySelector('.overlay');
dropBtn.addEventListener('change', () => {
    dropSelect = dropBtn.value;

    gradeWeightages = displaySub(dropSelect);

    if (dropSelect == 'semester06') {
        sixthSem.classList.remove('hidden');

    } else {
        sixthSem.classList.add('hidden');
    }
    if (mySet.length === 6) {
        calculate(mySet);
        console.log('drop')
    }

});
window.addEventListener('load', () => {
    dropSelect = dropBtn.value;

    gradeWeightages = displaySub(dropSelect);

});



function displaySub(arg) {
    let subjectNum = dataSet[arg].subjectCodes;
    let subjectTitle = dataSet[arg].subjectNames;
    gradeWeightages = dataSet[arg].subjectWeightages;
    for (let key in subjectNum) {
        subjectCode[key].innerHTML = subjectNum[key];
        subjectName[key].innerHTML = subjectTitle[key];
    }
    return gradeWeightages;
};


function checkingGrades() {
    let inputCheck = inputFields.forEach((inputNum, index) => {
        inputNum.addEventListener('change', () => {
            mySet[index] = inputNum.value;

            if (mySet[index] > 0 && mySet[index] <= 100) {
                if (mySet[index] >= 90) {
                    mySet[index] = 10;

                } else if (mySet[index] >= 80) {
                    mySet[index] = 9;

                } else if (mySet[index] >= 70) {
                    mySet[index] = 8;

                } else if (mySet[index] >= 60) {
                    mySet[index] = 7;

                } else if (mySet[index] >= 50) {
                    mySet[index] = 6;

                } else if (mySet[index] >= 40) {
                    mySet[index] = 5;

                } else if (mySet[index] >= 30) {
                    mySet[index] = 4;

                } else if (mySet[index] >= 20) {
                    mySet[index] = 3;

                } else if (mySet[index] >= 10) {
                    mySet[index] = 2;

                } else {
                    mySet[index] = 1;

                }

            } else {
                alert('enter valid marks')
            }
            console.log('input');
            console.log(dropSelect);
            if (dropSelect !== 'semester06') {
                if (mySet.length === 6) {
                    calculate(mySet);
                    console.log(mySet)
                }
            } else {
                if (mySet.length === 7) {
                    calculate(mySet);
                    console.log(mySet)
                }
            }
        });
    });

}

let finalArray = []


function calculate(marks) {
    let gradeArray = marks;
    for (let mark in marks) {
        finalArray[mark] = (gradeArray[mark] * gradeWeightages[mark]);
    }
    console.log(finalArray);
    final(finalArray);
}

function final(numbers) {

    let total = 0;
    for (let num in numbers) {
        total += numbers[num];
    }
    if (numbers.length === 7) {
        grade.innerHTML = (total / 22).toFixed(2);
    } else {
        grade.innerHTML = (total / 20);
    }

}
checkingGrades();
Btn.addEventListener('click', () => {
    // if (finalArray.length == 6 || finalArray.length == 7) {
    //     overlay.classList.toggle('hidden');
    //     doneMsg.classList.toggle('hidden');
    // }
    overlay.classList.toggle('hidden');
    doneMsg.classList.toggle('hidden');

});
overlay.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    doneMsg.classList.toggle('hidden');
})