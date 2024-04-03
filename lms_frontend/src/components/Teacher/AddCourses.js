import { Link } from "react-router-dom";
import { useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";

function AddCourses() {
  useEffect(()=>{
    document.title = 'Add courses';
  })
  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <TeacherSidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Add Course</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="staticEmail"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control"></textarea>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-lable">
                  Course Video
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="staticEmail" className="col-sm-2 col-form-label">
                  Technologies
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control"></textarea>
                </div>
              </div>

              <div>
                <hr />
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default AddCourses;
