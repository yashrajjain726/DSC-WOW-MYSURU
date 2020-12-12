import React, { useEffect } from 'react';
import '../Assets/Css/dashboard.css';
import Chart from 'chart.js'

const Dashboard = () => {
    var refresh = true;
    var STATE = "KA";
    var state = "Karnataka";
    var district = "Mysuru";
    var banner = {};
    const covidapi = "https://api.covid19india.org/state_district_wise.json";
    async function displaydata() {
        fetch(covidapi)
            .then((response) => {
                return response.json();
            })
            .then((mydata) => {
                console.log(mydata.Karnataka.districtData.Mysuru["active"]);
                let elt = mydata.Karnataka.districtData.Mysuru;
                const data = {
                    datasets: [
                        {
                            data: [elt.recovered, elt.active, elt.deceased],
                            backgroundColor: ["#91DA43", "#FF8E01", "#DC3546"],
                        },
                    ],
                    labels: ["Recovered", "Active", "Deceased"],
                };
                const ctx = document.getElementById("chartPie").getContext("2d");
                var myDoughnutChart = new Chart(ctx, {
                    type: "doughnut",
                    data: data,
                });
                var pin1 = document.getElementById("active");
                var pin2 = document.getElementById("recovered");
                var pin3 = document.getElementById("confirmed");
                var pin4 = document.getElementById("deceased");
                var d1 = `  Active:<br>${elt.active}`;
                var d2 = `  Recovered:<br>${elt.recovered}`;
                var d3 = `  Confirmed:<br>${elt.confirmed}`;
                var d4 = `  Deceased:<br>${elt.deceased}`;
                var f1, f2, f3, f4;
                f1 = `<br><p>[+ N/A ]</p>`;
                f2 = `<br><p>[+ N/A ]</p> `;
                f3 = `<br><p>[+ N/A ]</p> `;
                f4 = `<br><p>[+ N/A ]</p> `;
                pin1.innerHTML = d1 + f1;
                pin2.innerHTML = d2 + f2;
                pin3.innerHTML = d3 + f3;
                pin4.innerHTML = d4 + f4;
            });
    }
    const api_url = "https://api.covid19india.org/states_daily.json";
    async function getJSON() {
        const xs = [];
        const ys = [];
        const rxs = [];
        const rys = [];
        const response = await fetch(api_url);
        const data = await response.json();
        data.states_daily.forEach((elt) => {
            if (elt.status == "Confirmed") {
                xs.push(elt.date);
                ys.push(elt[STATE.toLowerCase()]);
            } else if (elt.status == "Recovered") {
                rxs.push(elt.date);
                rys.push(elt[STATE.toLowerCase()]);
            }
        });

        return { xs, ys, rys };
    }

    //line Graph to display data of Karnataka state
    async function chartIt() {
        const data = await getJSON();
        const ctx = document.getElementById("chart").getContext("2d");
        var t = document.getElementById("subtitle-chart");
        t.innerHTML = `Date Wise New Cases : ${state}`;
        console.log(state);
        const myChart = new Chart(ctx, {
            type: "line",
            fill: false,
            data: {
                labels: data.xs,
                datasets: [
                    {
                        label: "Daily Confirmed COVID19 Cases : " + state,
                        data: data.ys,
                        pointRadius: 0,
                        lineTension: 0,
                        backgroundColor: "rgba(220,53,70, 0.2)",
                        borderColor: "rgba(220,53,70, 1)",
                        borderWidth: 1,
                        responsive: true,
                        mainAspectRatio: false,
                        display: false,
                    },
                    {
                        label: "Daily Recovered COVID19 Cases : " + state,
                        data: data.rys,
                        pointRadius: 0,
                        lineTension: 0,
                        backgroundColor: "rgba(145,218,67, 0.2)",
                        borderColor: "rgba(145,218,67, 1)",
                        borderWidth: 1,
                        responsive: true,
                        mainAspectRatio: false,
                        type: "line",
                    },
                ],
            },
            options: {
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false, //this will remove only the label
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                color: "rbga(0,0,0,0)",
                            },
                        },
                    ],
                },
            },
        });
    }

    //information about Update of data
    async function buildTable() {
        const response = await fetch(
            "https://api.covid19india.org/v4/data.json"
        );
        const response2 = await fetch("https://corona.lmao.ninja/v2/countries");
        var data2 = await response2.json();
        data2.forEach((elt) => {
            if (elt.country == "India") {
                data2 = elt;
                return;
            }
        });
        var data = await response.json();
        console.log(data[STATE].total);
        var pin5 = document.getElementById("title-element");
        console.log(data2);
        var pin6 = document.getElementById("label");
        pin6.innerHTML = `COVID19 Dashboard of Mysuru `;
        let updatedFormatted = new Date(data2.updated).toLocaleString();
        var d5 = `<p id="title-element">Last Updated On:${updatedFormatted}`;
        pin5.innerHTML = d5;
    }
    useEffect(() => {
        displaydata();
        getJSON();
        chartIt();
        buildTable();
    }, []);

    return (
        <div className='body'>
            <section id="covid-19-dashboard">
                <div id="card-container">
                    <div id="confirmed" class="covid-card">Confirmed:</div>
                    <div id="recovered" class="covid-card">Recovered:</div>
                    <div id="active" class="covid-card">Active:</div>
                    <div id="deceased" class="covid-card">Deceased:</div>
                </div>
                <p id="label">COVID19 Dashboard of India</p>
                <p id="title-element">Last Updated On:</p>
                <section id="diagrams">
                    <div id="PieChart">
                        <canvas id="chartPie" width="100" height="50"></canvas><br />
                        <p id="subtitle-piechart" style={{ width: "100%", fontSize: "14" + "px" }}>
                            Case Study : Mysuru
            </p>
                    </div>

                    <div id="Graph" style={{ display: "inline-block" }}>
                        <canvas id="chart" width="100" height="50"></canvas>
                        <p id="subtitle-chart" style={{ width: "100%", fontSize: "14" + "px" }}></p>
                    </div>
                </section>
                <br />
                <p id="stateInfo" style={{ width: "100%" }}></p>
            </section>
        </div>
    );
}

export default Dashboard;
