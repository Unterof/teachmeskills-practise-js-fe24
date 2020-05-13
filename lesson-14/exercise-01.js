/*
  Create brand new ReactJS application with `create-react-app` command.
  Create Webshop application using Redux

  It should consist of 2 reducers: user and shop.
    - `user` reducer should be responsible for authentication
    - `shop` reducer should be responsible for webshop implementation

  Authentication:
    - It should be simple form with login/password. (Hardcode existing users for now and check auth on Frontend)
  Shop:
    - It should be 2 pages:
      - Webshop Products - list with a possibility to send products to the cart (get from data.json)
      - My Cart:
          * list of items in the card. Item can be cancelled.
          * for for checkout. After use checked out - redirect to the products list

1. Implement Login component
  - It should have 2 inputs: username, password
  - It should be 2 hardcoded users in the reducers: id, username, password
  - Add authenticated to the user reducer

2. Add Router for components:
  - Login: /login
  - Products: /products
  - MyCart: /cart

3. Implement Products component:
  - It should pull products from data.json
  - Each item should have `To Cart` button
  - Once user clicked on button - save item to store.

4. Implement MyCart component:
  - It should have a list of selected products
  - It should be form:
    * Full Name
    * Address
  - It should have "Submit" button.
  - After user submitted form - save data to store.

5. All components should be available only for authenticated users (add validation)
 */
