# Would-You-Rather Project

Would You Rather App is web application that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

In this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

# Quickstart

### Install

Clone Would-You-Rather project:
```
https://github.com/CuneytYilmaz/would-you-rather-app
```

Install project dependencies via npm:
```
npm install
```

Start the development server:
```
npm start
```

 # Pages
 
1. **Login Page** : The person using this application should logging in as an existing user. It can be select from list of users. Once the user logs in, the home page shows.

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/login.png" height="450"/>
</p>

2. **Home Page** : Once the user logs in, the user can be able to toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions show by default, and the name of the logged in user is visible on the page.

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/home1.png" height="450"/>
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/home2.png" height="450"/>
</p>

3. **Question Page** : When a poll is clicked on the home page, the following is shown:

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/question.png" height="450"/>
</p>

4. **Result Page** : Upon voting in a poll, all of the information of an answered poll is displayed. The user’s response is recorded and clearly visible on the poll details page. Users can only vote once per poll; they can't be allowed to change their answer after they’ve voted -- no cheating allowed! When the user comes back to the home page, the polling question is in the “Answered” column.

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/result.png" height="450"/>
</p>

5. **New Question Page** : It would be no fun to vote in polls if we couldn’t post our own questions! The form for posting new polling questions is available in this page. The application shows the text “Would You Rather” and have a form for creating two options. Upon submitting the form, a new poll is created and the new polling question is in the correct category on the home page.

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/newQuestion.png" height="450"/>
</p>

6. **Leader Board Page** : Users are ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered. The more questions you ask and answer, the higher up you move.

<p align="center">
<img src="https://github.com/CuneytYilmaz/would-you-rather-app/blob/master/src/img/leaderboard.png" height="450"/>
</p>

 # Contributing

Would-You-Rather-App was originally written and maintaned by Cuneyt Yilmaz. Many improvements and bugfixes were contributed by the [open source community](https://github.com/cuneytyilmaz/would-you-rather-app/graphs/contributors).

 # License

MIT. Please see the [license file](LICENSE) for more information.
