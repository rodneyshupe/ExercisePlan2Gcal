const getCalendarIdByName = (calendarName) => {
    const calendarList = Calendar.CalendarList.list();
    const calendar = calendarList.items.find(calendar => calendar.summary === calendarName);
    if (calendar) return calendar.id;
    else throw new Error(`Calendar with the name '${calendarName}' not found.`);
};

// Function to create new events in a calendar using a JSON object
const createCalendarEvents = (eventData, calendarName, newStartDate) => {
    const calendarId = getCalendarIdByName(calendarName);
    const calendar = CalendarApp.getCalendarsById(calendarId);
    eventData.forEach(event => {
        const eventStart = new Date(newStartDate);
        eventStart.setDate(eventStart.getDate() + event.dateOffset);
        calendar.createAllDayEvent(event.summary, eventStart);
    });
};

const main = () => {
    // Call the createCalendarEvents function and pass in the JSON object, the target calendarname, and the new start date
    createCalendarEvents(eventData, "target_calendar_name", new Date("MM/DD/YYYY"));
};
