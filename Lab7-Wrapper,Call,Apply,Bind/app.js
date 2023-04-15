//Q1

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",
  loginOk() {
    alert(`${this.name} logged in`);
  },
  loginFail() {
    alert(`${this.name} failed to login`);
  },
};

//Q. How to fix this? 

// askPassword(user.loginOk,user.loginFail);

// The code snippet is likely to give an error because the functions loginOk() and 
// loginFail() are passed as callback functions to the askPassword() function, and 
// therefore their this keyword inside the functions will not refer to the user object.

//Using Wrapper Function
askPassword(() => user.loginOk(), () => user.loginFail());

// //Using Bind Method
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// //Using the call method and apply method 

function askPasswordUsingCall(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok.call(user);
    else fail.call(user);
}

askPasswordUsingCall(user.loginOk,user.loginFail);

function askPasswordUsingApply(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok.apply(user);
    else fail.apply(user);
}

askPasswordUsingApply(user.loginOk,user.loginFail);


// //Q2

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
      this.students.forEach((student) => {
        console.log(this.title + ": " + student);
      });
    }
  };
  
group.showList.bind(group)();
