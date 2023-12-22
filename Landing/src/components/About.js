import { height } from '@mui/system';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCopyright } from 'react-icons/fa';

function About() {
  const myStyle = {
    backgroundColor:"#002347",
    marginTop:"80px",
    marginBottom:"0px",
    height:"180px",
    color:"#90e0ef",
    display:"Flex",
    flexDirection:"Column",
    alignItems:"Center",
    padding:"auto"
    
  };
  return (

    <div style={myStyle}>
    <h3 style={{lineHeight:"45px"}}>Services</h3>
    <h4 style={{lineHeight:"45px"}}>Individual Portfolio Management|High Security for Data|Keep Up with The Trends in the Stock Market</h4>
    <h5 style={{lineHeight:"45px"}}><FaCopyright/>StockMania</h5>
    </div>
  );
}

export default About;