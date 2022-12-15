# Yoga-App

Built a simple form using HTML and Bootstrap to accept details from user and make a call to a REST api in NodeJs which does the following
-- Accepts the user data, does basic validations
-- Store the data in MongoDB database
-- Assume that you have a mock function named CompletePayment() which accepts the
details of user and payment and returns success
-- Return the response to front-end depending on the payment response from
CompletePayment() function


Tech Stack:
Nodejs
MongoDB
Bootstrap
HTML

hosted in cyclic.sh : https://yogaclass.cyclic.app/


To run on a local system
1)Clone repo
2)on root run 'npm install'
3)run 'npm start'
4)navigate to http://localhost:3000/

# ER Diagram


![Screenshot from 2022-12-12 19-59-28](https://user-images.githubusercontent.com/90437519/207070948-ac1398b2-69eb-4732-9f57-6705a90537a5.png)

In this diagram, 'User' is the entity and the other fields are its attributes. The '1' indicates that each User has one value for each of these attributes. The lines between the attributes and the 'User' entity represent the relationships between them.
