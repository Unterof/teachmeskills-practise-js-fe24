/*
  Create brand new ReactJS application with `create-react-app` command.
  Create Media Library application using Redux+Saga

  It should consist of the following pages:

  1. Categories List page (fields: id, title, description). Create several categories in the db.json manually.
      - should be a list of categories
  2. Show category page:
      - should be info about selected category
      - below - it should be the list of tracks
      - it should be form for creating new track. Fields:
          * name, url, duration (sec). Duration should have nice view in the list: 90 sec = 1.5 minutes
  3. Create separate page for adding/editing of categories

  Use json-server for API.

  Steps to implement:
    1. List:
      - Create CategoryList component
      - Create CategoryList container
      - Connect container to reducer
    2. Connect List to sagas
    3. Add server pagination (show only 10 items)
    4. Create Routing for the application:
      - /categories -> CategoryList
      - /category/:id -> CategoryItem
    5. Implement CategoryItem:
      - Fetch data for selected category from server (separate request)
      - Fetch Tracks data for selected category from server (separate request)
      - Add form for the Track adding: name, url, duration, categoryId
      - Edit/Delete for the Track
 */
