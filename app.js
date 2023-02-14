const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1528449995200-88f6f5734325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
                alt: "Photo of the Empire State Building during day time",
                credit: "Melanie Dretvic"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Time lapse photo of Austin skyline",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Portland street scape downtown",
                credit: "Peter Bucks"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1659316331636-e76a236f8fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                alt: "New Orleans downtown crowded street",
                credit: "Aric Cheng"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1528449995200-88f6f5734325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
                alt: "Photo of the Empire State Building during day time",
                credit: "Melanie Dretvic"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Time lapse photo of Austin skyline",
                credit: "Carlos Alfonso"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Portland street scape downtown",
                credit: "Peter Bucks"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1659316331636-e76a236f8fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                alt: "New Orleans downtown crowded street",
                credit: "Aric Cheng"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1528449995200-88f6f5734325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
                alt: "Photo of the Empire State Building during day time",
                credit: "Melanie Dretvic"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Time lapse photo of Austin skyline",
                credit: "Carlos Alfonso"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1582203410996-f2af25fb9776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
                alt: "Portland street scape downtown",
                credit: "Peter Bucks"
            },
            {
                text: "Mountains",
                image: "https://images.unsplash.com/photo-1659316331636-e76a236f8fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                alt: "New Orleans downtown crowded street",
                credit: "Aric Cheng"
            }
        ]
    }
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')

        questionDisplay.append(titleBlock)
    })
}
populateQuestions()