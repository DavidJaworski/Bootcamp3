//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://davidjaworski:Jaworski1!@cluster0-0aavr.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '478af28263484ae48d6af44b2d3a2d81' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};
