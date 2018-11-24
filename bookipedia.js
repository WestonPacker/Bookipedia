// This is an object that contains "series" => "books" & "characters" 
const series = {
  stormlight: {
    books: [{
        "title": "The Way Of Kings",
        "author": "Brandon Sanderson",
        "series": "Stormlight Archive",
        "pages": 1007,
        "published": 2010,
        "audioBook": true
      },
      {
        "title": "Words of Radiance",
        "author": "Brandon Sanderson",
        "series": "Stormlight Archive",
        "pages": 1087,
        "published": 2014,
        "audioBook": true
      },
      {
        "title": "Oathbringer",
        "author": "Brandon Sanderson",
        "series": "Stormlight Archive",
        "pages": 1248,
        "published": 2017,
        "audioBook": true
      }
    ],
    characters: [{
        "name": "Kaladin",
        "species": "Human",
        "gender": "Male",
        "race": "Alethi",
        "radiant": "Windrunner",
        "bond": "Honorspen",
        "eyes": "Darkeyed",
      },
      {
        "name": "Shallan",
        "gender": "Demale",
        "species": "Human",
        "race": "Vaden",
        "radiant": "Lightweaver",
        "bond": "Liespren",
        "eyes": "LightEyed",
      },
      {
        "name": "Sven",
        "gender": "Male",
        "species": "Human",
        "race": "Shin",
        "radiant": "Skybreaker",
        "bond": "Highspren",
        "eyes": "Lighteyed"
      },
      {
        "name": "Dallinar",
        "species": "Human",
        "gender": "Male",
        "race": "Alethi",
        "radiant": "Bondsmith",
        "bond": "Godspren",
        "eyes": "Lighteyed"
      },
      {
        "name": "Jasnah",
        "species": "Human",
        "gender": "Female",
        "race": "Alethi",
        "radiant": "Elsecaller",
        "bond": "Inkspren",
        "eyes": "Lighteyed",
      },
      {
        "name": "Lift",
        "species": "Human",
        "gender": "Female",
        "race": "Reshi",
        "radiant": "Edgedancer",
        "bond": "Cultivationspren",
        "eyes": "Lighteyed"
      }
    ]
  },
  reaper: {
    books: [{
        "title": "Red Rising",
        "author": "Pierce Brown",
        "series": "Reaper",
        "pages": 382,
        "published": 2014,
        "audiobook": true
      },
      {
        "title": "Golden Son",
        "author": "Pierce Brown",
        "series": "Reaper",
        "pages": 464,
        "published": 2015,
        "audiobook": true
      },
      {
        "title": "Morning Star",
        "author": "Pierce Brown",
        "series": "Reaper",
        "pages": 518,
        "published": 2016,
        "audiobook": true
      },
      {
        "title": "Iron Gold",
        "author": "Pierce Brown",
        "series": "Reaper",
        "pages": 596,
        "published": 2018,
        "audiobook": true
      }
    ]
  },
  inheritance: {
    books: [{
        "title": "Eragon",
        "author": "Christopher Paolini",
        "series": "Inheritance Cycle",
        "pages": 544,
        "published": 2002,
        "audiobook": true
      },
      {
        "title": "Eldest",
        "author": "Christopher Paolini",
        "series": "Inheritance Cycle",
        "pages": 694,
        "published": 2005,
        "audiobook": true
      },
      {
        "title": "Brisingr",
        "author": "Christopher Paolini",
        "series": "Inheritance Cycle",
        "pages": 831,
        "published": 2008,
        "audiobook": true
      },
      {
        "title": "Inheritance",
        "author": "Christopher Paolini",
        "series": "Inheritance Cycle",
        "pages": 860,
        "published": 2011,
        "audiobook": true
      }
    ]
  }
}
// This is the filter branch
series.inheritance.books.filter(function(book){
  console.log(book.pages)
  return book.pages >= 800;
})
