// This is mock data
let games = [
    {id: '1', title: 'FC EA 24', platform: ['PS5', 'Xbox Series X', 'Mobile', 'PC']},
    {id: '2', title: 'Spider Man 2', platform: ['PS5']},
    {id: '3', title: 'Call Of Duty MWF 2', platform: ['PS5', 'Xbox Series X', 'PC']},
    {id: '4', title: 'Ghost Of Thushima', platform: ['PS5', 'Xbox Series X']},
    {id: '5', title: 'God of War', platform: ['PS5']},
]

let authors = [
    {id: '1', name: 'Yasser Farahi', verified: true},
    {id: '2', name: 'David Allison', verified: false},
    {id: '3', name: 'John Doe', verified: true},
]

let reviews = [
    {id: '1', rating: 10, content: 'Good Game', author_id: '1', game_id: '1'},
    {id: '2', rating: 3, content: 'Bad game', author_id: '2', game_id: '5'},
    {id: '3', rating: 6, content: 'lorem ipsum', author_id: '3', game_id: '1'},
    {id: '4', rating: 7, content: 'lorem ipsum', author_id: '2', game_id: '3'},
    {id: '5', rating: 4, content: 'lorem ipsum', author_id: '2', game_id: '2'},
    {id: '6', rating: 5, content: 'lorem ipsum', author_id: '3', game_id: '5'},
    {id: '7', rating: 6, content: 'lorem ipsum', author_id: '3', game_id: '4'},
    {id: '8', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
]

// we should export these properties in order to be able to import them somewhere else
export default { games, authors, reviews }
