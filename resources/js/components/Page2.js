import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { GraphsData } from './Service'

function PageTwo() {


    useEffect(() => {
        GraphsData().then(async (result) => {


            anychart.onDocumentReady(function () {
                // create the data 
                var data = result.Product_Used_Industry

                // create the chart and set the data
                let chart = anychart.heatMap(data);

                // set the chart title

                // create and configure the color scale
                var customColorScale = anychart.scales.ordinalColor();
                customColorScale.ranges([
                    { equal: 0.000000, name: 'No Contribution', color: '#D6DBDF' },
                    { from: 0.0000001, to: 0.0100, name: 'Very Low Contribution', color: '#E69645' },
                    { from: 0.0101, to: 0.02, name: 'Low Contribution', color: '#6a0dad' },
                    { from: 0.020000, to: 0.030000, name: 'Moderate Contribution', color: '#FC0091' },
                    { from: 0.030001, to: 0.040000, name: 'Good Contribution', color: '#FFFF00' },
                    { from: 0.040001, to: 0.050000, name: 'High Contribution ', color: '#4FEFFF' },
                    { greater: 0.050001, name: 'Highest Contribution', color: '#74FF4F' },


                ]);

                // set the colors for each range, from smaller to bigger
                customColorScale.colors(["#D6DBDF", "#E69645", "#6a0dad", "#FC0091", "#FFFF00", "#4FEFFF", "#74FF4F"]);

                // set the color scale as the color scale of the chart
                chart.colorScale(customColorScale);

                // enable the legend
                chart.legend(true);
                chart.title("Heat Map");
                var labels = chart.xAxis().labels();
                labels.rotation(-90);
                labels.fontSize(8);
                // set the container id
                chart.container("containerHeatMap");

                // initiate drawing the chart
                chart.draw();

            });
            document.getElementById("body-loaders").style.display = "none"

        })
    }, [])


    return (

        <div>
            <div className='body-loader' id="body-loaders">
                <img width="100" src="/public/assets/Spinner.gif" />
            </div>
            <div style={{ marginTop: 50, marginBottom: 200 }}>
                <p style={{
                    position: "absolute",
                    paddingTop: 120,
                    zIndex: 10000,
                    justifyContent: "center",
                    top: 750,
                    fontWeight: 800,
                    fontSize: 18,
                    marginLeft: 10,
                    fontFamily: "cursive",
                    transform: "rotate(270deg)",



                }}>Industries</p>
                <div style={{
                    width: "100%",
                    height: "1300px",
                    margin: "0",
                    padding: "0"
                }} id="containerHeatMap"></div>
                <p style={{ fontSize: 18, fontWeight: 800, textAlign: "center", fontFamily: "cursive" }}>SAP Products</p>
            </div>
        </div>



    );
}

export default PageTwo;
