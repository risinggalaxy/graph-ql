export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews: [Review]
        review(id: ID!): Review

        games: [Game]
        game(id: ID!): Game

        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edit: EditGameInput): Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`


// GraphQL standard types int, float, string, boolean, id
// ! means can not be null
// Query is the entry point for the Users, when requesting data, so adding more properties will give them more entry points
// inside the Query you define where users can start from
// by not adding ! to the end of a property you make the property optional
// so query entry points are now optional

//Add arguments to query type review(id: ID!): Review

/*
adding relations between objects
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!  // every review must have an associated game, otherwise it won't exist
        author: Author! // every review must have an associated author, otherwise it can't exist
    }
*/
