export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_v7x5dPpzgk29e4z1tVz571Vy00IU6GPDmS",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-steh"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kkjetxpfxb.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_wbCnIdzk0",
    APP_CLIENT_ID: "49sp5eh6ntp1dqvofhgoqhtlug",
    IDENTITY_POOL_ID: "us-east-2:de96f03b-8479-47d8-94a3-5d0dd0559898"
  }
};