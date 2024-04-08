
/*
1. Viết hàm getRandomMark trả về điểm random từ start đến end, bước nhảy step
suggest:
            function getRandomMark(start, end, step) {
                        …
                        return …
            }
            getRandomMark(6, 10, 0.5) sẽ trả về điểm ngẫu nhiên từ 6-10, cách nhau 0.5 => 6, 6.5, 7,…10
*/
function getRandomMark(start, end, step) {
    const numberStep = Math.floor((end - start) / step);
    const randomStep = Math.floor(Math.random() * numberStep)
    return start + randomStep * step
}
console.log('getRandomMark', getRandomMark(5, 10, 0.5));

/*
2. Tạo hàm generateStudentMark(name) trả về 1 object có dạng:
            {
                        name: string,
                        marks: {
                                    literature: number,
                                    maths: number,
                                    chemistry: number,
                                    history: number,
                                    biology: number
                        }
            }
maths, literature, history, chemistry, biology tương ứng với điểm các môn toán, văn, sử, hoá, sinh; giá trị là kết quả của hàm getRandomMark ở trên
*/
function generateStudentMark(name) {
    return {
        name: name,
        marks: {
            literature: getRandomMark(0, 10, 1),
            maths: getRandomMark(0, 10, 1),
            chemistry: getRandomMark(0, 10, 1),
            history: getRandomMark(0, 10, 1),
            biology: getRandomMark(0, 10, 1)
        }
    }
}
console.log('generateStudentMark', generateStudentMark('Minh'));

/*
3. Tạo 1 mảng markList gồm khoảng 5-10 bạn sinh viên
*/
const studentNames = [
    "Anh",
    "Bình",
    "Cường",
    "Dương",
    "Em",
    "Giang",
    "Hiếu",
    "Lan",
    "Minh",
    "Nhung"
]

const markList = studentNames.map(studentName => generateStudentMark(studentName))
console.log('markList', markList);

/*
4. Viết hàm tính điểm trung bình môn với điểm môn văn và toán nhân đôi ( viết hàm chung để có thể xử dụng nếu có nhiều hơn 5 môn kể trên), 
kết quả trả về là 1 object có key là tên các bạn sinh viên, giá trị là điểm trung bình môn
*/
function findMediumStudent(list) {
    const weight = { maths: 2, literature: 2 };
    return list.map(student => {
        let totalPoints = 0;
        let totalSubjects = 0;
        for (let subject in student.marks) {
            const subjectIndex = weight[subject] || 1; // Mặc định hệ số là 1 nếu không được định nghĩa trong weight
            totalPoints += student.marks[subject] * subjectIndex;
            totalSubjects += subjectIndex;
        }
        const medium = parseFloat((totalPoints / totalSubjects).toFixed(1));
        return {
            name: student.name,
            point: medium
        };
    });
}
console.log('mediumStudent', findMediumStudent(markList));

//5.Viết hàm tìm kiếm những bạn có điểm trung bình >= 8
function findMediumStudentGood(mediumStudentList) {
    const mediumStudentGood = mediumStudentList.filter(medium => {
        if (medium.point >= 8)
            return medium.name
    })
    return mediumStudentGood;
}
console.log('findMediumStudentGood', findMediumStudentGood(mediumStudent(markList)));

//tìm bạn học tốt nhất và kém nhất từng môn
function findBestAndWorst(students) {
    const results = {};
    students.forEach(student => {
        const name = student.name;
        const studentMarks = student.marks;
        for (let subject in studentMarks) {
            if (!results[subject]) {
                results[subject] = {
                    best: { name, score: studentMarks[subject] },
                    worst: { name, score: studentMarks[subject] }
                };
            } else {
                if (studentMarks[subject] > results[subject].best.score) {
                    results[subject].best = { name, score: studentMarks[subject] };
                }
                if (studentMarks[subject] < results[subject].worst.score) {
                    results[subject].worst = { name, score: studentMarks[subject] };
                }
            }
        }
    });

    // chuyển kết quả đầu ra là tên học sinh
    const nameResults = {};
    for (let subject in results) {
        nameResults[subject] = {
            bestStudent: results[subject].best.name,
            worstStudent: results[subject].worst.name
        };
    }

    return nameResults;
}

console.log("findBestAndWorst", findBestAndWorst(markList))


// 6. Với mỗi điểm 8, 9, 10 lần lượt được thưởng 1000000, 2000000, 5000000. Tính số tiền thưởng của từng bạn
function rewardStudent(students) {
    return students.map(student => {
        let totalReward = 0;
        Object.values(student.marks).forEach(score => {
            switch (score) {
                case 8:
                    totalReward += 1000000;
                    break;
                case 9:
                    totalReward += 2000000;
                    break;
                case 10:
                    totalReward += 5000000;
                    break;
                default:
                    break;
            }
        });
        return { name: student.name, reward: totalReward };
    });
}
console.log('rewardStudent', rewardStudent(markList))

