"use strict";
class CalendarItem {
    static #UNSET = Symbol("unset");
    static #isUnset(v) {
        return v === this.#UNSET;
    }
    static #error(num) {
        return this[`ERROR_${num}`];
    }
    static {
        for (let [idx, msg] of [
            "ID is already set.",
            "ID is unset.",
            "Don't instantiate 'CalendarItem' directly.",
        ].entries()) {
            this[`ERROR_${(idx + 1) * 100}`] = msg;
        }
    }
    static isSameItem(item1, item2) {
        if (#ID in item1 && #ID in item2) {
            return item1.#ID === item2.#ID;
        }
        else {
            return false;
        }
    }
    #ID = CalendarItem.#UNSET;
    #setID(id) {
        if (CalendarItem.#isUnset(this.#ID)) {
            this.#ID = id;
        }
        else {
            throw new Error(CalendarItem.#error(100));
        }
    }
    description = null;
    startDateTime = null;
    constructor() {
        if (new.target !== CalendarItem) {
            let id = Math.round(Math.random() * 1e9);
            this.#setID(id);
        }
        else {
            throw new Error(CalendarItem.#error(300));
        }
    }
    getID() {
        if (!CalendarItem.#isUnset(this.#ID) && typeof this.#ID === "number") {
            return this.#ID;
        }
        else {
            throw new Error(CalendarItem.#error(200));
        }
    }
    getDateTimeStr() {
        if (this.startDateTime instanceof Date) {
            return this.startDateTime.toUTCString();
        }
    }
    summary() {
        console.log(`(${this.getID()}) ${this.description} at ${this.getDateTimeStr()}`);
    }
}
class Reminder extends CalendarItem {
    #complete = false;
    [Symbol.toStringTag] = "Reminder";
    constructor(description, startDateTime) {
        super();
        this.description = description;
        this.startDateTime = startDateTime;
    }
    isComplete() {
        return !!this.#complete;
    }
    markComplete() {
        this.#complete = true;
    }
    summary() {
        if (this.isComplete()) {
            console.log(`(${this.getID()}) Complete.`);
        }
        else {
            super.summary();
        }
    }
}
class Meeting extends CalendarItem {
    #getEndDateTimeStr() {
        if (this.endDateTime instanceof Date) {
            return this.endDateTime.toUTCString();
        }
    }
    endDateTime = null;
    [Symbol.toStringTag] = "Meeting";
    constructor(description, startDateTime, endDateTime) {
        super();
        this.description = description;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
    }
    getDateTimeStr() {
        return `${super.getDateTimeStr()} - ${this.#getEndDateTimeStr()}`;
    }
}
var callMyParents = new Reminder("Call my parents to say hi", new Date("July 7, 2022 11:00:00 UTC"));
callMyParents.toString();
callMyParents.summary();
callMyParents.markComplete();
callMyParents.summary();
callMyParents instanceof Reminder;
callMyParents instanceof CalendarItem;
callMyParents instanceof Meeting;
var interview = new Meeting("Job Interview: ABC Tech", new Date("June 23, 2022 08:30:00 UTC"), new Date("June 23, 2022 09:15:00 UTC"));
interview.toString();
interview.summary();
interview instanceof Meeting;
interview instanceof CalendarItem;
interview instanceof Reminder;
Reminder.isSameItem(callMyParents, callMyParents);
Meeting.isSameItem(callMyParents, interview);
