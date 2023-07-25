const allMessageRows = document.querySelectorAll('.message-row')
const replyContainer = document.getElementById('reply-container')
const allMessages = document.getElementById('all-messages')
const inbox = document.querySelectorAll('.inbox')

function click(e) {
    e.preventDefault()
    console.log('click')
    if (replyContainer.classList.contains('d-none')) {
        replyContainer.classList.remove('d-none')
        allMessages.classList.add('d-none')
    } else if (allMessages.classList.contains('d-none')) {
        allMessages.classList.remove('d-none')
        replyContainer.classList.add('d-none')
    }
}

inbox.forEach(i => {
    i.addEventListener('click', click)
})

allMessageRows.forEach(row => {
    row.addEventListener('click', click)
})