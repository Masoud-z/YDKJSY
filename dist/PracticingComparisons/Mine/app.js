"use strict";
const dayStart = "07:30";
const dayEnd = "17:45";
function scheduleMeeting(startTime, durationMinutes, trueResult) {
    const dayStartArr = dayStart.split(":");
    const dayStartDate = new Date();
    dayStartDate.setHours(+dayStartArr[0]);
    dayStartDate.setMinutes(+dayStartArr[1]);
    dayStartDate.setSeconds(0);
    const dayEndArr = dayEnd.split(":");
    const dayEndDate = new Date();
    dayEndDate.setHours(+dayEndArr[0]);
    dayEndDate.setMinutes(+dayEndArr[1]);
    dayEndDate.setSeconds(0);
    const startTimeArr = startTime.split(":");
    const startTimeDate = new Date();
    startTimeDate.setHours(+startTimeArr[0]);
    startTimeDate.setMinutes(+startTimeArr[1]);
    startTimeDate.setSeconds(0);
    const endTimeDate = new Date();
    endTimeDate.setHours(+startTimeArr[0]);
    endTimeDate.setMinutes(+startTimeArr[1] + durationMinutes);
    endTimeDate.setSeconds(0);
    if (startTimeDate.getTime() < dayStartDate.getTime() ||
        endTimeDate.getTime() > dayEndDate.getTime()) {
        console.log(trueResult, false);
    }
    else {
        console.log(trueResult, true);
    }
}
scheduleMeeting("7:00", 15, "// false: ");
scheduleMeeting("07:15", 30, "// false: ");
scheduleMeeting("7:30", 30, "// true: ");
scheduleMeeting("11:30", 60, "// true: ");
scheduleMeeting("17:00", 45, "// true: ");
scheduleMeeting("17:30", 30, "// false: ");
scheduleMeeting("18:00", 15, "// false: ");
