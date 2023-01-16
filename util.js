const getCalendarIdByName = (calendarName) => {
    const calendarList = Calendar.CalendarList.list();
    const calendar = calendarList.items.find(calendar => calendar.summary === calendarName);
    if (calendar) return calendar.id;
    else throw new Error(`Calendar with the name '${calendarName}' not found.`);
};

// const calendarId = getCalendarIdByName(calendarName);


// Function to read events from a Google Calendar within a specified date range
// Example:
//   const eventData = readCalendarEvents(getCalendarIdByName("Exercise Plan"), new Date("12/04/2017"), new Date("02/26/2018"));
//   Logger.log(JSON.stringify(eventData, null, 2));
const readCalendarEvents = (calendarId, startDate, endDate) => {
    const events = Calendar.Events.list(calendarId, {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString()
    });

    const eventData = events.items
        .map(event => {
            const eventStart = new Date(event.start.date);
            const dateOffset = Math.round((eventStart - startDate + 1) / (1000 * 60 * 60 * 24));
            return {
                summary: event.summary,
                dateOffset: dateOffset
            };
        })
        .sort((a, b) => a.dateOffset - b.dateOffset);

    if (eventData.length > 0) {
        return eventData;
    } else {
        Logger.log("No events found in the specified date range.");
    }
};
