# Employee-Review-System

An application that allows employees to submit feedback toward each other’s performance.

- Sign In:-
    - Sign in Using email id and password
    - For Admin:-
        - email_id- admin@gmail.com
        - password- admin12345

- Sign Up:-
    - Sign up Using email id
    - New sign-up user is an employee

- Admin view:- <br />
    - Add/remove/update/view employees
    - Edit Roles (Employee or Admin)
    - Add/update/view performance reviews
    - Assign employees to participate in another employee's performance review
    - Admin can make an employee an admin

- Employee view:-
    - List of performance review requiring feedback
    - Submit feedback

---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.21.3

    $ npm --version
    6.14.18

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install Project

    $ git clone https://github.com/imdivyachoudhary/Employee-Review-System.git
    $ cd Employee-Review-System
    $ yarn install

## Running the project

    $ yarn start

## Simple build for production

    $ yarn build



