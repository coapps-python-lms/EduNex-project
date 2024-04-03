import { useParams,Link } from "react-router-dom";
function CourseDetail() {
  // let { course_id } = useParams();
  // let { teacher_id} = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4">
          <img
            src="/logo512.png"
            className="img-thumbnail"
            alt="Course_Image"
          />
        </div>
        <div className="col-8">
          <h3>course title</h3>
          <p>
            Using a combination of grid and utility classes, cards can be made
            horizontal in a mobile-friendly and responsive way. In the example
            below, we remove the grid gutters with .g-0 and use .col-md-*
            classes to make the card horizontal at the md breakpoint. Further
            adjustments may be needed depending on your card content.
          </p>
          <p className="fw-bold">
            Course By:<Link to="/teacher-details/1">Teacher 1</Link>
          </p>
          <p className="fw-bold">Duration: 3 Hours 30 minutes </p>
          <p className="fw-bold">Total Enrolled: 456 students</p>
          <p className="fw-bold">Rating: 4/5 </p>
        </div>
      </div>
      {/*Course videos */}
      <div className="card mt-4">
        <h5 className="card-header">Course Videos</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
            {/* <!-- Modal start --> */}
                <div className = "modal fade" id="videoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className = "modal-dialog modal-lg">
                    <div className = "modal-content">
                      <div className = "modal-header">
                        <h5 className = "modal-title" id="exampleModalLabel">Video 1</h5>
                        <button type="button" className = "btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className = "modal-body">
                        <div class="ratio ratio-16x9">
                          <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* <!-- Modal end --> */}
          </li>
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
          </li>
          <li className="list-group-item">
            Introduction
            <span className="float-end">
              <span className="me-5">1 hour 30 mins</span>
            <button className="btn btn-sm btn-danger">
              <i className = "bi bi-youtube"></i>
            </button>
            </span>
          </li>
        </ul>
      </div>
      <h3 className="pb-1 mb-4 mt-5">
        Related courses
      </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/1">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <Link to="/detail/2">
              <img src="/logo512.png" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/2">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseDetail;
