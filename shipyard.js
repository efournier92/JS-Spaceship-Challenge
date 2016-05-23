//Create a Launchpad
var launchpad = function() {
  console.log("Initiating Preflight Checks!");
}

launchpad();

//Build the spaceship
var ship = {
  name: "The Yellow Submarine"
};

var launchpad = function(spaceship) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
}

launchpad(ship);

//Define crew members
var crewNames = ["John", "Paul", "George", "Ringo"];

var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var ship = {
  name: "The Yellow Submarine"
};

var launchpad = function(spaceship) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
}

launchpad(ship);

//Crew boards the ship
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  }
};

var launchpad = function(spaceship, crew) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
}

launchpad(ship, crewMembers);

//Name a captain
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  }
};

var launchpad = function(spaceship, crew) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
}

launchpad(ship, crewMembers);

//Build Rockets
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  }
};

var launchpad = function(spaceship, crew) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
}

launchpad(ship, crewMembers);

//Mount rockets
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  }
};

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
}

launchpad(ship, crewMembers, rocket);

//Blast off!
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("pshooooooooo!!!!");
    } else {
      console.log("Takeoff was unsuccessful");
    }
  }
};

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
  spaceship.takeoff();
}

launchpad(ship, crewMembers, rocket);

//Blast off with fuel
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("pshooooooooo!!!!");
    } else {
      console.log("Takeoff was unsuccessful");
    }
  },
  fuelShip: function(fuel_units) {
    this.propulsion.fuel += fuel_units;
  }
};

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
  spaceship.fuelShip(5);
  spaceship.takeoff();
}

launchpad(ship, crewMembers, rocket);

//Blast off countdown sequence
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("pshooooooooo!!!!");
    } else {
      console.log("Takeoff was unsuccessful");
    }
  },
  fuelShip: function(fuel_units) {
    this.propulsion.fuel += fuel_units;
  }
};

var countdown = function(count) {
  if (count === 0) {
    console.log("Blastoff!!");
  } else {
    console.log(count);
    countdown(count - 1);
  }
}

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
  spaceship.fuelShip(5);
  countdown(5);
  spaceship.takeoff();
}

launchpad(ship, crewMembers, rocket);

//Slow down countdown sequence
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("pshooooooooo!!!!");
    } else {
      console.log("Takeoff was unsuccessful");
    }
  },
  fuelShip: function(fuel_units) {
    this.propulsion.fuel += fuel_units;
  }
};

var countdown = function(count) {
  if (count === 0) {
    console.log("Blastoff!!");
  } else {
    setTimeout(function() {
      console.log(count);
      countdown(count - 1);
    }, 1000);
  }
}

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
  spaceship.fuelShip(5);
  countdown(5);
  spaceship.takeoff();
}

launchpad(ship, crewMembers, rocket);

//Final Countdown
var crewNames = ["John", "Paul", "George", "Ringo"];
var trainCrew = function(names) {
  var crew = [];
  for (var i = 0; i < names.length; i++) {
    crew.push({ name: names[i] });
  }
  return crew;
};

var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Firing Engines! Remaining Fuel: " + this.fuel);
      return true;
    } else {
      console.log("Engines failed to fire. No Fuel!");
      return false;
    }
  }
};

var ship = {
  name: "The Yellow Submarine",
  crew: [],
  propulsion: null,
  loadCrew: function(crewMembers) {
    for (var i = 0; i < crewMembers.length; i++) {
      var crewMember = crewMembers[i];
      this.crew.push(crewMember);
      console.log(crewMember.name + " has boarded the ship!");
    }
  },
  captain: function() {
    var crewCount = this.crew.length;
    return this.crew[Math.floor(Math.random() * crewCount)]
  },
  mountPropulsion: function(propulsion) {
    this.propulsion = propulsion;
    console.log("Propulsion system has been mounted");
  },
  takeoff: function() {
    if (this.propulsion.fire()) {
      console.log("pshooooooooo!!!!");
    } else {
      console.log("Takeoff was unsuccessful");
    }
  },
  fuelShip: function(fuel_units) {
    this.propulsion.fuel += fuel_units;
  }
};

var countdown = function(count, ship) {
  if (count === 0) {
    console.log("Blastoff!!");
    ship.takeoff();
  } else {
    setTimeout(function() {
      console.log(count);
      countdown(count - 1, ship);
    }, 1000);
  }
}

var launchpad = function(spaceship, crew, engine) {
  console.log("Initiating Preflight Checks!");
  console.log("This is the voyage of " + spaceship.name);
  spaceship.loadCrew(crew);
  console.log("Our captain for this voyage will be " + ship.captain().name);
  spaceship.mountPropulsion(engine);
  spaceship.fuelShip(5);
  countdown(5, spaceship);
}

launchpad(ship, crewMembers, rocket);
```
