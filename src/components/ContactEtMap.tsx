import mapboxgl from 'mapbox-gl';

const ContactEtMap = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicHN0YXJseWsiLCJhIjoiY2t4aHZocGY1MDRrYTJycWt5d3psbXBseSJ9.XJdIhUYxjSNQNl13nfSuTA';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [6.55, 3.35],
    zoom: 18,
  });

  return (
    <section className="p-5 ">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location: </span>
                No 4, Osogbo, Osun State, Nigeria
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone: </span>
                (234) 810 1853 505
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone: </span>
                (234) 810 1853 505
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment email: </span>
                bukoyesamuel9@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student email: </span>
                bukoyesamuel9@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map" className="map-container" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactEtMap;
