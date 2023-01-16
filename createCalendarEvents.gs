const getCalendarIdByName = (calendarName) => {
    const calendarList = Calendar.CalendarList.list();
    const calendar = calendarList.items.find(calendar => calendar.summary === calendarName);
    if (calendar) return calendar.id;
    else throw new Error(`Calendar with the name '${calendarName}' not found.`);
}

// Function to create new events in a calendar using a JSON object
const createCalendarEvents = (eventData, calendarName, newStartDate) => {
    const calendarId = getCalendarIdByName(calendarName);
    const calendar = CalendarApp.getCalendarsById(calendarId);
    eventData.forEach(event => {
        const eventStart = new Date(newStartDate);
        eventStart.setDate(eventStart.getDate() + event.dateOffset);
        calendar.createAllDayEvent(event.summary, eventStart);
    });
}

const main = () => {
    // Call the readCalendarEvents function and store the returned JSON object in a variable
    var eventData = readCalendarEvents("Exercise Plan", new Date("12/04/2017"), new Date("02/26/2018"));
    Logger.log(JSON.stringify(eventData, null, 2));
    var eventData = readCalendarEvents("Exercise Plan", new Date("2/27/2018"), new Date("04/23/2018"));
    Logger.log(JSON.stringify(eventData, null, 2));

    // Call the createCalendarEvents function and pass in the JSON object, the target calendarname, and the new start date
    //createCalendarEvents(eventData, "target_calendar_id", new Date("MM/DD/YYYY"));
}