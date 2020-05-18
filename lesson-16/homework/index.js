/*
  Create brand new ReactJS application with `create-react-app` command.
  Create Counter application using Redux+Saga

  Requirements:
  - It should consist of 3 independent blocks
  - Each block should have Label and Increase/Decrease button.
  - User should not be able to click less than 0 value (add validation)
  - Save all data to the DB, usint json-server
  - Saga should be used for async actions

|----------------------------------|
|                                  |
|                5                 |
| ------------        ------------ |
| | Decrease |        | Increase | |
| ------------        ------------ |
| ---------------------------------|
|                                  |
|                0                 |
| ------------        ------------ |
| | Decrease |        | Increase | |
| ------------        ------------ |
| ---------------------------------|
|               12                 |
|                                  |
| ------------        ------------ |
| | Decrease |        | Increase | |
| ------------        ------------ |
| ---------------------------------|

 */
