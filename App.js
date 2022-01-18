import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Col, Row, Grid } from 'react-native-easy-grid';


export default function App() {
  const [text, setText] = useState('month')
   return (
    <View>
      <View style={{ position: 'absolute', top: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 3 }}>
      <View style={{  flexDirection: 'row'}}>
     <AntDesign name="rightcircleo" size={24} color="black" />
     <AntDesign name="leftcircleo" size={24} color="black" />
     <View style={{ borderWidth: 2, padding: 1, marginLeft: 1, backgroundColor: 'gray'}}>
     <Text style={{color: 'white'}}>
       today
     </Text>
     </View>
     </View>
     <View>
       <Text>January 22, 2021</Text>
      </View>
     <View style={{  flexDirection: 'row'}}>
       <TouchableOpacity onPress={() => setText('month')} style={{ borderWidth: 2, padding: 2, backgroundColor: 'gray'}}>
     <Text style={{ color: 'white'}}>
       month
     </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setText('week')} style={{ borderWidth: 2, padding: 2, backgroundColor: 'gray', borderLeft: 'none', borderRightWidth: 0, borderLeftWidth: 0 }}>
     <Text style={{ color: 'white'}}>
       week
     </Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => setText('day')}  style={{ borderWidth: 2, padding: 2, backgroundColor: 'gray'}}>
     <Text style={{ color: 'white'}}>
       day
     </Text>
     </TouchableOpacity>
     </View>
     </View>
     <View style={{ position: 'absolute', top: 100, width: '90%', marginLeft: 20  }}>
       {
         text === 'month' &&
     <Grid>
        <Row size={25}>
          <Col style={styles.columCell}>
            <Text>Sun</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Mon</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Tue</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Wed</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Thu</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Fri</Text>
          </Col>
          <Col style={styles.columCell}>
            <Text>Sat</Text>
          </Col>
        </Row>
          <Row size={25} >
        <Col style={styles.cell}>
            <Text>1</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>2</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>3</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>4</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>5</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>6</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>7</Text>
          </Col>
        </Row>
        <Row size={25} >
        <Col style={styles.cell}>
            <Text>8</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>9</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>10</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>11</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>12</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>13</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>14</Text>
          </Col>
        </Row>
        <Row size={25} >
        <Col style={styles.cell}>
            <Text>15</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>16</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>17</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>18</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>19</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>20</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>21</Text>
          </Col>
        </Row>
        <Row size={25} >
        <Col style={styles.cell}>
            <Text>22</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>23</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>24</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>25</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>26</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>27</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>28</Text>
          </Col>
        </Row>
        <Row size={25} >
        <Col style={styles.cell}>
            <Text>29</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>30</Text>
          </Col>
          <Col style={styles.cell}>
            <Text>31</Text>
          </Col>
          <Col style={styles.cell}>
            <Text></Text>
          </Col>
          <Col style={styles.cell}>
            <Text></Text>
          </Col>
          <Col style={styles.cell}>
            <Text></Text>
          </Col>
          <Col style={styles.cell}>
            <Text></Text>
          </Col>
        </Row>
      </Grid>
}

{text === 'week' &&
<Grid>
  <Row>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Sun 1/16</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Mon 1/17</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Tue 1/18</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Wed 1/19</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Thu 1/20</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Fri 1/21</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text>Sat 1/22</Text>
    </Col>
  </Row>
  <Row>
    <Col style={styles.columCell}>
    <Text>all-day</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
  </Row>
  <Row>
    <Col style={styles.columCell}>
    <Text>6am</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
  </Row>
  <Row>
    <Col style={styles.columCell}>
    <Text>7am</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
  </Row>
  <Row>
    <Col style={styles.columCell}>
    <Text>8am</Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
    <Col style={styles.columCell}>
    <Text></Text>
    </Col>
  </Row>
</Grid>
              
}
{
  text === 'day' &&
 <Grid>
   <Col size={20}>
     <Row style={styles.columCell}><Text></Text></Row>
     <Row style={styles.columCell}><Text>6am</Text></Row>
     <Row style={styles.columCell}><Text>7am</Text></Row>
     <Row style={styles.columCell}><Text>8am</Text></Row>
     <Row style={styles.columCell}><Text>9am</Text></Row>
     <Row style={styles.columCell}><Text>10am</Text></Row>
     <Row style={styles.columCell}><Text>11am</Text></Row>
     <Row style={styles.columCell}><Text>12pm</Text></Row>
     <Row style={styles.columCell}><Text>1pm</Text></Row>
     <Row style={styles.columCell}><Text>2pm</Text></Row>
   </Col>
   <Col size={80}>
   <Row style={styles.columCell}><TextInput>Tuesday</TextInput></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   <Row style={styles.columCell}><TextInput placeholder='enter sth...'/></Row>
   </Col>
 </Grid>
}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columCell: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
