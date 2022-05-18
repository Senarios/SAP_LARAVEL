import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { scriptOne, scriptTwo, scriptThree, FinalOutPut, scriptFour, verbs, FinalOutro, SaveScripts, GraphsData } from './Service'
import { Document, Packer, Paragraph, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import $ from "jquery"
import Diff from 'react-diff2';
import Progressbar from './ProgressBar';
import { toInteger } from 'lodash';
import gif from '../assets/Spinner.gif'
// import gif from '../../../public/assets/Spinner.gif'



function App() {
    const [GrapshData, setGrapshData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [progressValue, setprogressValue] = useState("");
    const [totalSum, settotalSum] = useState("");
    const [barChartDataName, setBarChartDataName] = useState("");
    const [barChartDataValue, setBarChartDataValue] = useState("");
    const [filterPName, setFilterPName] = useState("");
    const [searchBox, setSearchBox] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        GraphsData().then(async (result) => {
            localStorage.setItem("DemoModels", result.model_names.Demo_Model)
            localStorage.setItem("IntroModels", result.model_names.Intro_Model)
            localStorage.setItem("OutroModels", result.model_names.Outro_Model)

            let graphDataRender = result.Product_Count.slice(0, 10).map((e) => { return e.name });
            let graphDataRender2 = result.Product_Count.slice(0, 10).map((e) => { return e.value });
            setFilterPName(result.Product_Count)
            setBarChartDataName(graphDataRender)
            setBarChartDataValue(graphDataRender2)

            setGrapshData(result.Industry_Count)
            let map = result.Industry_Count.map((e) => { return e.value });
            let sum = 0;
            for (const value of Object.values(map)) {
                sum += toInteger(value);
            }
            settotalSum(sum)
            setIsLoading(false)
            document.getElementById("body-loader").style.display = "none"
        })
    }, [])


    useEffect(() => {

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: barChartDataName,
                datasets: [{
                    label: 'Respective Count',
                    data: barChartDataValue,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                }
            }
        });
    })


    const [StateOne, setStateOne] = useState(false);
    const [StateTwo, setStateTwo] = useState(false);
    const [StateThree, setStateThree] = useState(false);
    const [StateFour, setStateFour] = useState(false);
    const [StateFive, setStateFive] = useState(false);
    const [StateSix, setStateSix] = useState(false);

    const [pName, setPname] = useState("");
    const [useCase, setUseCase] = useState("");
    const [Indursty, setIndursty] = useState("");
    const [Protagonist, setProtagonist] = useState("");
    const [BO1, setBO1] = useState("");
    const [Demo1, setDemo1] = useState("");
    const [Demo2, setDemo2] = useState("");
    const [Demo3, setDemo3] = useState("");
    const [Demo4, setDemo4] = useState("");
    const [resA1, setResA1] = useState("");
    const [resA2, setResA2] = useState("");
    const [resB1, setResB1] = useState("");
    const [resB2, setResB2] = useState("");
    const [resC1, setResC1] = useState("");
    const [resC1_2, setResC1_2] = useState("");
    const [resC2, setResC2] = useState("");
    const [resC2_1, setResC2_1] = useState("");
    const [loading, setloading] = useState(false);
    const [disabledInputs, setdisabledInputs] = useState(false);
    const [disabledInputsOnNext, setdisabledInputsOnNext] = useState(false);
    const [disabledInputsd2, setdisabledInputsd2] = useState(false);
    const [disabledInputsd3, setdisabledInputsd3] = useState(false);
    const [disabledInputsd4, setdisabledInputsd4] = useState(false);
    const [isChecked, setisChecked] = useState(false);
    const [isChecked2, setisChecked2] = useState(false);
    const [isChecked3, setisChecked3] = useState(false);
    const [isChecked4, setisChecked4] = useState(false);
    const [isChecked5, setisChecked5] = useState(false);
    const [isChecked6, setisChecked6] = useState(false);
    const [isChecked11, setisChecked11] = useState(false);
    const [isChecked12, setisChecked12] = useState(false);
    const [isChecked7, setisChecked7] = useState(false);
    const [isChecked8, setisChecked8] = useState(false);
    const [isChecked9, setisChecked9] = useState(false);
    const [isChecked10, setisChecked10] = useState(false);
    const [extra, setextra] = useState("");
    const [extrasss, setextrasss] = useState("");
    const [extra2, setextra2] = useState("");
    const [extrasss2, setextrasss2] = useState("");
    const [extra3, setextra3] = useState("");
    const [extrasss3, setextrasss3] = useState("");
    const [extra4, setextra4] = useState("");
    const [extrasss4, setextrasss4] = useState("");
    const [extrasss5, setextrasss5] = useState("");
    const [extrasss6, setextrasss6] = useState("");
    const [newIntro, setnewIntro] = useState("");
    const [newOutro, setnewOutro] = useState("");
    const [lastLoading, setlastLoading] = useState(false);
    const [outroLoading, setoutroLoading] = useState(false);
    const [outroState1, setoutroState1] = useState("");
    const [outroState2, setoutroState2] = useState("");

    const OnSelectSearchRes = (e) => {
        setPname(e)
        setSearchBox(false)
        console.log("aleemsajjad-=-=-=", e);
    }

    const out1 = (e) => {
        setoutroState1(e.target.value)
    }
    const out2 = (e) => {
        setoutroState2(e.target.value)
    }
    const [SBO2, setSBO2] = useState("");
    const [SBO3, setSBO3] = useState("");
    const [SBO4, setSBO4] = useState("");
    const [Fintro1, setFintro1] = useState("");
    const [Foutro1, setFoutro1] = useState("");
    const [Fintro2, setFintro2] = useState("");
    const [Foutro2, setFoutro2] = useState("");
    const [protagnist2, setprotagnist2] = useState("");
    const [protagnist3, setprotagnist3] = useState("");
    const [protagnist4, setprotagnist4] = useState("");
    const [Floading, setFloading] = useState(false);

    const int1 = (e) => {
        setFintro1(e.target.value)
    }
    const int2 = (e) => {
        setFintro2(e.target.value)
    }

    const [bo1RES, setbo1RES] = useState("");
    const [bo1RES_1, setbo1RES_1] = useState("");
    const [bo1RES_2, setbo1RES_2] = useState("");
    const [bo1RES_3, setbo1RES_3] = useState("");
    useEffect(() => {
        scrollToTop()
    }, [])
    useEffect(() => {

        autosize();
        function autosize() {
            var text = $('.autosize');

            text.each(function () {
                $(this).attr('rows', 1);
                resize($(this));
            });

            text.on('input', function () {
                resize($(this));
            });

            function resize($text) {
                $text.css('height', 'auto');
                $text.css('height', $text[0].scrollHeight + 'px');
            }
        }
    });


    const OnChnageOutroF = (e) => {
        setnewOutro(e.target.value)
    }
    const OnchangeDEmoF3 = (e) => {
        setextra3(e.target.value)
    }
    const OnchangeDemoRes4 = (e) => {
        setextra4(e.target.value)
    }
    const onChangeBoF3 = (e) => {
        setSBO3(e.target.value)
    }
    const onChangeBoF55 = (e) => {
        setSBO4(e.target.value)
    }
    const OnChnageBof2 = (e) => {
        setSBO2(e.target.value)
    }
    const yess = (e) => {
        setextrasss(e.target.value)
        setStateOne(true)
    }
    const yess2 = (e) => {
        setextrasss2(e.target.value)
        setStateTwo(true)
    }
    const yess3 = (e) => {
        setextrasss3(e.target.value)
        setStateThree(true)
    }
    const yess4 = (e) => {
        setextrasss4(e.target.value)
        setStateFour(true)
    }
    const yess5 = (e) => {
        setextrasss5(e.target.value)
        setStateFive(true)
    }
    const yess6 = (e) => {
        setextrasss6(e.target.value)
        setStateSix(true)
    }
    const ONchangeboo1 = (e) => {
        setBO1(e.target.value)
    }
    const onChanegINTRO = (e) => {
        setnewIntro(e.target.value)
    }
    const onChangePname = (e) => {
        setSearchBox(true)
        setPname(e.target.value)
    }
    const onChangeUseCase = (e) => {
        setUseCase(e.target.value)
    }
    const onChangeIndursty = (e) => {
        let abc = e.target.value
        setIndursty(abc)
        let aa = GrapshData.find((e) => e.name == abc)
        console.log("dsdsds", totalSum);

        let formula = aa.value;

        setprogressValue(formula)
    }

    const onChangeProtagonist = (e) => {
        setProtagonist(e.target.value)
    }
    const onChangeBO1 = (e) => {
        setBO1(e.target.value)
    }
    const onChangeDemo1 = (e) => {
        setDemo1(e.target.value)
    }
    const onChangeDemo2 = (e) => {
        setDemo2(e.target.value)
    }
    const onChangeDemo3 = (e) => {
        setDemo3(e.target.value)
    }
    const onChangeDemo4 = (e) => {
        setDemo4(e.target.value)
    }
    const OnchangeCheck = (e) => {
        document.getElementById("next1None").style.display = "block"
        setextra(document.getElementById("A1").value);
        setisChecked(true)
        setisChecked2(false)
    }
    const OnchangeCheck2 = (e) => {
        document.getElementById("next1None").style.display = "block"
        setextra(document.getElementById("A2").value);
        setisChecked(false)
        setisChecked2(true)
    }
    const OnchangeCheck3 = (e) => {
        document.getElementById("next2None").style.display = "block"
        setextra2(document.getElementById("B1").value);
        setisChecked3(true)
        setisChecked4(false)
    }
    const OnchangeCheck4 = (e) => {
        document.getElementById("next2None").style.display = "block"
        setextra2(document.getElementById("B2").value);
        setisChecked3(false)
        setisChecked4(true)
    }
    const OnchangeCheck5 = (e) => {
        document.getElementById("next3None").style.display = "block"
        setextra3(document.getElementById("C1").value);
        setisChecked5(true)
        setisChecked6(false)
    }
    const OnchangeCheck6 = (e) => {
        document.getElementById("next3None").style.display = "block"
        setextra3(document.getElementById("C2").value);
        setisChecked5(false)
        setisChecked6(true)
    }
    const OnchangeCheck11 = (e) => {
        document.getElementById("next3None111").style.display = "block"
        setextra4(document.getElementById("D4_1").value);
        setisChecked11(true)
        setisChecked12(false)
    }
    const OnchangeCheck12 = (e) => {
        document.getElementById("next3None111").style.display = "block"
        setextra4(document.getElementById("D4_2").value);
        setisChecked11(false)
        setisChecked12(true)
    }
    const OnchangeCheck7 = (e) => {
        document.getElementById("outNon1").style.display = "block"
        setnewIntro(document.getElementById("AAA").value)
        setisChecked7(true)
        setisChecked8(false)
    }
    const OnchangeCheck8 = (e) => {
        document.getElementById("outNon1").style.display = "block"
        setnewIntro(document.getElementById("BBB").value)
        setisChecked7(false)
        setisChecked8(true)
    }
    const OnchangeCheck9 = (e) => {
        setnewOutro(document.getElementById("CCC").value)
        setisChecked9(true)
        setisChecked10(false)
    }
    const OnchangeCheck10 = (e) => {
        setnewOutro(document.getElementById("DDD").value)
        setisChecked9(false)
        setisChecked10(true)
    }
    const messagesEndRef = useRef(null)
    const onBackClick1 = () => {
        setdisabledInputsOnNext(false)
        setdisabledInputs(false)
        setisChecked(false)
        setisChecked2(false)
        document.getElementById("state2").style.display = "none"
        document.getElementById("section1dis").style.display = "block"
    }
    const onBackClick2 = () => {
        setdisabledInputsd2(false)
        setisChecked3(false)
        setisChecked4(false)
        document.getElementById("regenerate2").style.display = "none"
        document.getElementById("section2dis").style.display = "block"
    }
    const onBackClick3 = () => {
        setdisabledInputsd4(false)
        setisChecked5(false)
        setisChecked6(false)
        document.getElementById("demo4Div").style.display = "none"
        document.getElementById("finishClick").style.display = "block"
    }
    const scrollToBottom = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    const scrollToTop = () => {
        window.scroll({
            top: document.body.offsetTop,
            left: 0,
            behavior: 'smooth',
        });
    }
    const generate1Press = () => {
        var arr = BO1.match(/\S+/g);
        if (arr.length > 3) {
            alert("Max. Number of allowable words in BO are 3.")
        } else {
            document.getElementById("gen0disN").style.display = "none"
            document.getElementById("gen1disN").style.display = "block"
            setloading(true)
            scriptOne(pName, useCase, Indursty, Protagonist, BO1, Demo1).then(async (result) => {
                console.log(result);
                const aa = {
                    "error": {
                        "message": "That model is still being loaded. Please try again shortly.",
                        "type": "server_error",
                        "param": null,
                        "code": null
                    }
                }
                if (result == aa) {
                    alert(aa.error.message)
                }
                let data = result.choices
                if (data.length == 0) {
                    setloading(false)
                }
                setResA1(data[0]['text'])
                if (data.length == 2) {
                    setResA2(data[1]['text'])
                }
                setloading(false)
                document.getElementById("state1").style.display = "block"
                scrollToBottom()
            }).catch(err => {
                alert(err)
                setloading(false)
            });
            setdisabledInputs(true)
        }
    }

    const onRegenerate1 = () => {
        var arr = SBO2.match(/\S+/g);
        if (arr.length > 3) {
            alert("Max. Number of allowable words in BO are 3.")
        } else {
            document.getElementById("123disN123").style.display = "none"
            document.getElementById("disN123").style.display = "block"
            setloading(true)
            scriptTwo(pName, useCase, Indursty, protagnist2, SBO2, Demo2).then(async (result) => {
                console.log(result);
                const aa = {
                    "error": {
                        "message": "That model is still being loaded. Please try again shortly.",
                        "type": "server_error",
                        "param": null,
                        "code": null
                    }
                }
                if (result == aa) {
                    alert(aa.error.message)
                }
                let data = result.choices
                if (data.length == 0) {
                    setloading(false)
                }
                setResB1(data[0]['text'])
                if (data.length == 2) {
                    setResB2(data[1]['text'])
                }
                setloading(false)
                document.getElementById("regenerate").style.display = "block"
                scrollToBottom()

            }).catch(err => {
                alert(err)
                setloading(false)
            });
        }

    }
    const regenerate3 = () => {
        var arr = SBO3.match(/\S+/g);
        if (arr.length > 3) {
            alert("Max. Number of allowable words in BO are 3.")
        } else {
            document.getElementById("dis76546").style.display = "none"
            document.getElementById("dis0988").style.display = "block"
            setloading(true)
            scriptThree(pName, useCase, Indursty, protagnist3, SBO3, Demo3).then(async (result) => {
                console.log(result);
                const aa = {
                    "error": {
                        "message": "That model is still being loaded. Please try again shortly.",
                        "type": "server_error",
                        "param": null,
                        "code": null
                    }
                }
                if (result == aa) {
                    alert(aa.error.message)
                }
                let data = result.choices
                if (data.length == 0) {
                    setloading(false)
                }
                setResC1(data[0]['text'])
                if (data.length == 2) {
                    setResC2(data[1]['text'])
                }
                setloading(false)
                document.getElementById("demo3dis").style.display = "block"
                scrollToBottom()
            }).catch(err => {
                alert(err)
                setloading(false)
            });
        }
    }
    const regenerate4 = () => {
        var arr = SBO4.match(/\S+/g);
        if (arr.length > 3) {
            alert("Max. Number of allowable words in BO are 3.")
        } else {
            document.getElementById("dis76546_1").style.display = "none"
            document.getElementById("dis0988_11").style.display = "block"
            setloading(true)
            scriptFour(pName, useCase, Indursty, protagnist4, SBO4, Demo4).then(async (result) => {
                const aa = {
                    "error": {
                        "message": "That model is still being loaded. Please try again shortly.",
                        "type": "server_error",
                        "param": null,
                        "code": null
                    }
                }
                if (result == aa) {
                    alert(aa.error.message)
                }
                let data = result.choices
                if (data.length == 0) {
                    setloading(false)
                }
                setResC1_2(data[0]['text'])
                if (data.length == 2) {
                    setResC2_1(data[1]['text'])
                }
                setloading(false)
                document.getElementById("DEMO4OP").style.display = "block"
                scrollToBottom()
            }).catch(err => {
                alert(err)
                setloading(false)
            });
        }
    }
    const onNextClick = () => {
        setdisabledInputsOnNext(true)
        document.getElementById("section1dis").style.display = "none"
        document.getElementById("state1").style.display = "none"
        document.getElementById("state2").style.display = "block"
    }
    const OnNext2Clicked = () => {
        setdisabledInputsd2(true)
        document.getElementById("section2dis").style.display = "none"
        document.getElementById("regenerate").style.display = "none"
        document.getElementById("regenerate2").style.display = "block"

    }
    const OnNext3Clicked = () => {
        setdisabledInputsd4(true)
        document.getElementById("demo4Div").style.display = "block"
        document.getElementById("finishClick").style.display = "none"
        document.getElementById("demo3dis").style.display = "none"
        document.getElementById("next3None").style.display = "none"
        scrollToBottom()


        // setdisabledInputsd2(true)
        // document.getElementById("section2dis").style.display = "none"
        // document.getElementById("regenerate").style.display = "none"

    }
    const onChangeDO1O = (e) => {
        setResA1(e.target.value)
        setextra(e.target.value)
    }
    const onChangeDO1O1 = (e) => {
        setResA2(e.target.value)
        setextra(e.target.value)
    }
    const onChangeDO2O = (e) => {
        setResB1(e.target.value)
        setextra2(e.target.value)
    }
    const onChangeDO2O1 = (e) => {
        setResB2(e.target.value)
        setextra2(e.target.value)
    }
    const onChangeDO3O = (e) => {
        setResC1(e.target.value)
        setextra3(e.target.value)
    }
    const onChangeDO4O = (e) => {
        setResC1_2(e.target.value)
        setextra4(e.target.value)
    }
    const onChangeDO3O1 = (e) => {
        setResC2(e.target.value)
        setextra3(e.target.value)
    }
    const onChangeDO4O1 = (e) => {
        setResC2_1(e.target.value)
        setextra4(e.target.value)
    }

    const onChangeSBO2 = (e) => {
        setSBO2(e.target.value)
    }
    const onChangeSBO3 = (e) => {
        setSBO3(e.target.value)
    }
    const onChangeSBO4 = (e) => {
        setSBO4(e.target.value)
    }
    const onChangeProtagnest2 = (e) => {
        setprotagnist2(e.target.value)
    }
    const onChangeProtagnest3 = (e) => {
        setprotagnist3(e.target.value)
    }
    const onChangeProtagnest4 = (e) => {
        setprotagnist4(e.target.value)
    }

    // OnFinish Api Calling

    const onFinishClick = () => {
        document.getElementById("lastDivNone").style.display = "block"
        document.getElementById("next3None111").style.display = "none"
        document.getElementById("dis0988_11").style.display = "none"
        document.getElementById("DEMO4OP").style.display = "none"
        document.getElementById("next3NoneFinish").style.display = "none"
        document.getElementById("dis76546_1").style.display = "none"
        scrollToBottom()
        setdisabledInputsd3(true)
        setlastLoading(true)
        setFloading(true)
        FinalOutPut(pName, useCase, Indursty, Protagonist, BO1, SBO2, SBO3, SBO4, Demo1, Demo2, Demo3, Demo4).then(async (result) => {
            console.log(result);
            const aa = {
                "error": {
                    "message": "That model is still being loaded. Please try again shortly.",
                    "type": "server_error",
                    "param": null,
                    "code": null
                }
            }
            if (result == aa) {
                alert(aa.error.message)
            }

            let Fdata = result.choices

            setFintro1(Fdata[0]["text"])
            if (Fdata.length == 2) {
                setFintro2(Fdata[1]["text"])
            }
            setFloading(false)
            setlastLoading(false)
            document.getElementById("next3NoneFinish").style.display = "block"
            scrollToBottom()

        }).catch(err => {
            alert(err)
            setFloading(false)
            setlastLoading(false)
        });
    }

    const FinClick = () => {

        document.getElementById("next3NoneFinish").style.display = "none"
        document.getElementById("FINALLAS").style.display = "none"
        document.getElementById("FOROutro").style.display = "none"
        document.getElementById("outNon2").style.display = "none"
        scrollToTop()
    }

    const GenerateOutro = () => {
        var outro = [
            {
                "B1": BO1 == "" ? "nan" : BO1,
            },
            {
                "B1": SBO2 == "" ? "nan" : SBO2,
            },
            {
                "B1": SBO3 == "" ? "nan" : SBO3,
            },
            {
                "B1": SBO4 == "" ? "nan" : SBO4
            },
        ];

        var arrOutro = []
        var i = 0;

        for (i = 0; i < 4; i++) {
            if (outro[i]["B1"] == "nan") {
                arrOutro.push(i)
            }
        }

        if (arrOutro.length == 0) {
            var BOs = BO1.toLowerCase() + ", " + SBO2.toLowerCase() + ", " + SBO3.toLowerCase() + ", and " + SBO4.toLowerCase() + "..."
        }
        if (arrOutro.length == 1) {
            var BOs = BO1.toLowerCase() + ", " + SBO2.toLowerCase() + ", and " + SBO3.toLowerCase() + "..."
        } else {
            var BOs = BO1.toLowerCase() + ", and " + SBO2.toLowerCase() + "..."
        }




        document.getElementById("FOROutro").style.display = "block"
        document.getElementById("outNon2").style.display = "block"
        document.getElementById("outNon1").style.display = "none"
        setoutroLoading(true)
        document.getElementById("next3NoneFinish").style.display = "none"
        document.getElementById("FINALLAS").style.display = "none"
        document.getElementById("dis76546").style.display = "none"
        scrollToBottom()

        FinalOutro(pName, useCase, newIntro, BO1, SBO2, SBO3, SBO4).then(async (result) => {
            let aa = {
                "error": {
                    "message": "That model is still being loaded. Please try again shortly.",
                    "type": "server_error",
                    "param": null,
                    "code": null
                }
            }
            if (aa == result) {
                console.log("innser log", aa);
                alert(aa.error.message)
            }
            let dataa = result.choices
            if (dataa) {
                setoutroState1(BOs + "\n" + dataa[0]["text"])
                setoutroState2(BOs + "\n" + dataa[1]["text"])
            }
            setoutroLoading(false)
            scrollToBottom()

        }).catch(err => {
            alert(err)
            setoutroLoading(false)
        });
    }
    const ClearAll = () => {
        window.location.reload(false);
        window.scrollTo(0, 0)
    }
    const VerbCheckEv1 = () => {
        verbs(BO1).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES(result.message)
                setTimeout(() => { setbo1RES("") }, 3000);
            }
        })
    }
    const VerbCheckEv2 = () => {
        verbs(SBO2).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_1(result.message)
                setTimeout(() => { setbo1RES_1("") }, 3000);
            }
        })
    }
    const VerbCheckEv3 = () => {
        verbs(SBO3).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_2(result.message)
                setTimeout(() => { setbo1RES_2("") }, 3000);
            }
        })
    }
    const VerbCheckEv4 = () => {
        verbs(SBO4).then(async (result) => {
            if (result.statusCode == 100) {
                setbo1RES_3(result.message)
                setTimeout(() => { setbo1RES_3("") }, 3000);
            }
        })
    }
    const headers = [
        { label: "Intro", key: "newIntro" },
        { label: "BO1", key: "BO1" },
        { label: "Demo1", key: "extra" },
        { label: "BO2", key: "SBO2" },
        { label: "Demo2", key: "extra2" },
        { label: "BO3", key: "SBO3" },
        { label: "Demo3", key: "extra3" },
        { label: "BO4", key: "SBO4" },
        { label: "Demo4", key: "extra4" },
        { label: "Outro", key: "newOutro" },
    ];
    const data = [{ newIntro: newIntro, BO1: BO1, extra: extra, SBO2: SBO2, extra2: extra2, SBO3: SBO3, extra3: extra3, SBO4: SBO4, extra4: extra4, newOutro: newOutro }]

    const csvReport = {
        data: data,
        headers: headers,
        filename: 'scriptoria.txt'
    };
    function saveDocumentToFile(doc, fileName) {
        // Create a mime type that will associate the new file with Microsoft Word
        const mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        // Create a Blob object from Packer containing the Document instance and the mimeType
        Packer.toBlob(doc).then((blob) => {
            const docblob = blob.slice(0, blob.size, mimeType)
            // Save the file using saveAs from the file-saver package
            saveAs(docblob, fileName)
        })
    }

    function generateWordDocument(event) {

        SaveScripts(pName, useCase, Indursty, Protagonist, BO1, SBO2, SBO3, SBO4, Demo1, Demo2, Demo3, Demo4, protagnist2, protagnist3, protagnist4, extra, extra2, extra3, extra4, newIntro, extrasss5, newOutro, extrasss, extrasss2, extrasss3, extrasss4, extrasss6).then(async (result) => {
            console.log("Result---->", result);
        })
        event.preventDefault();

        let doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({ text: 'Final Script', heading: HeadingLevel.TITLE }),
                        new Paragraph({ text: 'Intro', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss5 == "" ? newIntro : extrasss5 }),

                        new Paragraph({ text: 'BO 1', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: BO1 }),

                        new Paragraph({ text: 'DEMO 1', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss == "" ? extra : extrasss }),

                        new Paragraph({ text: 'BO 2', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO2 }),

                        new Paragraph({ text: 'DEMO 2', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss2 == "" ? extra2 : extrasss2 }),

                        new Paragraph({ text: 'BO 3', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO3 }),

                        new Paragraph({ text: 'DEMO 3', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss3 == "" ? extra3 : extrasss3 }),

                        new Paragraph({ text: 'BO 4', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO4 }),

                        new Paragraph({ text: 'DEMO 4', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss4 == "" ? extra4 : extrasss4 }),

                        new Paragraph({ text: 'Outro', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss6 == "" ? newOutro : extrasss6 }),
                    ],
                },
            ],
        })
        saveDocumentToFile(doc, 'New Document.docx')
    }
    function OnlyDownload(event) {

        event.preventDefault();

        let doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({ text: 'Final Script', heading: HeadingLevel.TITLE }),
                        new Paragraph({ text: 'Intro', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss5 }),

                        new Paragraph({ text: 'BO 1', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: BO1 }),

                        new Paragraph({ text: 'DEMO 1', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss }),

                        new Paragraph({ text: 'BO 2', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO2 }),

                        new Paragraph({ text: 'DEMO 2', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss2 }),

                        new Paragraph({ text: 'BO 3', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO3 }),

                        new Paragraph({ text: 'DEMO 3', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss3 }),

                        new Paragraph({ text: 'BO 4', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: SBO4 }),

                        new Paragraph({ text: 'DEMO 4', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss4 }),

                        new Paragraph({ text: 'Outro', heading: HeadingLevel.HEADING_1 }),
                        new Paragraph({ text: extrasss6 }),
                    ],
                },
            ],
        })
        saveDocumentToFile(doc, 'New Document.docx')
    }



    return (

        <section>
            <section>
                <div className='body-loader' id="body-loader">
                    <img width="100" src={gif} />
                </div>
                <div style={{ position: "sticky", top: 0, backgroundColor: "#fff" }}>
                    <div className="row m-0 pt-3 pb-2" style={{ boxShadow: "0px 11px 10px -15px #111" }}>
                        <div className="col-1"></div>
                        <div className="col-2">
                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAAAvCAYAAABtwmFaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA6MSURBVHgB7V0LcFTVGf7OzeZFCNkAIiCSG16iEkm0WhBrNqVOO6NI0sco7XTYtHbasdaETh1orZJMxxnH6hBsbenU1g3taK0zErBMW6uTxSpSxSEKCBIIN6ASntmEkOdmb+9/H3vPbm6yd18hJPvNHPY+zot7vvu/zjk3DAlA85yfuSCkrQaDSwacDPAplyXI8i6/IDRcLz0pIYUUbIAhDhwSN4gOWX5BOXRFyNokBwKbB9PSvClypjASYibkEfGRYkEWGkkiGtcupTuwZ+Y0nJ6UqZ5P9vux5GwH5nVe4ot6leRjsipFVQxCboWMpu60fm+JVOdDChMWMREynIxnJmWhrmQR9k/Ps8w/o7sXRec6cO+xz8LJObRDMjwDAqtNSdKJiREJSbahzJhIicmyhACaBtPTfOmyTGQUKc+bc6/GH5fMU6WjHRA5l506j3kdJjFzBvxqIrLSrwJfICBXXnfyqQakMKFgSUiSgEwWNiGCbUhkJMmYSJAkXXnyNFaeOO3zM1aSkpQTC0L4BUMdgyMjSb+WKTnYPy1P/SW05OUknIwEUvtUb5XrZuepydkvYGJjo5IUZYTj4Gz1MQ7iDvW5GjEgREKS18yr4+FsQ1K7RFK7ajpWkFp/Yte7+WPA0SEyVEF7SYv1c0lP9UryIDnYp7dHKFFSE+KDCK3PyYII7eWB3k4hokSIhHQEAuU8GR92lVg6KnQv2WQkkBRec+/KmN60BEKERowaaIR0ctfpnKT4cf080ajXf72Ij4xumJK2AMmDBJPw9YgBIaxijFVRr4lsP19RNCqkiwQGRpKpBpcPpDZF/dgL80EbUlNE8lCnpysJUUtFHkGVrTsyJAmwfd5sPF80H2MFgwIraa67O151FSsMtUlmQ77FfZLgFA2Qwq4TYd1KWgqTtPV6XsMEccG01Yl4a5VUrqTt+nk5TJVdw9VraA2v3m4Vly/chKBypVw7m/X2PTD7bNXXJj2vhFBUwzRZvDBf2HV6mRo9nxTWD1ttmIS89hE3EwTVifj+XbeqanmsYM3hVukbR6SKJdKvLwcpeXVMb79kowzlb4S19JSUVKb/1kAbUEItd0yDRAPvgUZSAuPqNuw0r34e3o5Xb4MgwxplXPnh+gq9j7XcufE8JGiEKg+rT7boA70s2zD886jQ6+JsSCaobxjZbckg481TjuLuq97DrMwLiBYHpjvFTEV6H527/gVyvDC64G0hGgx6sESW4hHK8APshSY9jHroerlFGZJyNCge2LcXXfov1U+k4SWvWz+uDatvs35NitBXo64aWIf/qEy5XoaX+sNB1PNQ25UIfR6bjExBI1FgKFCt3imTkUgsnPQZHl/wkvpr4PlPv6akr9quwwgFrfnkhHtmd6+rec6GyoWfPunF6IBU52qYBCyHSSgJ2oDwA+yCOcDbEUo+ykuDYhXwp+sliB6GtDXqb9SPSbJ6oBFKhNl/GvxWi75Snyq4eqnf2/Tjar1u6G0ZZWphz76nF6ISpokBvW9L9X4FX+4gIY1pQJKQ8SDX0YPJaT26RHxf/Q3HA3P+hS5/Fv7WVmq7XgrCU/r24RPimk9aGxVSlo0SKQ2iuKENsou7J+rX6ZpBDP5+OPE8GB6bET22I9SE8ELrL41lsY3y/MsS7hU3cHUNN1Ae2IdH75Pb4l4wxqoS8rhY7fTL2oM8oy+MiBZEvAfm/NuSgFagvDvP3YaL/mxEgxcXz8Ubc2fgid37t+0TqwtHMUbp0ZMx2G5oAyXqiezvMoTaSRLsIxb7uN3imkEiJyLDGVYumrq0JYb2MJINGQLVhhwYTA++KZfS0xEtiIS/u+E522QkTFYk6X0zdyEWkI376O1Fzk+mz3Jj9EED4YVGyDKYA2klkeyQItEw2oz2RXVGWVc09fNkNGzIoCPDQyWk4l2rnhwN9HArdkZCdYGmmXYfHMB/PuhX06v/7bPMe7o9EDy+ecoxxArq66YvLFqN5EPEyB5zOPiH7LK4n0iSusLORa5+CZHB97V4hLpikd58vaJ+TCZGDTRN0wCLZyHoXquLTmiuOlqQ17woR3NYbr8xHXfdkqGmr39pqOrv6pFx7PNBlbjb3u7DbOFTxIOOjHSXWL0tmVJIhEZGF7R4pLEYma6X6+fhg+aBKT3oRXfrx5SPJAV56sVIXP82wlSr/Nz/9mHKVMAkm4fraxXXV0PFGqhH7OAlKU8wfsIhCEEIBNzGyfb51yASiIDklBjhG15NE9Ee+UMXLvVah74mZzOVtJQq7sjEmTNdqhMUD7L9aS4kDxLMgTUCu0RQI/zj1u/RQ6/kjmu5MkQSeiBk75Vz9SQC1FaNXjclF9dvD5ePl3CbYMYSh+srP4ce71y9hNAIhNHXGliofUFgTPWgyLs+bsPDfmz+S6pD8peip1VS8mq35dQgPmrxD1uWCFu71VwHedO8yz81aQPVMEMW4TDsSfLCJe56nV5Gssi/DjGuhLEAqb3asGtehIaCCB4MVbuGZKe+VsC6r1S3G/GDr99ol4/NBq+zIwXrjytTACItst1hQ0LuWbZuxPukkufPTrO89/Tfu1XCbt0wJXht2Z5NiAsBuezwb1d5MTqghybqx3a9TKOM3fyRIMKcqfFAI77dNkT91wdrp8SIIEhIzqqgYq5tS6coKKKO58UeEO95ZwH6Pp4Fx6wOzL/noyH3yckhu/K7d2WpatvAkUuRX4BI6HX44zG4owU9xGjbi6VMtLDbhmSjHi+Sh4h9dKRB9gWUadLTNuOPFDfk7b7B9kno+sdN6vFAy1UQ8rsxaYV1+OfqfG2m0v95nkLg2biQMz2ufY+03Vaqq/AhhXEDwc80oz1nYNBWgZfb7gytIHsAQtaAec4dk3NDKrztghnqkXvT0fnX5eh+83ocOLgU8UCWMZrSMYVRgCMD/XWDyKwqOudz2nFqaB6acN/Mt1RJyRQC5n5rryrxSGVn3dIazJuTxVRShoeASKoSDsQQZuIhM3Rg4kGCueZw3GkHoVCZepOZXLus7bztQkTKt9qXBM8zbjiF3G9+gGxdVW95rScYACdPmohpgAics/IQBGe3EoSPL4TIZNaOiQlJT+OPkPTPQumpuiVnffW0488uukaYg/7RqmxVVb++tx/vHBwYcn/SVw5hz/fOx70inQlyogLMKYwRhLgUexf+svGnpcUuO+shjfnrWFGx7zGc6puKeNErDOSnHJvxg5BNXjkD/sondu/36Zv1k4adZ29NCBkJ2YPpbqQwbhCiM2lTfnPB+qZH3/vY9YsVN41YMJaV3wQiouEYJQIBpk5H1WE84JVzjUyduWPcvgPtnBlHSmgBjJl3lHOZzrnrKhiTcFFYh8r8K0p7DDXimLxdsSVdZE+OtPInFkISGR/8+McJk44EZajiix3Zgxh2LiEZ6O4rpdhB+EoARl88opgCdBIyhYYB85zYqlHRyMckOaO/EpWFV5wpM4SQbBCSrCjywo6uqAlpEC38HgXTKX75cltp1AtyI0MWkVyI0BYb8DFPmptN+GA7/b2s5rZpWF2QA19/ALtO9aD67XNYe10uW7t4CuoPd8KjpD+vnMnEyQ6VhR+e70Pdhx1ovdhPQpKpkhFpZVhbKOEKxBBCDqQJTQ7lf8Z/DMoKszLbLa5dCEpB45ymB9v6pyaBiBrY6IQ+iIxlYdfKoUlK8vQ9MLe00rUGaP0y8rhg7qVxw9yGGoK6L07F2hvzsPmDs3BmOuDrVCIU3T3YeMtciFPSlQDuIDxNZ+Camamq6F0nu1C1ZCqWOh0oe4WaUcjIhDKsWyDhCsWQb/toH3eSmwo7u0YsSPtmrEAk1FaPH1Ocl9vQ3H1N0shIuIyzNbR+kFaGELmIlLR0i/oiwlxLWK7nkfT8Hv2Y1klWD6lxUJsty8sQ4PnwHGq8J+GakaGSsamtG645ORAzNLtR8vWhcocke090QcxVyNrbJ6GzUyHj9RKuYFgHAhnqFQlZTN72cLFCY1HucKA1k7TtNdE24xDIci2SDxfMFTYEY6aE2vZCc6poGVSDnvhPlhh5jJUuxkppMbyRmjdaUZDrgLtompo8TWc1J0ZB5avN2PfgUrhvyFPfQldBLloevJGJzky82HRWQn9/GWqWS7jCIVhdpEA5Scl7W6xJZ3dRLUnLbSW/wv0x7p2JDLl2lJaeeaGR0EgGDJKGTzlJw9QzonnR0dmLsi1NKHzyf5Dae+EuvgprS2bA1+vHRtccNU/V8lkqIen+1vfb5NrXJek7Lx8cF2QkDDtV4mdCxaqWzxvfvPZqMTxQHq2HvTCCNI0BEgJy5Siug4wECZoEJOknQiNoK6LEwwrZqu+8ViWbmG8+c2+zZq83fXYRxdfkwpnlgPdoOzb+s1mCMKkMz5RF3dZYxbCEJFvykLihbP3eQ42PLy8SedVNjgpt9KeV45Gw68IS1LVWIFFQghpNrG+g4vCWCgljB6SyyRM3Nr7HZEZs3X1S7ujqY0S4+nf9kM73yM5sB2vYfwa+Hj8Kp2ahdIFm/gwEAhJ6/F/GlhXjhowEW6sRf3/HMzUvLS7YGC4p75+1S131YyUxyZH5k0LaaD4GYAOKrTRQNsbIyMNQ3TF5/uyHOwNKyE2JMiqWo/KPHhMn6KeyESGXAMVmHLvPIWbYXh67uHqbiEB6DcyPH6nQ9tUcxZ35B9Tztv58RSoWJcW7VsK+6w795p7xMStjhR/scFvfoC0h3HrVjLRGPHf3uJKMBqJer73ooR3lQpqwSXlLRYw2Rnf/TAqXATFvIFj8k51uRXesBYv4R5MSBenws/cUIoVxjTh2tGggVR7wpxUzgbkUO2epYuXQn5bTtjTKrCnAAq0soHiffr8Eh0NUAk0uZYZrNYt6s7wS4nl2VQ1SGNeIm5CxImiTMpTaUP9SrzBQklr3OP5x2QjJY/FDr7kU71KZZmOlvOSkeWrF3WzoTetflyLjxMCYICQP+lZPVq+m8nuzUttcJxr+D05vUyUnrvUHAAAAAElFTkSuQmCC"
                                />
                            </div>
                        </div>
                        <div className="col-7" ></div >
                        <div className="col-2 pt-2" style={{ display: "flex", cursor: "pointer" }} >
                            <img
                                style={{ height: "18px", width: "18px", marginTop: "5px", marginRight: "8px" }}
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFJSURBVHgBrZUxboNAEEVnlyYlR6BMmZwAUqZKbhCndOkeAQV9jmBcpuMI6xPERyBlur0AkP/tNUIWli3YJ4GYhfnMzgyDkisURZFord+UUknf9xGWQhwWdgPbdF23wzOHKV81IRYFQbCFYyK3qSG+gU8zXtRjoyzLD0T3c6cgeefz9JOpSHkDb61kJhBfpWm6G0S5Zb5RTnmbi0VQz0zFcfvI4ddCQRKiiFteKCg/uSi9gGhfNNRX4hHosXg6Fr/E2jW2NxBpxEItLdAlIUWt+MWyUI14BOlsNFpgL37Zs1C1eAR6lUbzG44y8QBSWXMcaqf+KcsLZtu23fAi4MkYY+M4/uPXIPNZ53luBlEnfIDwLyc9zAe5H+5wnWVZdV4Ixned8Dc+3Qjm4y01BMDfyus5wmH9mgOnF4cNZ8PlP4ptyK5hkad8/wEVNZM35IcYYQAAAABJRU5ErkJggg=="
                            />
                            <h3 style={{ fontSize: "16px", fontWeight: "500" }}>Beta Account</h3>
                        </div >
                        <div className="col-1" ></div >
                    </div >
                </div >
            </section >
            <section>
                <div className="row m-0 pt-5">
                    <div className="col-1"></div>
                    <div className="col-4">
                        <p className="animation_text">Start New Draft</p>
                    </div>
                    <div className="col-7"></div>
                </div>
            </section>
            <section>
                <div className='row m-0'>
                    <div className='col-6'>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">1</span>
                                    </div>
                                    <span className="pName">Product Name</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        disabled={disabledInputs}
                                        onChange={onChangePname}
                                        className="InputFields"
                                        placeholder="SAP S/4HANA Cloud"
                                        type="text"
                                        value={pName}
                                    />
                                    {
                                        searchBox &&
                                        <div style={{ padding: 20, height: "auto", overflow: "auto", position: "absolute", zIndex: 999, backgroundColor: "#fff", width: 536, border: "1px solid gray" }}>
                                            {
                                                filterPName && filterPName.filter((val) => {
                                                    if (val.name.toLowerCase().includes(pName.toLowerCase())) {
                                                        return val;
                                                    }
                                                }).map((e) => {
                                                    return (
                                                        <p style={{ cursor: "pointer" }} onClick={() => OnSelectSearchRes(e.name)}>{e.name}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">2</span>
                                    </div>
                                    <span className="pName">Use Case</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        disabled={disabledInputs}
                                        onChange={onChangeUseCase}
                                        className="InputFields"
                                        placeholder="Create Profitable Estimates"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">3</span>
                                    </div>
                                    <span className="pName">Industry</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        list="browsers"
                                        name="myBrowser"
                                        disabled={disabledInputs}
                                        onChange={onChangeIndursty}
                                        className="InputFields"
                                        placeholder="CX"
                                        type="text"
                                    />
                                    <datalist id="browsers">
                                        {
                                            GrapshData && GrapshData.map((row) => (
                                                <option value={row.name} />
                                            ))
                                        }
                                    </datalist>
                                </div>
                                <div style={{ width: 535, marginLeft: 50 }}>
                                    {
                                        progressValue &&
                                        <Progressbar bgcolor="#99ccff" progress={_.round(progressValue, 2)} height={20} width={80} />
                                    }
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">A1</span>
                                    </div>
                                    <span className="pName">Persona 1</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        disabled={disabledInputsOnNext}
                                        onChange={onChangeProtagonist}
                                        className="InputFields"
                                        placeholder="Project Planner"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">A2</span>
                                    </div>
                                    <span className="pName">Business Outcomes 1</span>
                                </div>
                                <div className="top_input">
                                    <input
                                        onBlur={VerbCheckEv1}
                                        disabled={disabledInputsOnNext}
                                        onChange={onChangeBO1}
                                        className="InputFields"
                                        placeholder="Create successful projects"
                                        type="text"
                                    />
                                    {
                                        bo1RES &&
                                        <p id="checkD" style={{ color: "red", fontSize: "14px" }}>{bo1RES}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div className="row top_pad">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div style={{ display: "flex" }}>
                                    <div className="firstDiv">
                                        <span className="inner_text">A3</span>
                                    </div>
                                    <span className="pName">Demo 1</span>
                                </div>
                                <div className="top_input">
                                    <textarea
                                        value={Demo1}
                                        disabled={disabledInputsOnNext}
                                        onChange={onChangeDemo1}
                                        className="InputFields"
                                        rows="5"
                                        cols="50"
                                        placeholder="Enter key bullets here. For Example: &#10;Transform your business by customizing existing successful projects with intelligent editing.
                    Redesign plans with fully adjustable rules to create future success. "
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <div id='section1dis'>
                            <div id='gen0disN'>
                                {loading ? (
                                    <div className="row m-0 btn_section">
                                        <div className="col-2"></div>
                                        <div className="col-8">
                                            <div id="loading"></div>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                ) : (
                                    <div className="row m-0 btn_section">
                                        <div className="col-2"></div>
                                        <div className="col-8">
                                            <button
                                                onClick={generate1Press}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Generate Demo Script
                                            </button>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                )}
                            </div>
                            <div id='gen1disN'>
                                {loading ? (
                                    <div className="row m-0 btn_section">
                                        <div className="col-2"></div>
                                        <div className="col-8">
                                            <div id="loading"></div>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                ) : (
                                    <div className="row m-0 btn_section">
                                        <div className="col-2"></div>
                                        <div className="col-8">
                                            <button
                                                onClick={generate1Press}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Re Generate Demo Script
                                            </button>
                                        </div>
                                        <div className="col-2"></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* State 1 Start */}

                        <section id="state1">
                            <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                                <div className="row m-0">
                                    <div className="col-1"></div>
                                    <div className="col-10">
                                        <div>
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text_O">*</span>
                                                </div>
                                                <span className="pName1">Demo 1 Options</span>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <textarea
                                                    id="A1"
                                                    rows="8"
                                                    cols="50"
                                                    onChange={onChangeDO1O}
                                                    value={resA1 == null || "" ? "" : resA1}
                                                    className="left_from"
                                                    type="text"
                                                ></textarea>
                                                <input
                                                    checked={isChecked}
                                                    onChange={OnchangeCheck}
                                                    id="female"
                                                    type="checkbox"
                                                    className="cus_radio"
                                                    value="female"
                                                    name="gender"
                                                    style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <div className="custom-control custom-radio">
                                                <textarea
                                                    id='A2'
                                                    rows="8"
                                                    cols="50"
                                                    onChange={onChangeDO1O1}
                                                    value={resA2 == null || "" ? "" : resA2}
                                                    className="left_from"
                                                    type="text"
                                                ></textarea>
                                                <input
                                                    checked={isChecked2}
                                                    onChange={OnchangeCheck2}
                                                    id="female"
                                                    type="checkbox"
                                                    className="cus_radio"
                                                    value="female"
                                                    name="gender"
                                                    style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div className="row m-0 btn_section_next">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <button
                                        id='next1None'
                                        onClick={onNextClick}
                                        className="btn cus_btn"
                                        style={{ float: "right" }}
                                    >
                                        Next
                                    </button>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </section>

                        {/* State 2 Start */}

                        <section id='state2'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">B1</span>
                                                </div>
                                                <span className="pName">Persona 2</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onChange={onChangeProtagnest2}
                                                    disabled={disabledInputsd2}
                                                    className="InputFields"
                                                    placeholder="Project Planner"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">B2</span>
                                                </div>
                                                <span className="pName">Business Outcomes 2</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onBlur={VerbCheckEv2}
                                                    onChange={onChangeSBO2}
                                                    disabled={disabledInputsd2}
                                                    className="InputFields"
                                                    placeholder="Make close estimates"
                                                    type="text"
                                                />
                                                {
                                                    bo1RES_1 &&
                                                    <p id="checkD" style={{ color: "red", fontSize: "14px" }}>{bo1RES_1}</p>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">B3</span>
                                                </div>
                                                <span className="pName">Demo 2</span>
                                            </div>
                                            <div className="top_input">
                                                <textarea
                                                    disabled={disabledInputsd2}
                                                    onChange={onChangeDemo2}
                                                    value={Demo2}
                                                    className="InputFields"
                                                    id="w3review"
                                                    name="w3review"
                                                    rows="5"
                                                    cols="50"
                                                    placeholder="Enter key bullets here. For Example: &#10;Pull important data from past profitable projects with SAP cataloging.
                          Get useful information about the work process, profits, and resources right away.
                          Spend less time with filters designed to display required data with much of the work already done."
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div id='section2dis'>
                                        <div id='123disN123'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <button
                                                            onClick={onRegenerate1}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Generate Demo Script
                                                        </button>
                                                        <button
                                                            onClick={onBackClick1}
                                                            className="btn cus_btn mr-2"
                                                            style={{ float: "right" }}
                                                        >
                                                            Back
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>
                                        <div id='disN123'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <button
                                                            onClick={onRegenerate1}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Re Generate Demo Script
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <section id='regenerate'>
                                        <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                                            <div className="row m-0">
                                                <div className="col-1"></div>
                                                <div className="col-10">
                                                    <div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="firstDiv">
                                                                <span className="inner_text_O">*</span>
                                                            </div>
                                                            <span className="pName1">Demo 2 Options</span>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='B1'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO2O}
                                                                value={resB1 == null || "" ? "" : resB1}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked3}
                                                                onChange={OnchangeCheck3}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='B2'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO2O1}
                                                                value={resB2 == null || "" ? "" : resB2}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked4}
                                                                onChange={OnchangeCheck4}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                        <div className="row m-0 btn_section_next">
                                            <div className="col-2"></div>
                                            <div className="col-8">
                                                <button
                                                    id='next2None'
                                                    onClick={OnNext2Clicked}
                                                    className="btn cus_btn"
                                                    style={{ float: "right" }}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                            <div className="col-2"></div>
                                        </div>
                                    </section >
                                </div >
                            </div >
                        </section>

                        {/* State 3 Start */}

                        <section id='regenerate2'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">C1</span>
                                                </div>
                                                <span className="pName">Persona 3</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onChange={onChangeProtagnest3}
                                                    disabled={disabledInputsd4}
                                                    className="InputFields"
                                                    placeholder="Project Planner"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">C2</span>
                                                </div>
                                                <span className="pName">Business Outcomes 3</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onBlur={VerbCheckEv3}
                                                    onChange={onChangeSBO3}
                                                    disabled={disabledInputsd4}
                                                    className="InputFields"
                                                    placeholder="Collaborate efficiently."
                                                    type="text"
                                                />
                                                {
                                                    bo1RES_2 &&
                                                    <p id="checkD" style={{ color: "red", fontSize: "14px" }}>{bo1RES_2}</p>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">C3</span>
                                                </div>
                                                <span className="pName">Demo 3</span>
                                            </div>
                                            <div className="top_input">
                                                <textarea
                                                    disabled={disabledInputsd4}
                                                    onChange={onChangeDemo3}
                                                    value={Demo3}
                                                    className="InputFields"
                                                    id="w3review"
                                                    name="w3review"
                                                    rows="5"
                                                    cols="50"
                                                    placeholder="Enter key bullets here. For Example: &#10;Collaborate with your teams seamlessly and create more profitable estimates."

                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div id="finishClick">
                                        <div id='dis76546'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    {/* <div className="col-2"></div> */}
                                                    <div className="col-10 p-0">

                                                        <button
                                                            onClick={regenerate3}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Generate Demo Script
                                                        </button>
                                                        <button
                                                            onClick={onFinishClick}
                                                            className="btn cus_btn"
                                                            style={{ float: "right", marginRight: 20 }}
                                                        >
                                                            Skip Demo, Move to Intro
                                                        </button>
                                                        <button
                                                            onClick={onBackClick2}
                                                            className="btn cus_btn"
                                                            style={{ float: "right", marginRight: 20 }}
                                                        >
                                                            Back
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>
                                        <div id='dis0988'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <button
                                                            onClick={regenerate3}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Re Generate Demo Script
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>

                                    </div>




                                    <section id="demo3dis">
                                        <div
                                            style={{ paddingTop: "50px", paddingBottom: "50px" }}
                                        >
                                            <div className="row m-0">
                                                <div className="col-1"></div>
                                                <div className="col-10">
                                                    <div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="firstDiv">
                                                                <span className="inner_text_O">*</span>
                                                            </div>
                                                            <span className="pName1">Demo 3 Options</span>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='C1'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO3O}
                                                                value={resC1 == null || "" ? "" : resC1}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked5}
                                                                onChange={OnchangeCheck5}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='C2'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO3O1}
                                                                value={resC2 == null || "" ? "" : resC2}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked6}
                                                                onChange={OnchangeCheck6}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                    </section >

                                    <div className="row m-0 btn_section_next">
                                        <div className="col-2"></div>
                                        <div className="col-8 mt-5">
                                            <button
                                                id='next3None'
                                                onClick={OnNext3Clicked}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <div className="col-2"></div>
                                    </div >



                                </div >
                            </div >
                        </section>
                        {/* State 4 Start */}

                        <section style={{ marginTop: -78 }} id='demo4Div'>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">D1</span>
                                                </div>
                                                <span className="pName">Persona 4</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onChange={onChangeProtagnest4}
                                                    disabled={disabledInputsd3}
                                                    className="InputFields"
                                                    placeholder="Project Planner"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">D2</span>
                                                </div>
                                                <span className="pName">Business Outcomes 4</span>
                                            </div>
                                            <div className="top_input">
                                                <input
                                                    onBlur={VerbCheckEv4}
                                                    onChange={onChangeSBO4}
                                                    disabled={disabledInputsd3}
                                                    className="InputFields"
                                                    placeholder="Create successful projects"
                                                    type="text"
                                                />
                                                {
                                                    bo1RES_3 &&
                                                    <p id="checkD" style={{ color: "red", fontSize: "14px" }}>{bo1RES_3}</p>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row top_pad">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div style={{ display: "flex" }}>
                                                <div className="firstDiv">
                                                    <span className="inner_text">D3</span>
                                                </div>
                                                <span className="pName">Demo 4</span>
                                            </div>
                                            <div className="top_input">
                                                <textarea
                                                    disabled={disabledInputsd3}
                                                    onChange={onChangeDemo4}
                                                    value={Demo4}
                                                    className="InputFields"
                                                    id="w3review"
                                                    name="w3review"
                                                    rows="5"
                                                    cols="50"
                                                    placeholder="Enter key bullets here. For Example: &#10;Transform your business by customizing existing successful projects with intelligent editing.
                          Redesign plans with fully adjustable rules to create future success. "

                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div id="">
                                        <div id='dis76546_1'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    {/* <div className="col-2"></div> */}
                                                    <div className="col-10 p-0">
                                                        <button
                                                            onClick={regenerate4}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Generate Demo Script
                                                        </button>
                                                        <button
                                                            onClick={onFinishClick}
                                                            className="btn cus_btn"
                                                            style={{ float: "right", marginRight: 20 }}
                                                        >
                                                            Skip Demo, Move to Intro
                                                        </button>
                                                        <button
                                                            onClick={onBackClick3}
                                                            className="btn cus_btn"
                                                            style={{ float: "right", marginRight: 20 }}
                                                        >
                                                            Back
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>
                                        <div id='dis0988_11'>
                                            {loading ? (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <div id="loading"></div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            ) : (
                                                <div className="row m-0 btn_section">
                                                    <div className="col-2"></div>
                                                    <div className="col-8">
                                                        <button
                                                            onClick={regenerate4}
                                                            className="btn cus_btn"
                                                            style={{ float: "right" }}
                                                        >
                                                            Re Generate Demo Script
                                                        </button>
                                                    </div>
                                                    <div className="col-2"></div>
                                                </div>
                                            )}
                                        </div>
                                    </div>


                                    <section id="DEMO4OP">
                                        <div
                                            style={{ paddingTop: "50px", paddingBottom: "50px" }}
                                        >
                                            <div className="row m-0">
                                                <div className="col-1"></div>
                                                <div className="col-10">
                                                    <div>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="firstDiv">
                                                                <span className="inner_text_O">*</span>
                                                            </div>
                                                            <span className="pName1">Demo 4 Options</span>
                                                        </div>
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='D4_1'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO4O}
                                                                value={resC1_2 == null || "" ? "" : resC1_2}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked11}
                                                                onChange={OnchangeCheck11}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="custom-control custom-radio">
                                                            <textarea
                                                                id='D4_2'
                                                                rows="8"
                                                                cols="50"
                                                                onChange={onChangeDO4O1}
                                                                value={resC2_1 == null || "" ? "" : resC2_1}
                                                                className="left_from"
                                                                type="text"
                                                            ></textarea>
                                                            <input
                                                                checked={isChecked12}
                                                                onChange={OnchangeCheck12}
                                                                id="female"
                                                                type="checkbox"
                                                                className="cus_radio"
                                                                value="female"
                                                                name="gender"
                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}

                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                    </section >

                                    <div className="row m-0 btn_section_next">
                                        <div className="col-2"></div>
                                        <div className="col-8 mt-5">
                                            <button
                                                id='next3None111'
                                                onClick={onFinishClick}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Generate Intro Script
                                            </button>
                                            <button
                                                id='next3NoneFinish'
                                                onClick={onFinishClick}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Re Generate Intro Script
                                            </button>
                                        </div>
                                        <div className="col-2"></div>
                                    </div >



                                </div >
                            </div >
                        </section>


                        {/* State 4 Start */}
                        <div >
                            <div id="lastDivNone">
                                <div id='FINALLAS'>
                                    {lastLoading ? (
                                        <div className='row'>
                                            <div className='col-8'></div>
                                            <div style={{ marginTop: "50px", marginBottom: "50px" }} className='col-4'>
                                                <div id="loading"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <section>
                                            <div className="row">
                                                <div className="col-12">
                                                    <section >
                                                        <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                                                            <div className="row m-0">
                                                                <div className="col-1"></div>
                                                                <div className="col-10">
                                                                    <div>
                                                                        <div style={{ display: "flex" }}>
                                                                            <div className="firstDiv">
                                                                                <span className="inner_text_O">*</span>
                                                                            </div>
                                                                            <span className="pName1">Select Intro</span>
                                                                        </div>
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id='AAA'
                                                                                rows="5"
                                                                                cols="50"
                                                                                onChange={int1}
                                                                                value={Fintro1 == null || "" ? "" : Fintro1}
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked7}
                                                                                onChange={OnchangeCheck7}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-2">
                                                                        <div className="custom-control custom-radio">
                                                                            <textarea
                                                                                id='BBB'
                                                                                rows="5"
                                                                                cols="50"
                                                                                onChange={int2}
                                                                                value={Fintro2 == null || "" ? "" : Fintro2}
                                                                                className="left_from"
                                                                                type="text"
                                                                            ></textarea>
                                                                            <input
                                                                                checked={isChecked8}
                                                                                onChange={OnchangeCheck8}
                                                                                id="female"
                                                                                type="checkbox"
                                                                                className="cus_radio"
                                                                                value="female"
                                                                                name="gender"
                                                                                style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-1"></div>
                                                            </div>


                                                        </div>
                                                    </section >
                                                </div >
                                            </div >
                                        </section>
                                    )}
                                </div>
                            </div>
                            <div className="row m-0 btn_section_next">
                                <div className="col-2"></div>
                                <div className="col-8 ">
                                    <button
                                        id='outNon1'
                                        onClick={GenerateOutro}
                                        className="btn cus_btn"
                                        style={{ float: "right" }}
                                    >
                                        Generate Outro Script
                                    </button>
                                    <button
                                        id='outNon2'
                                        onClick={GenerateOutro}
                                        className="btn cus_btn"
                                        style={{ float: "right" }}
                                    >
                                        Re Generate Outro Script
                                    </button>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>

                        <div id="FOROutro">
                            {outroLoading ? (
                                <div className='row'>
                                    <div className='col-8'></div>
                                    <div style={{ marginTop: "50px", marginBottom: "50px" }} className='col-4'>
                                        <div id="loading"></div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="row m-0">
                                        <div className="col-1"></div>
                                        <div className="col-10">
                                            <div className='mt-5'>
                                                <div style={{ display: "flex" }}>
                                                    <div className="firstDiv">
                                                        <span className="inner_text_O">*</span>
                                                    </div>
                                                    <span className="pName1 ">Select Outro</span>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <textarea
                                                        onChange={out1}
                                                        id='CCC'
                                                        rows="5"
                                                        cols="50"
                                                        value={outroState1}
                                                        className="left_from"
                                                        type="text"
                                                    ></textarea>
                                                    <input
                                                        checked={isChecked9}
                                                        onChange={OnchangeCheck9}
                                                        id="female"
                                                        type="checkbox"
                                                        className="cus_radio"
                                                        value="female"
                                                        name="gender"
                                                        style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-2">
                                                <div className="custom-control custom-radio">
                                                    <textarea

                                                        onChange={out2}
                                                        id='DDD'
                                                        rows="5"
                                                        cols="50"
                                                        value={outroState2}
                                                        className="left_from"
                                                        type="text"
                                                    ></textarea>
                                                    <input
                                                        checked={isChecked10}
                                                        onChange={OnchangeCheck10}
                                                        id="female"
                                                        type="checkbox"
                                                        className="cus_radio"
                                                        value="female"
                                                        name="gender"
                                                        style={{ height: "20px", width: "20px", marginTop: "70px" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-1"></div>
                                    </div>
                                    <div className="row m-0 btn_section_next">
                                        <div className="col-2"></div>
                                        <div className="col-8 mt-5">
                                            <button
                                                onClick={FinClick}
                                                className="btn cus_btn"
                                                style={{ float: "right" }}
                                            >
                                                Finish
                                            </button>
                                        </div>
                                        <div className="col-2"></div>
                                    </div >
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-6">
                        <ul className="nav nav-tabs" style={{ width: "90%", marginLeft: 10 }}>
                            <li className="active"><a data-toggle="tab" href="#home" style={{ fontWeight: 600, fontSize: 16 }}>Result</a></li>
                            <li>
                                <a data-toggle="tab" href="#menu1" style={{ fontWeight: 600, fontSize: 16 }}>Graphs</a>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                                <div className="row m-0">
                                    <div className="col-11">
                                        <div style={{ height: "auto", borderRadius: "8px", backgroundColor: "#eef8ff", padding: "20px" }}>
                                            {
                                                Floading ? (
                                                    <div className="row m-0 btn_section">
                                                        <div className="col-2"></div>
                                                        <div className="col-8">
                                                            <div id="loading" style={{ marginRight: "172px", marginTop: "170px" }}></div>
                                                        </div>
                                                        <div className="col-2"></div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div className="pdfhead">Final Script</div>
                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>Intro:</div>
                                                            </div>
                                                            {
                                                                StateFive &&
                                                                <div className='row'>
                                                                    <Diff
                                                                        inputA={newIntro}
                                                                        inputB={extrasss5}
                                                                        type="words"
                                                                    />
                                                                </div>
                                                            }
                                                            <div className='row'>
                                                                < textarea wrap="soft" rows="5" onChange={yess5} className='right_side autosize' value={extrasss5 || newIntro} />
                                                            </div><br></br>
                                                        </div>


                                                        <div className='row'>
                                                            <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>BO 1:</div>
                                                        </div>
                                                        <div className='row'>
                                                            <textarea wrap="soft" rows="5" onChange={ONchangeboo1} className='right_side autosize' value={BO1}></textarea>
                                                        </div><br></br>

                                                        <div className='row'>
                                                            <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>DEMO 1:</div>
                                                        </div>
                                                        {
                                                            StateOne &&
                                                            <div className='row'>
                                                                <Diff
                                                                    inputA={extra}
                                                                    inputB={extrasss}
                                                                    type="words"
                                                                />
                                                            </div>
                                                        }
                                                        <div className='row'>
                                                            <textarea wrap="soft" rows="5" onChange={yess} className='right_side autosize' value={extrasss || extra} />
                                                        </div><br></br>
                                                        <br></br>
                                                        <div className='row'>
                                                            <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>BO 2:</div>
                                                        </div>
                                                        <div className='row'>
                                                            <textarea onChange={OnChnageBof2} className='right_side autosize' value={SBO2}></textarea>
                                                        </div><br></br>

                                                        <div className='row'>
                                                            <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>DEMO 2:</div>
                                                        </div>
                                                        {
                                                            StateTwo &&
                                                            <div className='row'>
                                                                <Diff
                                                                    inputA={extra2}
                                                                    inputB={extrasss2}
                                                                    type="words"
                                                                />
                                                            </div>
                                                        }
                                                        <div className='row'>
                                                            < textarea wrap="soft" rows="5" onChange={yess2} className='right_side autosize' value={extrasss2 || extra2} />
                                                        </div><br></br>

                                                        {SBO3 &&
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>BO 3:</div>
                                                                </div>
                                                                <div className='row'>
                                                                    <textarea wrap="soft" rows="5" onChange={onChangeBoF3} className='right_side autosize' value={SBO3}></textarea>
                                                                </div><br></br>
                                                            </div>
                                                        }

                                                        {extra3 &&
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>DEMO 3:</div>
                                                                </div>
                                                                {StateThree &&
                                                                    <div className='row'>
                                                                        <Diff
                                                                            inputA={extra3}
                                                                            inputB={extrasss3}
                                                                            type="words"
                                                                        />
                                                                    </div>
                                                                }
                                                                <div className='row'>
                                                                    < textarea wrap="soft" rows="5" onChange={yess3} className='right_side autosize' value={extrasss3 || extra3}></textarea>
                                                                </div><br></br>
                                                            </div>
                                                        }


                                                        {SBO4 &&
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>BO 4:</div>
                                                                </div>
                                                                <div className='row'>
                                                                    <textarea wrap="soft" rows="5" onChange={onChangeBoF55} className='right_side autosize' value={SBO4}></textarea>
                                                                </div><br></br>
                                                            </div>
                                                        }

                                                        {extra4 &&
                                                            <div>
                                                                <div className='row'>
                                                                    <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>DEMO 4:</div>
                                                                </div>
                                                                {StateFour &&
                                                                    <div className='row'>
                                                                        <Diff
                                                                            inputA={extra4}
                                                                            inputB={extrasss4}
                                                                            type="words"
                                                                        />
                                                                    </div>
                                                                }
                                                                <div className='row'>
                                                                    < textarea wrap="soft" rows="5" onChange={yess4} className='right_side autosize' value={extrasss4 || extra4} />
                                                                </div><br></br>
                                                            </div>
                                                        }

                                                        <div>
                                                            <div className='row'>
                                                                <div className='col-12' style={{ fontSize: "18px", fontWeight: "600" }}>Outro:</div>
                                                            </div>
                                                            {
                                                                StateSix &&
                                                                <div className='row'>
                                                                    <Diff
                                                                        inputA={newOutro}
                                                                        inputB={extrasss6}
                                                                        type="words"
                                                                    />
                                                                </div>
                                                            }
                                                            <div className='row'>
                                                                <textarea wrap="soft" rows="5" onChange={yess6} className='right_side autosize' value={extrasss6 || newOutro} />
                                                            </div><br></br>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col-12 newpd'>
                                                                <button className="btn cuss_btn" id="generate" onClick={generateWordDocument}>Save and Download Script</button>
                                                                <button className="btn cuss_btn" id="generate" onClick={ClearAll}>Clear All</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <p style={{ textAlign: "center", paddingTop: 10, fontWeight: 600 }}>Respective Count</p>
                                <div style={{ width: 600 }}>
                                    <canvas id="myChart" width="300" height="300"></canvas>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </section >



    );
}

export default App;


if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
