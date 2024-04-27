import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TeacherSidebar from "./TeacherSidebar";

const baseUrl = "http://127.0.0.1:8000/api";

function AddCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category:'',
    title:'',
    description:'',
    f_img:'',
    techs:''
});
  useEffect(() => {
    try {
      axios.get(baseUrl + "/category").then((res) => {
        setCats(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(cats);
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
                <label for="title" className="col-sm-2 col-form-label">
                  Category
                </label>
                <div className="col-sm-10">
                  <select name="category" className="form-control">
                    {cats.map((category, index) => {
                      return <option key={index}>{category.title}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="title" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="title" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="description"
                  ></textarea>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="video" className="col-sm-2 col-form-lable">
                  Featured Image
                </label>
                <div className="col-sm-10">
                  <input type="file" className="form-control" id="video" />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="techs" className="col-sm-2 col-form-label">
                  Technologies
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="techs"
                    placeholder="php, java, etc.."
                  ></textarea>
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
