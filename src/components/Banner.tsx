import { Button, Card, Col, Nav, NavLink, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { formatCurrency } from "../utilities/formatCurrency";

function randomIntFromInterval(min:number,max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
export function Banner(){
    const rndInt = randomIntFromInterval(1, 6);
    const item = storeItems.find((i) => i.id === rndInt);

    const navigate = useNavigate();

    const navigateStore = () => {
        navigate('/store');
      };
    return(
        <>
        <Card className="mt-5">
        
        
        <Row>
        
            <Col className="p-2">
                <Card.Img
                className="m-2"
                variant="left"
                src={item?.imgUrl}
                height="300px"
                width="300px"
                style={{ objectFit: "cover" }}
                ></Card.Img>
            </Col>
            <Col className="mr-2 mt-2">
            <span className="d-flex "><h1>{item?.name}<h3 className="text-muted">Предложение</h3></h1></span>
                    <p>Получи это сейчас всего за {formatCurrency(item?.price)}</p>
                    <Button variant="primary" onClick={navigateStore}>Купи сейчас!</Button><br/>
                    <br/>
                    <p className="text-muted">*Это учебный проек и все предложения не реальны</p>
            </Col>
        </Row>
        </Card>
        </>
    )
}