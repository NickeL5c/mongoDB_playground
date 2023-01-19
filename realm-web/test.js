import * as Realm from "realm-web"

// Add App ID
const app = new Realm.App({id: application-0-kawtv})

// Create an anonymous credential
const credentials = Realm.Credentials.anonymous()

// Authenticate the user
const user = await app.logIn(credentials)

// App.currentUser updates to match the logged in user
console.assert(user.id === app.currentUser.id)


const summed = await user.functions.sum(69, 420)
console.assert(summed === 489)