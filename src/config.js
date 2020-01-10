const dev = {
  STRIPE_KEY: "pk_test_v7x5dPpzgk29e4z1tVz571Vy00IU6GPDmS",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-j00wmtvmj2qa"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://auztklkj50.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "Yus-east-2_GhHrqL53Z",
    APP_CLIENT_ID: "obtepj05d22a96kdr5ks4ubdc",
    IDENTITY_POOL_ID: "us-east-2:011dfcaa-11fa-4f2b-a7b0-2ca1b053274e"
  }
};
const prod = {
  STRIPE_KEY: "pk_test_v7x5dPpzgk29e4z1tVz571Vy00IU6GPDmS",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-fild3sh0ulrc"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://xz87xrbmjk.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_zuS9zzSSJ",
    APP_CLIENT_ID: "3ba8fgq4d36kss4nc1mepfnak8",
    IDENTITY_POOL_ID: "us-east-2:450d3a91-e2fb-49d1-a44f-51c958c7f364"
  }
};
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};