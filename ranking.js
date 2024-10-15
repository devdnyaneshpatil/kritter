const collegeArr = [
  {
    name: "College A",
    location: "New York",
    fees: 20000,
    ranking: 1,
  },
  {
    name: "College B",
    location: "California",
    fees: 15000,
    ranking: 2,
  },
  {
    name: "College C",
    location: "New York",
    fees: 25000,
    ranking: 3,
  },
  {
    name: "College D",
    location: "New York",
    fees: 10000,
    ranking: 4,
  },
];

let rankForm = document
  .getElementById("rank-form")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const prefLocation = document.getElementById("location").value;
    const maxFee = parseInt(document.getElementById("fee").value);
    const rankingWeight = parseInt(document.getElementById("rankweight").value);
    const feesWeight = parseInt(document.getElementById("feesweight").value);

    let filteredColleges = collegeArr.filter((college) => {
      return college.location === prefLocation && college.fees <= maxFee;
    });

    filteredColleges.forEach((college) => {
      const score =
        college.ranking * rankingWeight + (college.fees / maxFee) * feesWeight;
      college.score = score.toFixed(2);
    });

    filteredColleges.sort((a, b) => a.score - b.score);

    const collegeListDiv = document.getElementById("college-list");
    collegeListDiv.innerHTML = "";

    if (filteredColleges.length === 0) {
      collegeListDiv.innerHTML = "<p>No colleges match your preferences.</p>";
    } else {
      filteredColleges.forEach((college) => {
        const collegeInfo = `<p>Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score}</p>`;
        collegeListDiv.innerHTML += collegeInfo;
      });
    }
  });