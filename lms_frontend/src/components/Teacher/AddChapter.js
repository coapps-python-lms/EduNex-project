import { Link } from "react-router-dom";
import { useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";

function AddChapter() {
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
            <h5 className="card-header">Add Chapter</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label for="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="description"></textarea>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="video" className="col-sm-2 col-form-lable">
                  Video
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="video"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="techs" className="col-sm-2 col-form-label">
                  Remarks
                </label>
                <div className="col-sm-10">
                  <textarea className="form-control" id="techs" placeholder="This video is focused on basics of introduction"></textarea>
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
export default AddChapter;
