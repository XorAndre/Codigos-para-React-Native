import React from 'react';
//Componentes
import { View, Text } from "react-native";
import { Col, Container, Row } from './style';


const App = () => {
  return (
    <View>
        <Container>
          <Row Exibi={{ ValueExibi: "row" }}>
              <Col Value="6">
                <Text>Coluna 1</Text>
              </Col>
              <Col Value="6">
                <Text>Coluna 2</Text>
              </Col>
          </Row>
        </Container>
    </View>
  );
}

export default App;
