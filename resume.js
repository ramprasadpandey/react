import React,{Component} from "react";
import { Table } from 'react-bootstrap';


export default class Resume extends Component{
    render(){
    return(
    <div className="text-left jumbotron">


    <h3>RAMPRASAD PANDEY</h3>
    <p>R/225 Samta Nagar C.D. barfiwala Road, Andheri(w) Mumbai 400058</p>
    <p>rampp361@gmail.com</p>
    <p>+91 7738957603</p>
<br/>
        <h4>OBJECTIVE:</h4>
        <p>To work in an environment of growth and excellence.</p>
<br/>
        <h4>ACADEMIC QUALIFICATION:</h4>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Examination</th>
      <th>Year Of Passing</th>
      <th>Board/University</th>
      <th>Percantage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bsc(physics)</td>
      <td>2019</td>
      <td>Mumbai University</td>
      <td>7.95</td>
    </tr>
    <tr>
      <td>H.S.C</td>
      <td>2016</td>
      <td>Maharastra State Board</td>
      <td>62.31%</td>
    </tr>
    <tr>
      <td>S.S.C</td>
      <td>2014</td>
      <td>Maharastra State Board</td>
      <td>74.60%</td>
    </tr>
  </tbody>
</Table>

<br/>
    <h4>TECHNICAL SKILLS:</h4>
    <p><b>Language</b> Javascript, Python, Mysql,</p>
    <p><b>web design</b>html, css, bootstrap</p>
<br/>
    <h4>EXTRA CURRICULAR ACTIVITIES</h4>
    <p>Volunteered in Tesla-Physics in 2017 in promotion team.</p>
    <p>Core Community member in Fizzics Tech-Fest in 2018.</p>

</div>
        );
    }
};