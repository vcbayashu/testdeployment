What backend does exactly?
For Every request (for data) from frontend, there are codes written in backend server called as API .
 Backend server send data in the form of responses according to request URL coming from  frontend.

Sometimes Frontend also request to send data to backend like Form data saving in database.

Backend Server itself does not store data. It does manage the data sending /receiving logic. Server takes data from database as per demand from frontend

Initial Steps to Create Web Application 
1. Create root folder with "APPNAME"
2. Inside that folder, create two subfolders with name "Frontend" and "Backend"
3. Open VSCode for Backend folder. Make sure it is the root folder for VSCode.

Steps to create Backend server
1. Open VSCode terminal exactly at backend. (Ctrl +J )
2. Write "npm init -y" and then enter
3. As soon as you run this command, a file named "package.json" is created automatically
4. Create a file named "index.js" which will be the root/main file of your server where server will be created and started always


package.json file contains information about the backend server such as
1. Details of dependencies/packages installed
2. Deployment Details
3. Other info etc

package-lock.json contains additional information about the dependencies installed
node_modules is a very large folder which contains codes of the dependencies because of which
packages works.

Index.js is the root file of your backend server where execution of server begins.

NPM stands for Node package Manager, which contains millions of software which 
you can use for building your application. It is like a liabrary of softwares
1. express => for creating server
2. mongoose => for connecting database
3. bcryptjs => used for password encryption
4. aws-sdk => used for connecting Amazon web services
5. multer => used for image/document upload
6. jsonwebtoken => for user authorization and security
7. helmet => used to protect your server from malicious attack etc.
8. sendrind => used for sending emails
9. Twilio => for sending OTP to your phonenumbers..
and millions more....

npm packages === dependencies === softwares


To install any NPM package we need to write this command
npm install packagename


POSTMAN => Postman is a virtual frontend tool which is used for requesting and
sending data to backend server, until frontend is not fully prepared.
Postman is used to call/hit any specific api written in backend.
We need postman to check whether the api is working as expected or not.


Frontend can either request for data, or send data to backend server
If frontend request for data, then we use GET api.
IF frontend send data to backend, then we use POST api.

SQl databases uses table to represent data and they are Relational
But MONGODB is NOSQL, Non-Relational database
which does not store data in the form of tables, but store them in the form of documents
which are actually objects. This gives an upper hand in using MONGODDB as using table is quite
tedious.

SQL uses tables, so we cannot have nested data in them.But MONGODB uses objects to store documents
so we can easily store nested documents using nested objects


SQL uses a seprate server "APACHE" for running other than the backend server,
but MongoDB can run on the same backend server so no seprate server is needed


Login authorization
There are two types of APIs
1. Public APIs => which are freely accessible, i.e. No Login Required  e.g. Landing pages apis etc
2. Private APIs => which are private, i.e. Only accessible after login e.g. Your Profile, Your chats etc

A private works on the principle of cookies.
Whenever a user login to the server with correct credentials, server returns a token (ticket),
Now this token is stored in the cookies of the browser till the time user logs out.
Now whenever a request to private api is made, server checks whether the token is present
in the browser or not. If the valid token is present in the cookies, then private api
runs successfully else it returns authorization error.

MONGODB
MongoDB is a database which is used to store data.
1. MongoDB store data in the form of documents which are basically objects.
2. MongoDB stores specific kinds of data in specific buckets, which are called collections
3. Each collection must hold document with same keys. i.e Similar documents in one collection. 
(This is called modelling)
4. MongoDB stores data in BSON format (Binary JSON)


Async/Await concept concept (Very Important ***)
=> Normally in any programming language, the code execution occurs sequentially i.e. line by line
or you can say one after the other.
Because of which, the next line waits for the previous line to be executed.

So, sometimes the next line have to wait for long because the previous line may take too much time
for its execution. So to avoid this problem, we use Async/await functions.

1.Synchronus way of coding, ie. one by one
2. Asynchronus => If one line is taking too much time in execution (Recipe taking time),
 then the control (waiter) may go to the next line (table),
only if the time taking line (waiter) have tp give a promise that he will execute soon 
(recipe will be made soon) and asks to wait.