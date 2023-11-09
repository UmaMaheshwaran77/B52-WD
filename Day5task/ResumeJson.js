//Sample JSON object:
{
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "skills": ["JavaScript", "Python", "SQL"],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Inc.",
        "years": 5
      },
      {
        "position": "Data Analyst",
        "company": "Data Co.",
        "years": 3
      }
    ]
  }

  //Using for...in loop to iterate over the properties of the JSON object:

  const data = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "skills": ["JavaScript", "Python", "SQL"],
    "experience": [
      {
        "position": "Software Engineer",
        "company": "Tech Inc.",
        "years": 5
      },
      {
        "position": "Data Analyst",
        "company": "Data Co.",
        "years": 3
      }
    ]
  };
  
  for (const key in data) {
    console.log(key, data[key]);
  }

  //Using for...of loop to iterate over an array within the JSON object:
  for (const skill of data.skills) {
    console.log(skill);
  }

  //Using forEach to iterate over the "experience" array:
  data.experience.forEach((exp, index) => {
    console.log(`Experience ${index + 1}: ${exp.position} at ${exp.company}`);
  });
  
  