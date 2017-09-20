# taxman

taxman is a microservice written in node that retrieves, scrapes, and parses local and state tax information from http://www.revenue.nebraska.gov/question/sales.html
and calculates tax given an amount.  

To run the service locally `$ node server.js`

This will start the server running on port 3500.

To test put http://localhost:3500/taxrate/Nebraska/Lincoln and / or http://localhost:3500/calculate/Nebraska/Lincoln/1000
into your browser. 
