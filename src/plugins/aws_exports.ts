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
  }
}

export default awsexports
