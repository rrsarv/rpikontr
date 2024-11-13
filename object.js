// Логика работы с поездками и фильтрация
class TripObject {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Привязка событий
        this.view.addSubmitListener(this.addTrip.bind(this));
        this.view.addDeleteListener(this.deleteTrip.bind(this));
        this.view.addEditListener(this.editTrip.bind(this));
        this.view.addFilterListener(this.applyFilters.bind(this));
    }

    // Добавление новой поездки
    addTrip(destination, date, notes, status) {
        this.model.addTrip(destination, date, notes, status);
        this.view.renderTrips(this.model.getTrips());
    }

    // Удаление поездки
    deleteTrip(index) {
        this.model.deleteTrip(index);
        this.view.renderTrips(this.model.getTrips());
    }

    // Редактирование поездки
    editTrip(index, destination, date, notes, status) {
        this.model.editTrip(index, destination, date, notes, status);
        this.view.renderTrips(this.model.getTrips());
    }

    // Применение фильтров
    applyFilters(dateFilter, showCompleted) {
        const filteredTrips = this.model.getTrips().filter(trip => {
            return (
                (!dateFilter || trip.date === dateFilter) &&
                (!showCompleted || trip.status === 'Completed')
            );
        });
        this.view.renderTrips(filteredTrips);
    }
}
