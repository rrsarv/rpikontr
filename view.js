// Представление: отображение поездок
class TripView {
    constructor() {
        this.tripForm = document.getElementById('trip-form');
        this.tripListElement = document.getElementById('trip-list');
        this.dateFilterElement = document.getElementById('date-filter');
        this.completedFilterElement = document.getElementById('completed-filter');
    }

    // Отображение списка поездок
    renderTrips(trips) {
        this.tripListElement.innerHTML = ''; // Очистить текущий список

        trips.forEach((trip, index) => {
            const tripElement = document.createElement('li');
            tripElement.classList.add('trip-item');
            tripElement.innerHTML = `
                <strong>${trip.destination}</strong> - ${trip.date}
                <p>${trip.notes}</p>
                <p><em>Status: ${trip.status}</em></p>
                <button onclick="editTrip(${index})">Редактировать</button>
                <button onclick="deleteTrip(${index})">Удалить</button>
            `;
            this.tripListElement.appendChild(tripElement);
        });
    }

    // Слушатель для добавления новой поездки
    addSubmitListener(callback) {
        this.tripForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const destination = document.getElementById('trip-destination').value;
            const date = document.getElementById('trip-date').value;
            const notes = document.getElementById('trip-notes').value;
            const status = document.querySelector('input[name="trip-status"]:checked').value;

            callback(destination, date, notes, status);
            this.tripForm.reset();
        });
    }

    // Слушатель для фильтра
    addFilterListener(callback) {
        this.dateFilterElement.addEventListener('input', () => {
            callback(this.dateFilterElement.value, this.completedFilterElement.checked);
        });
        this.completedFilterElement.addEventListener('change', () => {
            callback(this.dateFilterElement.value, this.completedFilterElement.checked);
        });
    }

    // Слушатель для удаления поездки
    addDeleteListener(callback) {
        // Метод уже привязан к объекту представления, не нужен здесь
    }

    // Слушатель для редактирования поездки
    addEditListener(callback) {
        // Метод уже привязан к объекту представления, не нужен здесь
    }
}
