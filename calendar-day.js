document.addEventListener('DOMContentLoaded', function () {
    const dayDate = document.getElementById('day-date');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();

    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);
    const halfHours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:30`);

    function renderDay(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dayDate.textContent = date.toLocaleDateString('fr-FR', options);

        const hoursContainer = document.querySelector('.hours');
        const appointmentsContainer = document.querySelector('.appointments');

        hoursContainer.innerHTML = '';
        appointmentsContainer.innerHTML = '';

        hours.forEach(hour => {
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hour');
            hourDiv.textContent = hour;
            hoursContainer.appendChild(hourDiv);

            const halfHourDiv = document.createElement('div');
            halfHourDiv.classList.add('hour');
            halfHourDiv.textContent = halfHours[hours.indexOf(hour)];
            hoursContainer.appendChild(halfHourDiv);

            const appointmentDiv = document.createElement('div');
            appointmentDiv.classList.add('appointment');
            appointmentsContainer.appendChild(appointmentDiv);

            const halfAppointmentDiv = document.createElement('div');
            halfAppointmentDiv.classList.add('appointment');
            appointmentsContainer.appendChild(halfAppointmentDiv);
        });

        // Ajout d'exemples de rendez-vous
        const exampleAppointment = document.createElement('div');
        exampleAppointment.classList.add('appointment');
        exampleAppointment.textContent = 'Rendez-vous exemple';
        appointmentsContainer.appendChild(exampleAppointment);
    }

    prevButton.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() - 1);
        renderDay(currentDate);
    });

    nextButton.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() + 1);
        renderDay(currentDate);
    });

    renderDay(currentDate);
});