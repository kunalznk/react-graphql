import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    emailId: String!
    username: String!
    profilePic: String!
    post: [Post!]
    comment: [Comment!]
  }

  type Post {
    id: ID
    title: String!
    content: String!
    user: User!
    comment: [Comment!]
  }

  type Comment {
    id: ID
    comment: String
    user: User!
    post: Comment!
  }

  input UserFilterType {
    username: String
    emailId: String
  }

  input PostFilterType {
    title: String
    userId: ID
  }

  input CommentFilterType {
    postId: ID
    userId: ID
  }

  input createUserInput {
    emailId: String!
    username: String!
    profilePic: String!
    password: String!
  }

  input updateUserInput {
    emailId: String
    username: String
    profilePic: String
    password: String
  }

  input deleteUserInput {
    id: ID!
  }

  input createPostInput {
    userId: ID!
    title: String
    content: String
  }

  input updatePostInput {
    postId: ID!
    title: String
    content: String
  }
  input deletePostInput {
    postId: ID!
  }

  input createCommentInput {
    postId: ID!
    userId: ID!
    comment: String!
  }

  input updateCommentInput {
    commentId: ID!
    comment: String!
  }
  input deleteCommentInput {
    commentId: ID!
  }

  type Query {
    user(id: ID!): User
    users(userFilter: UserFilterType): [User]

    post(id: ID!): Post
    posts(postFilter: PostFilterType): [Post]

    comment(id: ID!): Comment
    comments(commentFilter: CommentFilterType): [Comment]
  }

  type Mutation {
    createUser(input: createUserInput): User!

    updateUser(input: updateUserInput): User!
    deleteUser(input: deleteUserInput): Boolean!

    createPost(input: createPostInput): User!
    updatePost(input: updatePostInput): User!
    deletePost(input: deletePostInput): Boolean!

    createComment(input: createCommentInput): User!
    updateComment(input: updateCommentInput): User!
    deleteComment(input: deleteCommentInput): Boolean!
  }
`;

export default typeDefs;
