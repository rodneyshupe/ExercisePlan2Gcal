const test = () => {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const calendarName = 'Test Calendar ' + now.getFullYear() + now.getMonth() + now.getDate();
    const calendar = CalendarApp.createCalendar(calendarName);
    const calendarId = calendar.getId();

    // Call the createCalendarEvents function and pass in the JSON object, the target calendarname, and the new start date
    createCalendarEvents(events_c25k, calendarId, startDate);
};