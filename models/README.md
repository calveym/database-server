##database-server tech test

This is my solution to the database server tech test. The server allows users to
save data to a hash with `localhost:3000/set?key=value` and read back data with
`localhost:3000/get?key=value`.

###Instructions:
To run the server, first clone this repository, then navigate to the `database-server/`
directory. Run `npm install --save` to install all dependencies, and then simply
run `nodemon` to start the server. To see test results, run `mocha`.

###Architecture:
This webserver is centered around the two main routes- `/get` and `/set`. The
model is controlled by the DataManager class and its functions. Data is stored
in `models/data.json`.
