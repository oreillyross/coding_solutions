const description = (nameAndOccupation) => {
  if (nameAndOccupation.length < 2) {
    return ["", "occupation missing"]
  }
  else {
    const [[first, last], occupation] = nameAndOccupation;
  
    return [`${first} is a ${occupation}`, "ok"];
  }
}

const [reg, status] = description([["Reginald", "Braithwaite"], "programmer"]);

