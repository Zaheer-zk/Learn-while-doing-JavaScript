// # Asynchronous code
/*
Asynchronous javaScript is one in which some 
lines of code take time to run.
These tasks are run in the background
while the Javascript engine keeps
executing other line of code.
When the result of async js takes gets available,
is then used in the program.
 */

// setInterval ->
// const myInterval = setInterval(() => {
//   console.log('Hello world');
// }, 1000);

// // To clear Interval
// clearInterval(myInterval);

// setTimeout
// const myTimeout = setTimeout(() => {
//   console.log('Hello world');
// }, 1000);

// clearInterval(myTimeout);

// Mainly use in Data fetching -> API

// using callback
// const fetchUser = (userName, callback) => {
//   setTimeout(() => {
//     callback({ userName });
//   }, 2000);
// };

// fetchUser('Zaheer', (user) => {
//   console.log(user.userName);
// });

// Callback hell🔥 -
const fetchUser = (userName, callback) => {
  setTimeout(() => {
    callback({ userName });
  }, 2000);
};

const fetchUserPhoto = (userName, callback) => {
  setTimeout(() => {
    callback(['Photo 1', 'Photo 2']);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    callback('Details..');
  }, 2000);
};

fetchUser('Zaheer', (user) => {
  console.log(user.userName);

  fetchUserPhoto(user.userName, (photo) => {
    console.log(`Your photo ${photo}`);
    fetchPhotoDetails(photo[0], (photoDetails) => {
      console.log(`Your photo details ${photoDetails}`);
      fetchUserPhoto(user.userName, (photo) => {
        console.log(`Your photo ${photo}`);
        fetchPhotoDetails(photo[0], (photoDetails) => {
          console.log(`Your photo details ${photoDetails}`);
          fetchUserPhoto(user.userName, (photo) => {
            console.log(`Your photo ${photo}`);
            fetchPhotoDetails(photo[0], (photoDetails) => {
              console.log(`Your photo details ${photoDetails}`);
              fetchUserPhoto(user.userName, (photo) => {
                console.log(`Your photo ${photo}`);
                fetchPhotoDetails(photo[0], (photoDetails) => {
                  console.log(`Your photo details ${photoDetails}`);
                  fetchUserPhoto(user.userName, (photo) => {
                    console.log(`Your photo ${photo}`);
                    fetchPhotoDetails(photo[0], (photoDetails) => {
                      console.log(`Your photo details ${photoDetails}`);
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
