// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    const model = new TripModel();
    const view = new TripView();
    const object = new TripObject(model, view);

    // Инициализация отображения поездок
    view.renderTrips(model.getTrips());
});
