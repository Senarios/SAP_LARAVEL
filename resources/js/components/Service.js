export function scriptOne(pName, useCase, Indursty, Protagonist, BO1, extra) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;


    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + BO1 + " " + "$ Demo:" + " " + extra + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-04-28-08-58-09",
        "temperature": 0.9,
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
                Authorization: "Bearer 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",
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
export function scriptTwo(pName, useCase, Indursty, Protagonist, SBO2, extra2) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO2 + " " + "$ Demo:" + " " + extra2 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-04-28-08-58-09",
        "temperature": 0.9,
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
                Authorization: "Bearer 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",
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
export function scriptThree(pName, useCase, Indursty, Protagonist, SBO3, extra3) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + extra3 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-04-28-08-58-09",
        "temperature": 0.9,
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
                Authorization: "Bearer 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",
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
export function scriptFour(pName, useCase, Indursty, Protagonist, SBO3, extra3) {
    const finalSentence = Protagonist.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName.trim();
    let USECASE = useCase.trim();
    let INDUSRTY = Indursty.trim();
    let PROTAGONIST = finalSentence.trim();

    var US = USECASE == "" ? "nan" : USECASE
    var IN = INDUSRTY == "" ? "nan" : INDUSRTY;
    var PN = PROTAGONIST == "" ? "nan" : PROTAGONIST;

    var body = JSON.stringify({
        "prompt": "PN:" + " " + PNAME + " " + "$ Industry:" + " " + IN + " " + "$ Use Case:" + " " + US + " " + "$ Protagonist:" + " " + PN + " " + "$ BO: " + SBO3 + " " + "$ Demo:" + " " + extra3 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-04-28-08-58-09",
        "temperature": 0.9,
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
                Authorization: "Bearer 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",
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
export function FinalOutPut(pName1, useCase1, Indursty1, Protagonist1, BO1, SBO2, SBO3, SBO4, extra1, extra2, extra3, extra4) {
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

    var body = JSON.stringify({

        "prompt": "PN:" + " " + PN + " " + "$ Industry:" + " " + IN + " $ Use Case:" + " " + US + " " + "$ BO-1:" + " " + BoONE + " " + "$ Demo-1: " + DEMO1 + " " + "$ BO-2:" + " " + BoTWO + " " + "$ Demo-2: " + DEMO2 + " " + "$ BO-3: " + BoThree + " " + "$ Demo-3: " + DEMO3 + " " + "$ BO-4: " + BoFour + " " + "$ Demo-4: " + DEMO4 + " " + "\n\n###\n\n",
        "model": "davinci:ft-ai-derivatives-2022-05-06-07-15-14",
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
                Authorization: "Bearer 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",
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

    // var outro = [
    //     "BO-1" = "BO1",
    //     "BO-2" = "SBO2",
    //     "BO-3" = "SBO3",
    //     "BO-4" = "SBO4",
    // ]

    // var arrOutro = []

    // for (i = 1; i < 5; i++) {
    //     if ("BO-" + JSON.stringify({ i }) == "nan") {
    //         arrOutro.push(i)
    //     }
    // }
    // console.log("ddssdsdsdsddd=-=-=-", arrOutro);


    let PNAME = pName1.trim();
    let USECASE = useCase1.trim();
    var body = JSON.stringify({
        "prompt": "PN: " + PNAME + " " + "$ Use Case: " + USECASE + " " + "$ Intro: " + intro + " &&&",
        "model": "davinci:ft-ai-derivatives-2022-05-12-09-52-07",
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
                Authorization: "Bearer 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",
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
    var body = JSON.stringify({
        "Ind": Indursty,
        "PN": pName,
        "Use_Case": useCase,
        "Intro": newIntro == "" ? extrasss5 : newIntro,
        "Protagonist_1": Protagonist,
        "BO_1": BO1,
        "Demo_1": extra == "" ? extrasss : extra,
        "Demo_1_key_points": Demo1,
        "Protagonist_2": protagnist2,
        "BO_2": SBO2,
        "Demo_2": extra2 == "" ? extrasss2 : extra2,
        "Demo_2_key_points": Demo2,
        "Protagonist_3": protagnist3,
        "BO_3": SBO3,
        "Demo_3": extra3 == "" ? extrasss3 : extra3,
        "Demo_3_key_points": Demo3,
        "Protagonist_4": protagnist4,
        "BO_4": SBO4,
        "Demo_4": extra4 == "" ? extrasss4 : extra4,
        "Demo_4_key_points": Demo4,
        "Outro": newOutro == "" ? extrasss6 : newOutro,
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