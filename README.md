# INITIAL TEST SUITE AUTOMATION FOR IP BOT PAGES AND API'S



 https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## INTRODUCTION

This project is to test with automation web sites. Note: This kind of test does not replace the manual test.
But at least helps specially when you want to test with three browsers like Chrome, Firefox and Edge. The way that the site is tested,
in this case is http://islandpitch.com. There are so far with this program four goals to tests. One is if a text, or picture, or links, etc exists.

Another focus is when the user is signing up in the page. When the user is signing up he/she is redirected to another page.
Then is included the first test, if something that identified that page exists. The program will do all the events.

The third focus is the login. It will do more or less the samething than the second one, and also the last one that is forgot password.
The only difference is there are parts that has to be tested manually, example the email received.

The directories that are there, they are data that has all the tests data to test. The path and some elements to tests (It will be talked about
later). This directory has four others directories and each one has one file. The name is the focus.

The directory test has two directories. One is pageobjects has all the classes used to tests. All classes have their attributes and their functions.
The main file in this directory is the file dynamic_loading_page.js. Such file has all the functions to be used for the test.
And the another is specs. This is the main directory. This is where are the files to be called.

## BASE OF THE TEST

The idea of the test is follow test cases from quality watcher. The test normally start being doing manually in one browser, in this case
Chrome and then test for the other browser.
When the test result is pass or fail (It is going to be talked about it later) then the result will be reflected in the console. The fact that
the test fails does not mean that the program is doing bad. The recomendation is check manually or check the screenshots with the name of the test
caseand the navegator and do the test manually to see if the result match with the expectation. All the text cases texts that are displayed
come from the quality watcher test cases. This is the URL https://app.qualitywatcher.com/1/test-runner/1. Even that the test cases reflected
in the automation could not be accurated. The idea is be accurated as it can be.

## EXPECTED TO BE EXISTED

One of the functions of the test is watch if an element exist. An element could be an html tag, or attribute like class, etc where is the text, link,
image, etc.
The test/data are in the file data/exist/exist.js. The fields are those.
PATH: The path where is going to be tested, example, the url
is http://ispandpitch.com/ip-bot/social-media-automation-optimize-workflows-storytelling then the path is ip-bot/social-media-automation-optimize-workflows-storytelling
ELEMENT: The expected element. Like was mentioned before, the element could be a tag, or attribute like class, Id, etc.
TEXT: The name or text of the test case.

## REGISTER

Another function is registering. It has a similar thing with the expected because there is a final element to be expected. This test is going to
fill some fields of the registering page, and clicking buttons. There are tests cases that is with valid emails, invalid emails and
invalid passwords. With that the elements expected are if the user goes to the page if is succesfully or the elements of the error messages.
The test data sorce is in register/register.js. The fields are:
- path: Same thing to be existing test.
- inputuser: The input field for the user email.
- inputpassword: The field for the password.
- confirminputpassword: Field to the input password.
- uservalue: The value to be typed in the user field.
- passwordvalue: The password to be typed in the field password.
- confirmPasswordValue: The value to be typed in the confirm password field.
- check: The check element to be clicked.
- text: Same thing than before.
- Element expected: Same thing, in this case is a text.

## LOGIN

The idea is to find errors in the login managements. If the user has the rights credential is directed to a site logged. When some of them
is ivalid, an error message will be displayed.

The test data source is login/login.js and the attributes are the same than before.

## FORGOT

The same thing. The program goes to login and clicks the forgot password link and does all the submition.

## INSTALATION

1. Clone the repository. https://www.loom.com/share/51afd345a9d74033b533136754cec969
2. Open the directory where is the repository and click right button. In the menu select 'Open in terminal'.
3. Type npx wdio run wdio.conf.js
4. Follow the video 'https://www.loom.com/share/d1e074d707cb47e6a4a6851707d68e74'
5. Open the file \test\pageobject\page.js and change 'https://the-internet.herokuapp.com' for https://www.islandpitch.com.
   https://www.loom.com/share/26b860a491d24c18b3c86f30d15d9bf8

## EXECUTION

1. Open the directory where is the repository and click right button. In the menu select 'Open in terminal'.
2. If you want to execute the exist test type npx wdio run ./wdio.conf.js --spec test.exist.js.
   https://www.loom.com/share/e432cb6243bd4ed8921c6c9120a5db2a
3. If you want to execute the register test type npx wdio run ./wdio.conf.js --spec test.registration.js.
   https://www.loom.com/share/1f184de93e394cc388118fa359a8d7ed
4. To test the login test, type npx wdio run ./wdio.conf.js --spec test.login.js.
   https://www.loom.com/share/6994c01d846548c2a22cbe7a79ccb4e1
5. To test the forgot password test type npx wdio run ./wdio.conf.js --spec test.forgot.js.
   https://www.loom.com/share/418a6462bc9f42b8aea19e3e9c30cab4

Note: If you want to modify something to test someting new. The only thing to be recomended is modify the data of the folder data
keeping the same format.

## SCREENSHOT

The images of the testing are in the Scrennshot folder and has the name of what is tested.

Feel free to give feedbacks about the project to the email juan.groening@islandpitch.com.

Note: To execute the my fave local test in console type npx wdio run ./wdiofave.conf.js --spec test.existfave.js

```text

```

## CHECK IS THE PAGE HAS CHANGED.

There are two ways to check if a page was changed. One is by pictures and other by html code.

## By pictures
https://www.loom.com/share/444dc5b634034236b6856e7edfb1009a
1) Open the console and type npx wdio run ./chromemyfave.conf.js --spec ./test/specs/test.picture.js. This take the pictures of some elements.
2) a) Type node compare.js 
   b) Select one of the pictures in the screenshot folder with the name of the elements to be checked. With the right button select rename, select the name of the picture without the extension. Example: 'gb022724.png', 'gb022724'. Press space, and compare with another, example, gb01152024.png, gb, same first procedure. Copy the whole name of the file except the extention. Then press enter.
   The data are:
   Different score: How in percentage is different the image. 

## By code
https://www.loom.com/share/8587272c948a4208a67fd4f07217b9db
1) Open the console and type npx wdio run ./chromemyfave.conf.js --spec ./test/specs/test.htmlfile.js in the htmlfiles folder.
2) Select one of the files in the htmlfiles folder with the name of the elements to be checked. With the right button select rename, select the name of the file without the extension. Example: 'main0210204.html', 'main0210204'. Press space, and compare with another, example, gb01152024.html, gb, same first procedure. Copy the whole name of the file except the extension. Then press enter.





