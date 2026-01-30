function Event(name, location, date) {
  ((this.name = name), (this.location = location), (this.date = date));
}

Event.prototype.getDetails = function () {
  return `Event: ${this.name} Location: ${this.location} Date: ${this.date}`;
};

function Conference(name, location, date, keynoteSpeaker) {
  Event.call(this, name, location, date);
  this.keynoteSpeaker = keynoteSpeaker;
}

Conference.prototype = Object.create(Event.prototype);
Conference.prototype.constructor = Conference;

Conference.prototype.getDetails = function () {
  const eventDetails = Event.prototype.getDetails.call(this);
  return `${eventDetails} Keynote Speaker: ${this.keynoteSpeaker}.`;
};

const conference = new Conference(
  "Nighmares of JS",
  "Deep inside a nested try-catch block",
  "2026-01-30",
  "The guy who didn't leave any comments",
);
console.log(conference.getDetails());
