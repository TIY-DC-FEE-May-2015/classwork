var nlEast
describe("League", function(){

  beforeEach(function(){
    nlEast = new League()
    nlEast.addTeam("Atlanta")
    nlEast.addTeam("Miami")
    nlEast.addTeam("New York")
    nlEast.addTeam("Washington")
    nlEast.addTeam("Philadelphia")
  })

  it("Can add teams", function(){
    expect( nlEast.teams.length ).to.equal(5)
  })

  it("Can find teams", function(){
    expect( nlEast.findTeam("New York").name ).to.equal("New York")

    expect( nlEast.findTeam("St. Louis")).to.equal(false)
  })

  it("Can record results", function(){
    nlEast.recordResult("New York", "Philadelphia")

    expect( nlEast.findTeam("New York").wins ).to.equal(1)
    expect( nlEast.findTeam("Philadelphia").losses ).to.equal(1)
  })

  it("Won't record results for non-existent teams", function(){
    nlEast.recordResult("New York", "St. Louis")

    expect( nlEast.findTeam("New York").wins ).to.equal(0)
  })

  it("Sorts by winning percentage", function(){
    nlEast.recordResult("Washington", "New York")
    nlEast.recordResult("Washington", "Philadelphia")
    nlEast.recordResult("Washington", "Miami")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Miami", "Atlanta")
    nlEast.recordResult("Philadelphia", "Atlanta")
    nlEast.recordResult("New York", "Philadelphia")
    nlEast.recordResult("Miami", "New York")
    nlEast.recordResult("Miami", "Philadelphia")

    var sorted = nlEast.sortByWinPercentage()
    expect( sorted.length ).to.equal(5)
    expect( sorted[0].name ).to.equal("Washington")
    expect( sorted[4].name ).to.equal("Atlanta")
  })

  it("Prints standings", function(){
    nlEast.recordResult("Washington", "New York")
    nlEast.recordResult("Washington", "Philadelphia")
    nlEast.recordResult("Washington", "Miami")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Washington", "Atlanta")
    nlEast.recordResult("Miami", "Atlanta")
    nlEast.recordResult("Philadelphia", "Atlanta")
    nlEast.recordResult("New York", "Philadelphia")
    nlEast.recordResult("Miami", "New York")
    nlEast.recordResult("Miami", "Philadelphia")

    var standings = nlEast.createStandings()
    expect( standings.length ).to.equal(5)
    expect( standings[0] ).to.equal("Washington | 8-0 | 1.000")
    expect( standings[1] ).to.equal("Miami | 3-1 | 0.750")
    expect( standings[2] ).to.equal("New York | 1-2 | 0.333")
    expect( standings[3] ).to.equal("Philadelphia | 1-3 | 0.250")
    expect( standings[4] ).to.equal("Atlanta | 0-7 | 0.000")
  })

})