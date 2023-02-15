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
                image: "https://images.unsplash.com/photo-1661735365500-aed60aeff97d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80",
                alt: "New Orleans steamboat",
                credit: "Yuhan Du"
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

        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick)

            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit

            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('href', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)
    })
}
populateQuestions()

const handleClick = () => {
    console.log('clicked')
}