import { Auth } from "aws-amplify"

const awsexports: { [k: string]: any } = {
  Auth: {
    identityPoolId: process.env.VUE_APP_COGNITO_IDENTITY_ID,
    region: "ap-northeast-1",
    userPoolId: process.env.VUE_APP_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "rest-api",
        endpoint: process.env.VUE_APP_API_ENDPOINT,
        custom_header: async () => {
          return {
            Authorization: `${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`
          }
        }
      }
    ]
  },
  aws_project_region: "ap-northeast-1",
  aws_appsync_graphqlEndpoint:
    "https://mtefdhzhhje7zlerfsfu3utpxm.appsync-api.ap-northeast-1.amazonaws.com/graphql",
  aws_appsync_region: "ap-northeast-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-smiyg45jfja3zip6vtmmzisqmm"
}

export default awsexports
