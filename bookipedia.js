// This is an object that contains "series" => "books" & "characters"
const series = {
  stormlight: {
    books: [
      {
        title: "The Way Of Kings",
        author: "Brandon Sanderson",
        series: "Stormlight Archive",
        pages: 1007,
        published: 2010,
        audioBook: true
      },
      {
        title: "Words of Radiance",
        author: "Brandon Sanderson",
        series: "Stormlight Archive",
        pages: 1087,
        published: 2014,
        audioBook: true
      },
      {
        title: "Oathbringer",
        author: "Brandon Sanderson",
        series: "Stormlight Archive",
        pages: 1248,
        published: 2017,
        audioBook: true
      }
    ],
    characters: [
      {
        name: "Kaladin",
        species: "Human",
        gender: "Male",
        race: "Alethi",
        radiant: "Windrunner",
        bond: "Honorspen",
        eyes: "Darkeyed"
      },
      {
        name: "Shallan",
        gender: "Female",
        species: "Human",
        race: "Vaden",
        radiant: "Lightweaver",
        bond: "Liespren",
        eyes: "LightEyed"
      },
      {
        name: "Sven",
        gender: "Male",
        species: "Human",
        race: "Shin",
        radiant: "Skybreaker",
        bond: "Highspren",
        eyes: "Lighteyed"
      },
      {
        name: "Dallinar",
        species: "Human",
        gender: "Male",
        race: "Alethi",
        radiant: "Bondsmith",
        bond: "Godspren",
        eyes: "Lighteyed"
      },
      {
        name: "Jasnah",
        species: "Human",
        gender: "Female",
        race: "Alethi",
        radiant: "Elsecaller",
        bond: "Inkspren",
        eyes: "Lighteyed"
      },
      {
        name: "Lift",
        species: "Human",
        gender: "Female",
        race: "Reshi",
        radiant: "Edgedancer",
        bond: "Cultivationspren",
        eyes: "Lighteyed"
      }
    ]
  },
  reaper: {
    books: [
      {
        title: "Red Rising",
        author: "Pierce Brown",
        series: "Reaper",
        pages: 382,
        published: 2014,
        audiobook: true
      },
      {
        title: "Golden Son",
        author: "Pierce Brown",
        series: "Reaper",
        pages: 464,
        published: 2015,
        audiobook: true
      },
      {
        title: "Morning Star",
        author: "Pierce Brown",
        series: "Reaper",
        pages: 518,
        published: 2016,
        audiobook: true
      },
      {
        title: "Iron Gold",
        author: "Pierce Brown",
        series: "Reaper",
        pages: 596,
        published: 2018,
        audiobook: true
      }
    ],
    characters: [
      {
        name: "Darrow",
        nickname: "Reaper",
        gender: "Male",
        color: "Red",
        house: "House Augustus"
      },
      {
        name: "Sevro",
        nickname: "Goblin",
        gender: "Male",
        color: "Gold",
        house: "House Barca"
      },
      {
        name: "Virginia",
        nickname: "Mustang",
        gender: "Female",
        color: "Gold",
        house: "House Augustus"
      },
      {
        name: "Cassius",
        nickname: "The Morning Knight",
        gender: "Male",
        color: "Gold",
        house: "House Bellona"
      },
      {
        name: "Ragnar",
        nickname: "The Shield of Tinos",
        gender: "Male",
        color: "Obsidian",
        house: "The Valkyrie"
      },
      {
        name: "Roque",
        nickname: "The Poet of Deimos",
        gender: "Male",
        color: "Gold",
        house: "House Fabii"
      }
    ]
  },
  inheritance: {
    books: [
      {
        title: "Eragon",
        author: "Christopher Paolini",
        series: "Inheritance Cycle",
        pages: 544,
        published: 2002,
        audiobook: true
      },
      {
        title: "Eldest",
        author: "Christopher Paolini",
        series: "Inheritance Cycle",
        pages: 694,
        published: 2005,
        audiobook: true
      },
      {
        title: "Brisingr",
        author: "Christopher Paolini",
        series: "Inheritance Cycle",
        pages: 831,
        published: 2008,
        audiobook: true
      },
      {
        title: "Inheritance",
        author: "Christopher Paolini",
        series: "Inheritance Cycle",
        pages: 860,
        published: 2011,
        audiobook: true
      }
    ],
    characters: [
      {
        name: "Eragon",
        alias: "Shadeslayer",
        gender: "Male",
        species: "Human",
        dragonRider: true,
        bond: "Saphira"
      },
      {
        name: "Arya",
        alias: "Shadeslayer",
        gender: "Female",
        species: "Elf",
        dragonRider: true,
        bond: "Firnen"
      },
      {
        name: "Roran",
        alias: "Stronghammer",
        gender: "Male",
        species: "Human",
        dragonRider: false,
      },
      {
        name: "Murtagh",
        gender: "Male",
        species: "Human",
        dragonRider: true,
        bond: "Thorn"
      },
      {
        name: "Orik",
        alias: "Grimstborith Orik",
        gender: "Male",
        species: "Dwarf",
        dragonRider: false,
        clan: "Dûrgrimst Ingeitum"
      },
      {
        name: "Saphira",
        alias: "Brightscales",
        gender: "Female",
        species: "Dragon",
        bondedDragon: true,
        bond: "Eragon"
      },
      {
        name: "Galbatorix",
        gender: "Male",
        species: "Human",
        dragonRider: true,
        bond: "Shruikan"
      },
      {
        name: "Thorn",
        alias: "Red-Strike-Thorn",
        gender: "Male",
        species: "Dragon",
        bondedDragon: true,
        bond: "Murtagh"
      },
    ]
  }
};

// Creates a new Array of all characters that are human
// const humans = [];
// series.stormlight.characters.map(function(human) {
//   if (human.species === "Human") {
//     humans.push(human);
//   }
// });

// Prints out all the pages to each book
series.stormlight.books.forEach(function(book) {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
});
series.reaper.books.forEach(function(book) {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
});
series.inheritance.books.forEach(function(book) {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
});

// This plucks a string out of an Array
const char = series.stormlight.characters.find(
  character => character.name === "Kaladin"
);
// This is a Template String
console.log(
  `${char.name} is a ${char.eyes} ${char.gender} ${char.race} ${char.species}. `
);

// Prints out all "book" info into a Table Chart
console.table(series.stormlight.books);
console.table(series.reaper.books);
console.table(series.inheritance.books);

// List of arrays
const riders = [];
const humans = [];
const dwarfs = [];
const elfs = [];
const dragons = [];

// Maps all Dragon Riders to "riders"
series.inheritance.characters.map(function(character){
  if(character.dragonRider === true) {
    riders.push(character)
  }
});
console.table(riders);

// Maps all humans to "humans"
series.inheritance.characters.map(function(character){
  if(character.species === "Human") {
    humans.push(character)
  }
});
console.table(humans);

// Maps all Dwarfs to "dwarfs"
series.inheritance.characters.map(function(character){
  if(character.species === "Dwarf") {
    dwarfs.push(character)
  }
});
console.table(dwarfs);

// Maps all Elfs to "elfs"
series.inheritance.characters.map(function(character){
  if(character.species === "Elf") {
    elfs.push(character)
  }
});
console.table(elfs);

// Maps all Dragons to "dragons"
series.inheritance.characters.map(function(character){
  if(character.species === "Dragon") {
    dragons.push(character)
  }
});
console.table(dragons);

// HTML Elements
const cardTitle = document.querySelector(".card-title");
cardTitle.innerHTML = series.reaper.characters[0].name;