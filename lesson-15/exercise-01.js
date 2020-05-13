/*
  Create brand new ReactJS application with `create-react-app` command.
  Create Medium like application using Redux+Saga

  It should consist of the following pages:

  1. Articles List page (show all articles with image, title and description)
      - should be button for adding new article
      - should be a possibility to remove article
      - should be a possibility to edit article
  2. Create Article page (should be form with fields:
      - title,
      - image,
      - description,
      - text,
  3. Each article should have comments section on the bottom
      - comment should have text.
      - one user can add only 10 comments per article.

  User json-server for API.


  Steps to implement:
    1. List:
      - Create ArticleList component
      - Create ArticleList container
      - Connect container to reducer
    2. Connect List to sagas
    3. Create Routing for the application:
      - /articles -> ArticleList
      - /create-article -> ArticleEdit
    4. Add create article form
      - Add bootstrap form with fields
        * title
        * image
        * description
        * text
      - Add dispatch for form submission
      - Send data to the server
      - Redirect to list after new article added
    5. Add Edit/Delete buttons to the Articles list
    6. Implement Delete button
      - Add saga function
      - Add service method for removing article by id
    7. Implement Edit button
      - Add saga function
      - Add service method for editing article by id (the same ArticleEdit component should be used)
    8. Add handler for ARTICLE/FETCH_ERROR action.
    9. Add Comments component to the article
      - It should return list of comments for the specific article.
    10. Add CommentsForm component to be able to add new component
      - Fields should be used:
        * text
        * articleId
 */
