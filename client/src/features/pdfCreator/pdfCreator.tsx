import React from 'react';

import { Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import { IDetailObject } from '../../types/detailobject';



interface Props {
	detailObject: IDetailObject;
}

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#FFFFFF',
        padding: 20,
	},

    mainSection: {
        marginTop: 40,
        margin: 10,
        padding: 10,
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        alignitems: "stretch",
        justifyContent: "space-around"
    },

    headerContainer:{
        flexDirection:"row"
    },

	headerLeft: {
        width: '50%',
        textAlign: 'left',
        fontSize: 10,
      },
      headerRight: {
        width: '50%',
        textAlign: 'right',
        fontSize: 10,
      },
      footerLeft: {
        width: '50%',
        position: 'absolute',
        textAlign: 'left',
        bottom: 20,
        left: 20,
        fontSize: 10,
      },
      footerRight: {
        width: '50%',
        position: 'absolute',
        textAlign: 'right',
        bottom: 20,
        right: 20,
        fontSize: 10,
      },

      textContainer:{
        margin:10,
        width: "20%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },

      imageContainer:{
        margin:10,
        width: "60%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },

    image: {
        width: "100%",
      },

      listItem: {
        fontSize: 12,
        marginBottom: 5,
        marginRight: 5,
      },
});

const getFormattedDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };

export const PdfCreator = (props: Props) =>  (
    
        <Document title={props.detailObject.name} author='openDetail'>
            <Page size='A3' orientation='landscape' style={styles.page}>
                <View style={styles.headerContainer}>
                {/* Left Header */} 
                    <View style={styles.headerLeft}>
                        <Text>{props.detailObject.name}</Text>
                    </View>

                    {/* Right Header */}
                    <View style={styles.headerRight}>
                        <Text>OpenDetails</Text>
                    </View>
                </View>  

                {/* Left Footer */}
                <View style={styles.footerLeft}>
                    <Text>{props.detailObject.topologyCategory}</Text>
                </View>

                {/* Right Footer */}
                <View style={styles.footerRight}>
                    <Text>{getFormattedDate()}</Text>
                </View>




                {/* Body */}
                <View style = {{marginTop: 30, marginLeft: 60}}>
                    <Text style={{fontSize : 30, fontWeight: "extrabold", textAlign: "left", margin: 10}}>{props.detailObject.name}</Text>
                    <Text style={{fontSize : 11, fontWeight: "normal", textAlign: "left", margin: 10}}>{props.detailObject.description}</Text>
                </View>

                <View style={styles.mainSection}>
                    <View style = {styles.imageContainer}>
                        <Image src = {props.detailObject.keyimage} style = {styles.image}/>
                        {/* <Image src = localFolder.../>*/}
                    </View>
                    <View style = {styles.textContainer}>
                        <View   >
                            <Text style={styles.listItem}>Acoustic performance: {props.detailObject.metadata.acousticPerformance}</Text>
                            <Text style={styles.listItem}>Biogenic rating: {props.detailObject.metadata.biogenicRating}</Text>
                            <Text style={styles.listItem}>Cost: {props.detailObject.metadata.cost}</Text>
                            <Text style={styles.listItem}>Fire rating: {props.detailObject.metadata.fireRating}</Text>
                            <Text style={styles.listItem}>Global warming potential: {props.detailObject.metadata.globalWarmingPotential}</Text>
                            <Text style={styles.listItem}>Location: {props.detailObject.metadata.location}</Text>
                            <Text style={styles.listItem}>Popularity: {props.detailObject.metadata.populartity}</Text>
                            <Text style={styles.listItem}>R value: {props.detailObject.metadata.rValue}</Text>
                            <Text style={styles.listItem}>VOC: {props.detailObject.metadata.voc}</Text>
                        </View>
                    </View>
                </View>

                
            </Page>
        </Document>
    
);

{
	/* 
        <PDFDownloadLink document = {<PdfCreator detailObject = {object}/>}>
            {({loading}) => (loading? <button>Loading document...</button> : <button>{object.id}</button>)}
        </PDFDownloadLink>
    */
}

        {
            /*
            <PDFViewer style={{ width: '100%', height: '100vh' }}>
                <PdfCreator detailObject = {object}/>
            </PDFViewer>
            */
        }

