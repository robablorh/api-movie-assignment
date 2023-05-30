
import Router from "./Router"
import Middle from "./components/Middle"
import Navbars from "./components/Navbars"
import Side1 from "./components/Side1"
import Side2 from "./components/Side2"
import {Container, Col, Row} from "react-bootstrap"


function App() {
 

  return (
   <div>
      

         <Container >
           <Row>
          
              <Col md="2" className="s1">
                   
                   <Side1/>

              </Col>
              
              <Col md="8" className="mid">
                <Row><Navbars/> </Row>
                <Row className="Rout"><Router/></Row>

                
              
              </Col>
              
              
              <Col md="2" className="s2">
                 
                <Side2/>

              
              </Col>



           </Row>



         </Container>

   </div>
  )
}

export default App
