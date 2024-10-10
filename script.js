// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

//turn to object; restructure
const objVersion = {
  1: {
    id: 1,
    name: "Declare a Variable",
    due_at: "2023-01-25",
    points_possible: 50,
  },
  2: {
    id: 2,
    name: "Write a Function",
    due_at: "2023-02-27",
    points_possible: 150,
  },
  3: {
    id: 3,
    name: "Code the World",
    due_at: "3156-11-15",
    points_possible: 500,
  },
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function AssignmentNotDue(assignment) {
  return new Date(assignment.due_at) > new Date();
}


function getLearnerData(course, ag, submissions) {
  // const result = [];


  if (course.id !== ag.course_id) {
    throw "Course IDs do not match.";
  }


  // console.log("Course IDs match.");
  const assignmentObj = {};
  ag.assignments.forEach((assignment) => {
    assignmentObj[assignment.id] = assignment;
  });

  const studentTracker = {};

  // for (let i = 0; i < ag.assignments.length; i++) {
  //   assignmentObj[ag.assignments[i].id] = ag.assignments[i];
  // }



    const assignmentId = submission.assignment_id;
    const notDue = AssignmentNotDue(assignment);

    if (notDue === true) {
      //skip current iteration of the loop
      return;
    }

    if (
      assignment.points_possible <= 0 ||
      typeof assignment.points_possible !== "number" ||
      typeof submission.submission.score !== "number"
    ) {
      throw "Invalid Data";
    }
    const Late = submission.submission.submitted_at > assignment.due_at;
    const lateDeduction = assignment.points_possible * 0.1;

    const score = late
      ? submission.submission.score - lateDeduction
      : submission.submission.score;

    if (studentTracker[submission.learner_id]) {
      // do logic if we've seen this student before

      studentTracker[submission.learner_id].totalScore += score;
      studentTracker[submission.learner_id].totalPossible +=
        assignment.points_possible;
    } else {
      // logic if this is the first time we've seen this student
      studentTracker[submission.learner_id] = {
        id: submission.learner_id,
        totalScore: score,
        totalPossible: assignment.points_possible,
      };
      result.push()(studentTracker[submission.learner_id]);
    }console.log('iteratiob ${i}: ${result}');
    }


    //calculate average
    studentTracker[submission.learner_id].avg =
      studentTracker[submission.learner_id].totalScore /
      studentTracker[submission.learner_id].totalPossible;


      // calculate the score for each assignment
      studentTracker[submission.learner_id][assignmentId] =
      score / assignment.points_possible;

  // console.log(studentTracker);
  //  console.log(assignmentObj);

  // return result.map((summary) => {
  //   delete summary.totalScore
  //   delete summary.totalPossible
  //   return summary
  // });

  // // here, we would process this data to achieve the desired result.
  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  // return result;


try {
  const result = getLearnerData(
    CourseInfo,
    AssignmentGroup,
    LearnerSubmissions
  );
  console.log(result);
} catch (err) {
  console.log(err.message);
}
