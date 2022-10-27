#  🏡 jobly
#### a job board app
>  👩🏻‍💻 react frontend and restful api backend
* users can register, sign in
* users look for companies, jobs
* users can apply for jobs
* job listing search function (live search!) by filtering
--------------------------------------------------------
## preview:
![preview img](/joblypreview.png)
* [demo](https://jobly-jmh.surge.sh/)
* [express back-end](https://jobly-r27-jmh.herokuapp.com)
* [github back-end](https://github.com/jumehan/react-jobly-backend)
* [github front-end](https://github.com/jumehan/react-jobly-frontend)

## technologies:
backend is a restful api, returns JSON data
* backend: PostgreSQL, SQL, nodejs, Express
    * testing: supertest, jest
    * other: JWT tokens, bcrypt, json schema validation
* frontend: react
    * styling: css, reactstrap

## issues & todos:
### adding tests
* add react render tests

### to fix
* live search debounce function quicks (research useMemo vs useCallback)

### future functionality:
* choosing a random password
* research PostgreSQL enum types and change state column in applications
* add technologies for jobs
* add technologies for users

## setup:
in the project directory, you can run:
##### `npm install`
##### `npm start`


