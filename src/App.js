import React from "react";
import "./style.css";
class Formvalidate extends React.Component{
  constructor(){
      super();
  }
  render(){
      return(
          <form class="form-validate" style={{textAlign:"center",color:"violet",fontFamily:"cursive"}}>
              <div class = "form-group">
                  <label>USERNAME</label>
                  <input type="text" class="form-control" name="uname" required/> <br/>
                  </div>
                  <div class = "form-group">
                  <label>AGE</label>
                  <input type="number" class="form-control" name="age" required/> <br/>
                  </div>
                  <div class = "form-group">
                  <label>ADDRESS</label>
                  <input type="text" name="address" class="form-control" required/> <br/>
                  </div>
                  <div class = "form-group">
                  <label>PHONENUMBER</label>
                  <input type="number" name="pno" class="form-control" required/> <br/>
                  </div>
              <button type="submit" className="btn btn-primary">click me</button>
          </form>
      )
  }
}
export default Formvalidate;
