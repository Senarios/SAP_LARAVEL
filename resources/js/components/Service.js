var demoModel = localStorage.getItem("DemoModels")
var introModel = localStorage.getItem("IntroModels")
var outroModel = localStorage.getItem("OutroModels")

export function scriptOne(pName, useCase, Indursty, Protagonist, BO1, extra, Lob1) {
    console.log("eeeeeeeeeeee22222222222222", Lob1);

    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob1.slice(0, 1)[0] == null ? "nan" : Lob1.slice(0, 1)[0]
    var new2 = Lob1.slice(1, 2)[0] == null ? "nan" : Lob1.slice(1, 2)[0]
    var new3 = Lob1.slice(2, 3)[0] == null ? "nan" : Lob1.slice(2, 3)[0]



    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + BO1 + " " + "$ Demo:" + " " + extra + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-06-13-10-47-59",
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptTwo(pName, useCase, Indursty, Protagonist, SBO2, extra2, Lob2) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob2.slice(0, 1)[0] == null ? "nan" : Lob2.slice(0, 1)[0]
    var new2 = Lob2.slice(1, 2)[0] == null ? "nan" : Lob2.slice(1, 2)[0]
    var new3 = Lob2.slice(2, 3)[0] == null ? "nan" : Lob2.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO2 + " " + "$ Demo:" + " " + extra2 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-06-13-10-47-59",
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptThree(pName, useCase, Indursty, Protagonist, SBO3, extra3, Lob3) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob3.slice(0, 1)[0] == null ? "nan" : Lob3.slice(0, 1)[0]
    var new2 = Lob3.slice(1, 2)[0] == null ? "nan" : Lob3.slice(1, 2)[0]
    var new3 = Lob3.slice(2, 3)[0] == null ? "nan" : Lob3.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + extra3 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-06-13-10-47-59",
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })
    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function scriptFour(pName, useCase, Indursty, Protagonist, SBO3, extra3, Lob4) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var new1 = Lob4.slice(0, 1)[0] == null ? "nan" : Lob4.slice(0, 1)[0]
    var new2 = Lob4.slice(1, 2)[0] == null ? "nan" : Lob4.slice(1, 2)[0]
    var new3 = Lob4.slice(2, 3)[0] == null ? "nan" : Lob4.slice(2, 3)[0]

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + extra3 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-06-13-10-47-59",
        "temperature": 0.8,
        "max_tokens": 1000,
        "best_of": 3,
        "stop": "END",
        "n": 2,
        "frequency_penalty": 0.00
    })
    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function FinalOutPut(pName1, useCase1, Indursty1, Protagonist1, BO1, SBO2, SBO3, SBO4, extra1, extra2, extra3, extra4, Lob1) {
    let PNAME = pName1.trim();
    let USECASE = useCase1.trim();
    let INDUSRTY = Indursty1.trim();
    let Bo1 = BO1.trim();
    let Bo2 = SBO2.trim();
    let Bo3 = SBO3.trim();
    let Bo4 = SBO4.trim();
    let D1 = extra1.trim();
    let D2 = extra2.trim();
    let D3 = extra3.trim();
    let D4 = extra4.trim();

    var PN = PNAME == "" ? "nan" : PNAME
    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY
    var BoONE = Bo1 == "" ? "nan" : Bo1
    var BoTWO = Bo2 == "" ? "nan" : Bo2
    var BoThree = Bo3 == "" ? "nan" : Bo3
    var BoFour = Bo4 == "" ? "nan" : Bo4
    var DEMO1 = D1 == "" ? "nan" : D1
    var DEMO2 = D2 == "" ? "nan" : D2
    var DEMO3 = D3 == "" ? "nan" : D3
    var DEMO4 = D4 == "" ? "nan" : D4

    var new1 = Lob1 != null ? Lob1.slice(0, 1)[0] == null ? "nan" : Lob1.slice(0, 1)[0] : "nan"
    var new2 = Lob1 != null ? Lob1.slice(1, 2)[0] == null ? "nan" : Lob1.slice(1, 2)[0] : "nan"
    var new3 = Lob1 != null ? Lob1.slice(2, 3)[0] == null ? "nan" : Lob1.slice(2, 3)[0] : "nan"

    var body = JSON.stringify({

        "prompt": "PN:" + " " + PN + " " + "$ Industry:" + " " + IN + " $ Use Case:" + " " + US + " " + "$ Line of Business 1:" + " " + new1 + " " + "$ Line of Business 2:" + " " + new2 + " " + "$ Line of Business 3:" + " " + new3 + " " + "$ BO-1:" + " " + BoONE + " " + "$ Demo-1: " + DEMO1 + " " + "$ BO-2:" + " " + BoTWO + " " + "$ Demo-2: " + DEMO2 + " " + "$ BO-3: " + BoThree + " " + "$ Demo-3: " + DEMO3 + " " + "$ BO-4: " + BoFour + " " + "$ Demo-4: " + DEMO4,
        "model": "davinci:ft-ai-derivatives-2022-06-13-11-48-03",
        "temperature": 0.7,
        "max_tokens": 1000,
        "stop": "END",
        "n": 2
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });

}
export function FinalOutro(pName1, useCase1, intro, BO1, SBO2, SBO3, SBO4) {


    let PNAME = pName1.trim();
    let USECASE = useCase1.trim();

    var PN = PNAME == "" ? "nan" : PNAME
    var US = USECASE == "" ? "nan" : USECASE
    var IN = intro == "" ? "nan" : intro

    var body = JSON.stringify({
        "prompt": "PN: " + PN + " " + "$ Use Case: " + US + " " + "$ Intro: " + IN + " &&&",
        "model": "davinci:ft-ai-derivatives:outro-2022-06-03-19-44-47",
        "temperature": 0.9,
        "stop": "@@",
        "n": 2
    })

    return new Promise((resolve, reject) => {
        fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + process.env.MIX_API_URL,
                "OpenAI-Organization": "org-uAm5KJBKbuyoDzkPF6r67bFB",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}

export function verbs(BO1) {
    var body = JSON.stringify({
        "BO": BO1
    })
    return new Promise((resolve, reject) => {
        fetch("https://oe0golgl24.execute-api.us-west-2.amazonaws.com/beta/sap_bo", {
            method: "POST",
            body: body,
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function SaveScripts(pName, useCase, Indursty, Protagonist, BO1, SBO2, SBO3, SBO4, Demo1, Demo2, Demo3, Demo4, protagnist2, protagnist3, protagnist4, extra, extra2, extra3, extra4, newIntro, extrasss5, newOutro, extrasss, extrasss2, extrasss3, extrasss4, extrasss6) {
    console.log("1--->", extrasss6);
    console.log("2--->", newOutro);
    console.log("3--->", newIntro);
    console.log("4--->", extrasss5);

    var body = JSON.stringify({
        "Ind": Indursty.trim(),
        "PN": pName.trim(),
        "Use_Case": useCase.trim(),
        "Intro": extrasss5 == "" ? newIntro.trim() : extrasss5.trim(),
        "Protagonist_1": Protagonist.trim(),
        "BO_1": BO1.trim(),
        "Demo_1": extrasss == "" ? extra.trim() : extrasss.trim(),
        "Demo_1_key_points": Demo1.trim(),
        "Protagonist_2": protagnist2.trim(),
        "BO_2": SBO2.trim(),
        "Demo_2": extrasss2 == "" ? extra2.trim() : extrasss2.trim(),
        "Demo_2_key_points": Demo2.trim(),
        "Protagonist_3": protagnist3.trim(),
        "BO_3": SBO3.trim(),
        "Demo_3": extrasss3 == "" ? extra3.trim() : extrasss3.trim(),
        "Demo_3_key_points": Demo3.trim(),
        "Protagonist_4": protagnist4.trim(),
        "BO_4": SBO4.trim(),
        "Demo_4": extrasss4 == "" ? extra4.trim() : extrasss4.trim(),
        "Demo_4_key_points": Demo4.trim(),
        "Outro": extrasss6 == "" ? newOutro.trim() : extrasss6.trim(),
    })
    return new Promise((resolve, reject) => {
        fetch("/api/storeScripts", {
            method: "POST",
            body: body,
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}
export function GraphsData() {

    return new Promise((resolve, reject) => {
        fetch("/api/readScripts", {
            method: "GET",
            headers: { "Content-type": "application/json" }
        })
            .then((response) => response.json())
            .then((responseJson) => {

                resolve(responseJson);
            })
            .catch((error) => {

                reject(error);
            });
    });
}