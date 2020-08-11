import gql from 'graphql-tag';

// USERS
export const CREATE_USER = gql`
  mutation($username: String!, $password: String!, $passwordConfirm: String!) {
    createUser(
      data: {
        username: $username
        password: $password
        passwordConfirm: $passwordConfirm
      }
    ) {
      token
    }
  }
`;

export const SING_IN_USER = gql`
  mutation($username: String!, $password: String!) {
    singIn(data: { username: $username, password: $password }) {
      token
    }
  }
`;

export const GET_ACTIVE_USER = gql`
  query {
    activeUser {
      id
      username
      createdAt
      snaps {
        text
        id
      }
    }
  }
`;

// SNAPS
export const GET_SNAPS = gql`
  query {
    snaps {
      id
      text
      createdAt
      user {
        id
        username
      }
    }
  }
`;

export const ADD_SNAP = gql`
  mutation($user_id: ID!, $text: String!) {
    createSnap(data: { user_id: $user_id, text: $text }) {
      id
      text
      createdAt
      user {
        id
        username
      }
    }
  }
`;

// Subscriptions

export const USER_CREATED = gql`
  subscription {
    user {
      id
      username
      createdAt
      snaps {
        id
        text
      }
    }
  }
`;

export const SNAP_CREATED = gql`
  subscription($user_id: ID) {
    snap(user_id: $user_id) {
      id
      text
      createdAt
      user {
        id
        username
      }
    }
  }
`;
