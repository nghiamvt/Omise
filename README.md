# Omise Tamboon React

## What I have done

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

## Online version

Sever and client are separately deployed to two popular hosting services.

- Client: https://omise.now.sh/
- Server: https://omise.herokuapp.com/

## How to use

### Start website

In order to have a better user experience, this setup uses the aforementioned online server instead the local version.

If you are prefer the old version of server, feel free to change `BASE_API` in `src/common/constant`

```sh
yarn client
```

### Test coverage

```sh
yarn test:coverage
```

## Notes

- Using USD as the only currency of the application
