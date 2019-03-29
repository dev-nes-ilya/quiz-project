import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-3ad0b.firebaseio.com/'
})