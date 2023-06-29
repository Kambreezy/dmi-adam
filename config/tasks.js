module.exports = [
    {
        name: 'task_covid_case_investigation',
        title: 'task.case_investigation_covid',
        icon: 'icon-investigation-outline-gray',
        appliesTo: 'contacts',
        appliesToType: ['person'],
        actions: [{ form: 'covid19_case_investigation' }],
        events: [{
            start: 14,
            days: 14,
            end: 0,
        }],
        resolvedIf: function (contact, report, event, dueDate) {
            return Utils.isFormSubmittedInWindow(
                contact.reports,
                'covid19_case_investigation',
                Utils.addDate(dueDate, -event.start).getTime(),
                Utils.addDate(dueDate, event.end + 1).getTime()
            );
        }
    },
    {
        name: 'task_cholera_case_investigation',
        title: 'task.case_investigation_cholera',
        icon: 'icon-investigation-outline-gray',
        appliesTo: 'contacts',
        appliesToType: ['person'],
        actions: [{ form: 'cholera_case_investigation' }],
        events: [{
            start: 14,
            days: 14,
            end: 0,
        }],
        resolvedIf: function (contact, report, event, dueDate) {
            return Utils.isFormSubmittedInWindow(
                contact.reports,
                'cholera_case_investigation',
                Utils.addDate(dueDate, -event.start).getTime(),
                Utils.addDate(dueDate, event.end + 1).getTime()
            );
        }
    },
    {
        name: 'task_cholera_case_management',
        title: 'task.case_management_cholera',
        icon: 'icon-management-outline-blue',
        appliesTo: 'contacts',
        appliesToType: ['person'],
        appliesIf: function (c) {
            return Utils.getMostRecentReport(c.reports, 'cholera_case_investigation');
            // let recentCaseInvestigation = Utils.getMostRecentReport(contact.reports, 'cholera_case_investigation');
            // return recentCaseInvestigation && Utils.getField(recentCaseInvestigation, 'group.field');
            // return recentCaseInvestigation;
        },
        actions: [{ form: 'cholera_case_management' }],
        events: [{
            start: 14,
            days: 14,
            end: 0,
        }],
        resolvedIf: function (contact, report, event, dueDate) {
            return Utils.isFormSubmittedInWindow(
                contact.reports,
                'cholera_case_management',
                Utils.addDate(dueDate, -event.start).getTime(),
                Utils.addDate(dueDate, event.end + 1).getTime()
            );
        }
    },
    {
        name: 'task_cholera_lab_report',
        title: 'task.lab_form_cholera',
        icon: 'icon-lab-outline-gray',
        appliesTo: 'contacts',
        appliesIf: function (c) {
            return Utils.getMostRecentReport(c.reports, 'cholera_case_investigation');
        },
        appliesToType: ['person'],
        actions: [{ form: 'cholera_lab_form' }],
        events: [{
            start: 14,
            days: 14,
            end: 0,
        }],
        resolvedIf: function (contact, report, event, dueDate) {
            return Utils.isFormSubmittedInWindow(
                contact.reports,
                'cholera_lab_form',
                Utils.addDate(dueDate, -event.start).getTime(),
                Utils.addDate(dueDate, event.end + 1).getTime()
            );
        }
    },
    {
        name: 'task_contact_tracing',
        title: 'task.contact_tracing',
        icon: 'icon-person-tracing-gray',
        appliesTo: 'contacts',
        appliesToType: ['person_contact'],
        actions: [{ form: 'contact_tracing' }],
        events: [{
            start: 14,
            days: 14,
            end: 0,
        }],
        resolvedIf: function (contact, report, event, dueDate) {
            return Utils.isFormSubmittedInWindow(
                contact.reports,
                'contact_tracing',
                Utils.addDate(dueDate, -event.start).getTime(),
                Utils.addDate(dueDate, event.end + 1).getTime()
            );
        }
    }
];