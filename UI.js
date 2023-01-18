const getSelectedValues = () => {
    // Show calendar selector for start date
    // const startDate = Calendar.getDefaultCalendar().getSelectedDates()[0];
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Show dropdown list of all calendars
    const allCalendars = CalendarApp.getAllCalendars();
    const calendarList = allCalendars.map(calendar => calendar.getName());
    const calendarSelect = HtmlService.createHtmlOutput('<select name="calendarList">')
        .append(calendarList.map(calendar => `<option value="${calendar}">${calendar}</option>`))
        .append('</select>');

    // Show dropdown list of plan names
    const planList = plans.map(plan => plan.plan);
    const planSelect = HtmlService.createHtmlOutput('<select name="planList">')
        .append(planList.map(plan => `<option value="${plan}">${plan}</option>`))
        .append('</select>');

    // Show the dialog box
    const dialog = HtmlService.createHtmlOutput(calendarSelect)
        .setTitle('Select Plan and Calendar')
        .setWidth(300)
        .setHeight(200)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME).getBlob();
    //                  .showModalDialog();
    Logger.log(HtmlService.createHtmlOutput(planSelect).getContent());
    // Get the selected values
    const selectedPlan = dialog.parameter.planList;
    const selectedCalendar = dialog.parameter.calendarList;
    const selectedStartDate = startDate;
    return {
        selectedPlan,
        selectedCalendar,
        selectedStartDate
    };
};
