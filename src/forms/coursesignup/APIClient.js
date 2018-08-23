export const ApiClient = {
  loadPeople: function() {
    return {
      then: function(cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'));
        }, 250);
      }
    };
  },

  savePeople: function(people) {
    const success = !!(this.count++ % 2);

    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.people = JSON.stringify(people);
        resolve({ success });
      }, 250);
    });
  },

  count: 1
};
