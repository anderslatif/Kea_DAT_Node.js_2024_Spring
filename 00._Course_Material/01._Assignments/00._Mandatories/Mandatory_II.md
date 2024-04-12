# Mandatory II

Create a full stack auth system using a web framework. 

Auth = authorization and authentication. 

Auth system = auth in both frontend and backend. 

**Hand-in**: Git Link in Teams

**Assignment type**: Individual

Recommendation: Even though it is individual, try to hack each other’s local system for security auditing and do code reviews of the security sensitive parts. 

**Deadline**: Check Teams. 

## Technical requirements:

- Use a web framework. This is an opportunity to learn or use any web framework but beware that only Svelte, HTML or template languages are allowed for the exam project.

- Use a database.

- Add notifications. The project should have at least one. You could use 	one of these libraries: https://github.com/CodeSeven/toastr  https://github.com/kbrgl/svelte-french-toast

- Email should be "sent out" with Nodemailer. Sending with Ethereal mail is allowed. Only 1 type of email is required but here are suggestions for different types of emails: 1. sign up, 2. first login, 3. forgot password etc.

### Backend:

You need to implement authentication:

- The passwords must be hashed (Bcrypt).

- Implement it yourself: You are not allowed to  consider a library or a service such as Passport.js, Google SSO OAuth or Firebase Authenticate. 

You need to implement authorization: 

- Use sessions (easy) or JWT (difficult). Good video on how to implement JWT with Express: https://www.youtube.com/watch?v=mbsmsi7l3r4

### Frontend:

You need to implement authentication here too:

- The minimum requirement is a Login/Sign out component. (Sign up/Forgot password are optional). 

You need to implement authorization here too: 

- Protect your routes. If you are using svelte-navigator use private routes so people can’t access pages by changing the URL. You could use this:
https://github.com/mefechoel/svelte-navigator/tree/main/example/private-routes


## Optional

Feel free to add a theme to the website a frontpage and content once logged in.
