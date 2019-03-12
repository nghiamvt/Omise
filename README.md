## Scenario

Once upon a time.. nope!  
So here, you have been working on the charity donation project which the previously assigned front-end developer and designer got the urgent matters to solve, so they will not be able to finish the project on time..

Fortunately, the API server is already done. You will need to grab on the requirements and complete the project while ensuring the application to have great engineering and well-design ✨

<p align="center"><img src="src/images/screenshot.jpeg" alt="Web boilerplate" /></p>

## Mission (Completed)

Well, grap your guns, stock up your food and bring down your armor. We gonna need it for tonight!  
**Here are the tasks you must complete:**

- [x] Complete the application according to the design (image above).
- [x] Complete these features that are not in the design (you have freedom to design and position to display).
  - Display all donation amount.
  - Display a message when paid.
- [x] Make the donation feature works correctly.
  - Amount in all donations should be displayed correctly despite users close and come back later.
  - Database (db.json) should have the new valid data when paid.
- [x] Production quality code is expected
- [x] Unit tests is a must
- [x] Refactor the code to be more readable and enhance reusability.
- [x] Use only [styled-component](https://www.styled-components.com/) for styling part.
- [x] Display well in most modern browser (Google Chrome, Safari, Firefox).

#### Bonus

- [x] Supporting different screen sizes (responsive).
- [x] Write unit tests with [jest](https://facebook.github.io/jest/).
- [x] Improve the design to have better UI and UX.

## Rules

Desire to win the war? Well, to make it a little more fun, please remember that

**You cannot:**

- Change existing behaviors.
- Change the API server.
- Change from JS to other languages.

**In the other hand, feel free to:**

- Improve the design to have better UI and UX.
- Re-organize the codebase.
- Create new modules/methods/components.
- Modify existing code.
- Add new packages.
- Update `webpack` config.
- Take reasonable time to complete the challenge, no need to rush.
- Edit `README.md` to add documentation. What have you done or how to run or test your app?

# RESULTS

## Online version

Sever and client are separately deployed to two popular hosting services.

- Client: https://omise.now.sh/
- Server: https://omise.herokuapp.com/

Note:

- The client was automatically deployed whenever the code was pushed to master branch
- The server will reset database after a certain period of idle time.

## How to use

### Start website

In order to have a better user experience, this setup uses the aforementioned online server instead the local version which is too fast to show the loading.

If you are prefer the old version of server, feel free to change `BASE_API` in `src/common/constant`

```sh
yarn client
```

URL: http://0.0.0.0:3000/

### Test coverage

```sh
yarn test:coverage
```

## Notes

- Using USD as the only currency of the application

## Limitations

- Webpack is configed at a very basic level
- Not 100% percent of code was coveraged by test
- Not handle lazy loading images
- Paging
- No code spliting
