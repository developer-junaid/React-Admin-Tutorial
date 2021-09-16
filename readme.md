# React Admin Tutorial

### Documentation :link: https://www.npmjs.com/package/react-admin

<img src="/home.png"/>

## Basic Setup

---

### **Server**

---

- Create an empty directory

```
mkdir react-admin-tutorial
```

- Navigate to directory

```
cd react-admin-tutorial
```

- Create empty package json

```
npm init -y
```

- Install json-server package (to mock rest api)

```
npm i json-server
```

- Change the script in package.json, open package.json and add this to the scripts object

```json
...
"scripts": {
    "server": "json-server --watch db.json --port 5000
},

```

- Create db.json file with this example data.

```json
{
  "posts": [
    {
      "id": "1",
      "title": "Post One",
      "body": "This is the post body",
      "publishedAt": "10-01-2020"
    },
    {
      "id": "2",
      "title": "Post Two",
      "body": "This is the post body",
      "publishedAt": "11-01-2020"
    },
    {
      "id": "3",
      "title": "Post Three",
      "body": "This is the post body",
      "publishedAt": "12-01-2020"
    }
  ],
  "users": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
```

- Now you have the server setup with all the crud functionality
- Run the server

```
npm run server
```

- Now your server is running at http://localhost:5000/ you can make get, post, delete and put requests to it

- To test it out, hit this URL with get request http://localhost:5000/posts/ you'll see all the posts

---

### **Client**

- Create basic react app inside client folder

```
npx create-react-app client
```

- edit client/package.json and set proxy to following

```json
{
    ...
  "proxy": "http://localhost:5000",
}
```

- Delete un-necessary files: App.css, App.test.js, logo.svg, setupTests.js
- Make sure your App.js looks like this:

```jsx
function App() {
  return (
    <div>
      <h2>hello</h2>
    </div>
  );
}

export default App;
```
