// Модель данных: поездки
class TripModel {
    constructor() {
        this.trips = [];
    }

    // Добавление новой поездки
    addTrip(destination, date, notes, status) {
        const newTrip = { destination, date, notes, status };
        this.trips.push(newTrip);
    }

    // Удаление поездки по индексу
    deleteTrip(index) {
        this.trips.splice(index, 1);
    }

    // Редактирование поездки
    editTrip(index, destination, date, notes, status) {
        const trip = this.trips[index];
        trip.destination = destination;
        trip.date = date;
        trip.notes = notes;
        trip.status = status;
    }

    // Получение всех поездок
    getTrips() {
        return this.trips;
    }
}
