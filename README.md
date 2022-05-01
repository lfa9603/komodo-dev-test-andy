# Why are you sad Eeyore?

One of the great challanges Komodo tackles is to ensure proactiveness in the way we tackle students' issues.

You are asked to analyse the data contained in the main/students.json file. This file contains a set of students information regarding a set of collected metrics. The metrics are simple objects with a name. The students objects have a name, and a list of collected metrics results containing a metric reference and a 1-10 value where *1 is low (negative) and 10 is high (positive)*.

You are then asked by Komodo's PO to create a simple system that can analyse the data and spot trends (KomodoTrends). The trends we are asking you to spot are already given and these are:

- Trend1: A user that shows metric value consistently lower than 4.
- Trend2: Current moving average of 3 collections for a metric is lower than 3.

In order for the PO and Komodo dev team to integrate your KomodoTrends with the existing system, KomodoTrends  should be able to provide the trends spotted and the metric information that contribute to these for a single user. In the case a trend is not found for a user, the app should return accordingly or simply ignore the trend for the user.


### Please note
- We would prefer this written in either JavaScript/Typescript.
- You are not required to create an API! We are assuming you know what an API is and that you would be able to easily implement this into a RESTful/GraphQL system
- This should take you around 2/3 hours. **We are not trying to trick you into doing more work**. We want your solution to satisfy your standards but we are aware you might be busy with a little thing called 'life'. Please do your best, but we are not using project size, LOC or hours spent on the project as success metrics.


### Let us know as soon as you are done!
Feel free to contact Lorenzo on the following email address: lorenzo.fasano@komodowellbeing.com

### Good luck!!



### Andy's notes
- `npm test` will run unit tests
- `npm run dev-server` will compile TS code to JS in watch mode
- `npm start` will run /dist/main.js

Running `main.ts` will call the komonoTrends function with mock data and log the output to the console.