// Function to create new events in a calendar using a JSON object
const createCalendarEvents = (eventData, calendarId, startDate) => {
    const calendar = CalendarApp.getCalendarsById(calendarId);
    eventData.forEach(event => {
        const eventStart = new Date(startDate);
        eventStart.setDate(eventStart.getDate() + event.dateOffset);
        calendar.createAllDayEvent(event.summary, eventStart);
    });
};
