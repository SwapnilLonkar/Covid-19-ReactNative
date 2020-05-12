import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import {StyleSheet} from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
  fetch('https://api.covid19api.com/summary')
      .then((response) =>response.json())
      .then((json) =>{
        setData(json.Global);
        setDate(json.Date);
        console.log(json.Global.NewConfirmed);
        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
      
  }, []);

  return (
    

    
     <View style={{marginTop: 30}}>
        <View style={USReportStyles.indonesiaReportContainer}>
          <Text style={USReportStyles.titleIndonesiaReport}>
            United States Report
          </Text>
          <Text style={USReportStyles.dateIndonesiaReport}>
            Date{' '}
            {date}
          </Text>
          <View style={USReportStyles.statusContainer}>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Total
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalConfirmed}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
                Deaths
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalDeaths}
              </Text>
            </View>
            <View style={USReportStyles.itemStatusContainer}>
              <Text style={USReportStyles.numItemStatus}>
            Recoverded
              </Text>
              <Text style={USReportStyles.textItemStatus}>
                {data.TotalRecovered}
              </Text>
            </View>
          </View>
        </View>
      </View>
    
  );
}

const USReportStyles = StyleSheet.create({
  indonesiaReportContainer: {
    flexWrap: 'wrap',
    padding: 14,
    backgroundColor: '#AC5555',
    borderRadius: 10,
  },
  titleIndonesiaReport: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateIndonesiaReport: {
    fontSize: 14,
    color: 'white',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  itemStatusContainer: {
    height: 50,
    width: 100,
    backgroundColor: '#e18381',
    padding: 4,
  },
  numItemStatus: {
    textAlign: 'center',
    fontSize: 20,
  },
  textItemStatus: {
    textAlign: 'center',
  },
});
