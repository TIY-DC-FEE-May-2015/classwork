var Team = function(nameOfTeam) {

  this.name = nameOfTeam

  this.wins = 0
  this.losses = 0

  this.winPercentage = function() {
    return (this.wins) / ((this.wins + this.losses) || 1)
  }

  this.recordWin = function() {
    this.wins += 1
  }

  this.recordLoss = function() {
    this.losses += 1
  }

  this.createStandings = function() {
    return this.name + " | " + this.wins + "-" + this.losses + " | " + this.winPercentage().toFixed(3)
  }

}

var League = function() {

  this.teams = []

  this.addTeam = function(teamName) {
    this.teams.push( new Team(teamName) )
  }

  this.findTeam = function(teamName) {
    var foundTeam = _.find(this.teams, function(team){
      return team.name === teamName
    })

    if (foundTeam) { 
      return foundTeam 
    }
    return false
  }

  this.recordResult = function(winningTeamName, losingTeamName) {
    var winningTeam = this.findTeam(winningTeamName)
    var losingTeam = this.findTeam(losingTeamName)

    if (winningTeam === false || losingTeam === false) {
      return
    }

    winningTeam.recordWin()
    losingTeam.recordLoss()
  }

  this.sortByWinPercentage = function() {
    return _.sortBy(this.teams, function(team){
      return team.winPercentage() * -1
    })
  }

  this.createStandings = function() {
    var sortedTeams = this.sortByWinPercentage()
    return _.map(sortedTeams, function(team){
      return team.createStandings()
    })
  }

}











