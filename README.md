# Satellite Mapping App

A Node app built with MongoDB and Angular. For demonstration purposes and a tutorial.  This was adapted from [github](https://www.github.com/scotch-io/node-todo) and the associated [article](http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular).

## Requirements

- [Node and npm](http://nodejs.org)

## Installation

1. Clone the repository: `git clone git@github.com:phelpsw/spacejunk.js.git`
2. Install the application: `npm install`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`

## Testing

Using res it is a little easier to test restful requests.

```
sudo pip install res

res GET http://localhost:8080/api/satellites/

res GET http://localhost:8080/api/manage-sats

res POST http://localhost:8080/api/manage-sats -d "13"

res DELETE http://localhost:8080/api/manage-sats/10
```

More examples [here](https://github.com/jawerty/res)

## TODO

1. Create user satellite management page with angular
1. Make users unique
1. Create login system
 * http://stackoverflow.com/questions/6951563/storing-passwords-with-node-js-and-mongodb
 * http://codahale.com/how-to-safely-store-a-password/
 * https://github.com/jasonkostempski/psychic-octo-ninja/blob/master/models/account.js
1. Move page index to demo
1. Histogram of apogees
1. Skull icon with counter of deorbited objects
1. More examples of how to embed and manipulate globe based on awesome D3 functionality
1. Figure out CDN (or self host) D3 javascript
1. Add indirect relationship sats
1. Animate path 


