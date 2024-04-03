import {Link} from 'react-router-dom';
import { useEffect } from 'react';

function TeacherRegister(){
  useEffect(()=>{
    document.title = 'Teacher-Register';
  })
    return (
        <div className="container mt-4">
          <div className="row">
            <div className="col-6 offset-3">
              <div className="card">
                <h5 className="card-header">Teacher Register</h5>
                <div className="card-body">
                    <form>
                          <div className = "mb-3">
                            <label for="exampleInputEmail1" className = "form-label">Full Name</label>
                            <input type="text" name="full_name" className = "form-control"/>
                          </div>
                          <div className = "mb-3">
                            <label for="exampleInputEmail1" className = "form-label">Email</label>
                            <input type="email" name='email' className = "form-control"/>
                          </div>
                          <div className = "mb-3">
                            <label for="exampleInputPassword1" className = "form-label">Password</label>
                            <input type="password" name='password' className = "form-control" id="exampleInputPassword1"/>
                          </div>
                           <div className = "mb-3">
                            <label for="exampleInputEmail1" className = "form-label">Qualification</label>
                            <input type="text" name='qualification' className = "form-control"/>
                            <div id="emailHelp" className='form-text'>Professor, Assistant Professor, etc..</div>
                          </div>
                          <div className = "mb-3">
                            <label for="exampleInputPassword1" className = "form-label">Mobile  number</label>
                            <input type="number" name='mobile_no' className = "form-control"/>
                          </div>
                           
                          <div className = "mb-3">
                            <label for="exampleInputEmail1" className = "form-label">Skills</label>
                            <textarea className='form-control' name="skills"></textarea>
                            <div id="emailHelp" className='form-text'>Php, Python, Javascript etc..</div>
                          </div>
                          <div>
                            <h6>Already have acoount <Link to="/teacher-login">Login</Link></h6>
                          </div>
    
                          <button type="submit" className = "btn btn-primary">Register</button>
    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default TeacherRegister;