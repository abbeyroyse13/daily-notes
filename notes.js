const notes = [{
        id: 1,
        subject: "HTML/CSS",
        date: "May 21st - 26th, 2021",
        feeling: "I'm feeling good about my knowledge so far.",
        timeSpent: 7200
    },
    {
        id: 2,
        subject: "Javascript",
        date: "May 27th, 2021",
        feeling: "I'm feeling a bit shaky but also pretty good at this point.",
        timeSpent: 1440
    }
]

const moreNotesAboutToday = {
    id: 3,
    subject: "Javascript (again)",
    date: "May 27th, 2021",
    feeling: "Just in the bit of extra time that I've worked, my knowledge has strengthened. I've been taking quite a few notes and pushing through at a decent pace.",
    timeSpent: 120
}

notes.push(moreNotesAboutToday);

for (const note of notes) {
    console.log(`Note ${note.id} 
    ${note.date}
    I learned about ${note.subject}
    I worked on it for ${note.timeSpent} minutes
    How I feel: ${note.feeling}
    -------------
    `)
}

console.log(notes);