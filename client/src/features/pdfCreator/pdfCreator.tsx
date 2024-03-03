import React from 'react';

import { Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import { IDetailObject } from '../../types/detailobject';

interface Props {
	detailObject: IDetailObject;
}

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#FFFFFF'
	},

    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },

	header: {
		textAlign: 'right',
		marginBottom: 10
	},

	footer: {
		position: 'absolute',
		bottom: 10,
		left: 0,
		right: 0,
		textAlign: 'center',
		fontSize: 10
	},

    image: {
        width: 100,
        height: 100,
        marginRight: 10,
      },

      listItem: {
        marginBottom: 5,
        marginRight: 5,
      },
});

const pdfCreator = (props: Props) =>  (
    
        <Document title={props.detailObject.name} author='openDetail'>
            <Page size='A4' orientation='landscape' style={styles.page}>
                {/* Header */}
                <View style={styles.section}>
                    <Text style={styles.header}>Header Title</Text>
                </View>
                {/* Body */}
                <View>
                    <View>
                        <Image src = {props.detailObject.keyimage}/>
                    </View>
                    <View>
                            <Text>{props.detailObject.metadata.acousticPerformance}</Text>
                            <Text>{props.detailObject.metadata.biogenicRating}</Text>
                            <Text>{props.detailObject.metadata.cost}</Text>
                            <Text>{props.detailObject.metadata.fireRating}</Text>
                            <Text>{props.detailObject.metadata.globalWarmingPotential}</Text>
                            <Text>{props.detailObject.metadata.location}</Text>
                            <Text>{props.detailObject.metadata.globalWarmingPotential}</Text>
                            <Text>{props.detailObject.metadata.populartity}</Text>
                            <Text>{props.detailObject.metadata.rValue}</Text>
                            <Text>{props.detailObject.metadata.voc}</Text>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text>Page 1 / Example PDF</Text>
                </View>
            </Page>
        </Document>
    
);

{
	/* <PDFDownloadLink document = {<PDFFile/>} filename="Detail">
          {({loading}) => (loading? <button>Loading document...</button> : <button>Download PDF</button>)}
          
        </PDFDownloadLink> */
}

export default pdfCreator
