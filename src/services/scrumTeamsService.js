import scrumTeamsJson from "../database/scrumTeams.json";

export default class ScrumTeamsService {
  getInitialScrumTeams() {
    var scrumTeams = JSON.parse(JSON.stringify(scrumTeamsJson));
    return scrumTeams;
  }

  getRandomEmployees(scrumTeams) {
    let employees = [];
    const keys = Object.keys(scrumTeams);
    keys.forEach((k) => {
      scrumTeams[k].members
        .filter((m) => m.isFamiliar === false)
        .forEach((member) => employees.push(member));
    });
    const indexOfEmployees = this.generateMultipleUniqueRandomNumbers(
      employees.length,
      6
    );
    let randomEmployees = indexOfEmployees
      .map((i) => employees[i])
      .map((employee) => {
        return { ...employee, isFamiliar: true };
      });
    return randomEmployees;
  }

  generateMultipleUniqueRandomNumbers(range, numberOfRandomNumbers) {
    if (range < numberOfRandomNumbers) {
      return Array.from(Array(range).keys());
    }

    var arr = [];
    while (arr.length < numberOfRandomNumbers) {
      var r = Math.floor(Math.random() * range);
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  updateScrumTeams(scrumTeams, employeeIds) {
    const keys = Object.keys(scrumTeams);
    keys.forEach((k) => {
      let members = scrumTeams[k].members;
      members.forEach((member) => {
        if (employeeIds.includes(member.id)) {
          member.isFamiliar = true;
        }
      });
      scrumTeams[k].members = members;
    });

    return scrumTeams;
  }
}
