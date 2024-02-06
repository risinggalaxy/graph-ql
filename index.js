import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

//import database file
import db from './_db.js';

// import types from schema
import { typeDefs } from './schema.js';

// creating resolver object
const resolvers = {
    // we can make a resolver for any of the type def in the schema file

    Query: { // THESE ARE RESOLVERS FOR THE ENTRY POINT OF THE GRAPH
        
        // create a function to return the type you want
        games() {
            return db.games
        },

        reviews() {
            return db.reviews
        },

        authors() {
            return db.authors
        },

        review(_, args, context) {
            return db.reviews.find((review) => review.id === args.id)
        },

        game(_, args) {
            return db.games.find((game) => game.id === args.id )
        },

        author(_,args) {
            return db.authors.find((author) => author.id == args.id)
        }
    },

    // In order to get a related object we make a resolver for that type
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },

    Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.id)
        },

        game(parent) {
            return db.games.find((g) => g.id === parent.id)
        }
    },

    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((g) => g.id !== args.id)
            return db.games
        },

        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
            return game
        },

        updateGame(_, args) {
            db.games = db.games.map((g) => {
                if (g.id === args.id) {
                    return { ...g, ...args.edit}
                }

                return g
            })

            return db.games.find((g) => g.id === args.id)
        }
    }
}

// Server setup
const server = new ApolloServer({
    //typeDefs -- definitions of types of data
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)