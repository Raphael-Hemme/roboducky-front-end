# ROBODUCKY - FRONTEND
This is the fronend repository of roboducky -
a "robotic" rubber duck that listens patiently **and** actually remembers your previous conversations.
  
## INTRODUCTION


Roboducky is a web application that facilitates the continuation and transformation of a longstanding tradition in software development. Developers often times find themselves in challenging situations where they have to figure out some logic or problem with their code but do not immediately come up with a good solution. Talking to another person might help in such a situation but sometimes nobody is there to listen or you might want to spare your co-workes, family or friends the time to listen to you just in order for you to come up with a solution on your own after a while.  
In such cases developers have long enjoyed talking to a rubber duck on their desk that would patiently listen to them no matter what time of day or night.
During their conversations with their rubber ducks many issues and troubles have been talked through and those rubbery companions facilitated breakthrough ideas and solutions.  
But unfortunately those patient rubber ducks could be described as highly prone to intense amnesia.
This is where roboducky comes in.  
Roboducky will listen to your issues and struggles as patiently as its rubbery relatives but it also can remember previous conversations and therefore may be able to help you out when encountering similar issues.
  
## FEATURES
All features combine frontend and backend.

### CURRENT FEATURES 

* Registration of a new account with a personalized roboducky
* Login
* Creating a new conversation including:
  * **Description** of your issue (your monolog),
  * **Solution** for that issue if roboducky's patient listening enabled you to come up with one already,
  * **Mood**
  * **Tags** (manually entered tags)
* Retrieving past conversations:
  * All personal conversations,
  * Conversations with specific tags

### WORK IN PROGRESS
* Editing previous conversations
* Deleting previous conversations if intended
* Deleting the own account if intended
* Improvement of UI (mainly contextual presence of buttons only if needed)
* Add a title to conversations that is used as such in retrieved conversations if present and only defaults to the mood if no title was given yet.
  
### PLANNED FEATURES

* Basic natural language processing (see "auto keywords" below)
* New conversation data including:
  * **Code snippets**,
  * **Auto keywords** suggested for you to use as tags by roboducky
* New retrieval functions:
  * Automatically suggesting similar conversations from the past if - and only if - you ask roboducky for help.
  * Retrieve previous conversations via mood
* Voice to text entry, so that you can actually "talk" to roboducky via the web speech api
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
  
## CURRENT TECH-STACK:
  
| Frontend      | Backend               |
| ---           | ---                   |
| React.js      | Node.js & Express     |
| Material-UI   | MongoDB & Mongoose    |

