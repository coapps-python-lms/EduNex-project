import { Link } from "react-router-dom";
function AllCourses() {
  return (
  <div className="container mt-3">
  {/**Latest courses */}
  <h3 className="pb-1 mb-4">
        Latest courses
      </h3>
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/1">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/1">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/2">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/2">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/3">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/3">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <Link to="/detail/4">
              <img src="logo-demo.jpg" className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/detail/4">Course title</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/**End Latest courses */}
      {/* pagination start */}
      <nav aria-label="Page navigation example mt-5">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
      {/* pagination end */}
  </div>
  );
}
export default AllCourses;
