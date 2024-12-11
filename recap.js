function calculateFinalScore(obj) {
    if (typeof obj.name === "string") {
      if (obj.testScore <= 50 && obj.schoolGrade <= 30) {
        if ((obj.isFFamily == true)) {
          const result = obj.testScore + obj.schoolGrade + 20;
          if (result >= 80) {
            return true;
          }
        }
      }
    } else {
      return false;
    }
  }

  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }))
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }))
  console.log(calculateFinalScore("hello" ))
  console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }))