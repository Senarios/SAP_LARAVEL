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
    const finalSentence3 = Protagonist1.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    let PNAME = pName1.trim();
    let USECASE = useCase1.trim();
    let INDUSRTY = Indursty1.trim();
    let PROTAGONIST = finalSentence3.trim();
    let Bo1 = BO1.trim();
    let Bo2 = SBO2.trim();
    let Bo3 = SBO3.trim();
    let Bo4 = SBO4.trim();
    let D1 = extra1.trim();
    let D2 = extra2.trim();
    let D3 = extra3.trim();
    let D4 = extra4.trim();
    var newDate = new Date()
    var today = new Date().getFullYear() + ("0" + (new Date().getMonth() + 1)).slice(-2) + ("0" + new Date().getDate()).slice(-2)
    var getDate = newDate.toISOString().substring(0, 19) + 'Z'
    var replaceStr = getDate.replaceAll("-", "");
    var replaceAllStr = replaceStr.replaceAll(":", "");
    var crypto = require("crypto-js");
    var body = JSON.stringify({
        "PN": PNAME == "" ? "nan" : PNAME,
        "Industry": INDUSRTY == "" ? "nan" : INDUSRTY,
        "Use Case": USECASE == "" ? "nan" : USECASE,
        "BO-1": Bo1 == "" ? "nan" : Bo1,
        "Demo-1": D1 == "" ? "nan" : D1,
        "BO-2": Bo2 == "" ? "nan" : Bo2,
        "Demo-2": D2 == "" ? "nan" : D2,
        "BO-3": Bo3 == "" ? "nan" : Bo3,
        "Demo-3": D3 == "" ? "nan" : D3,
        "BO-4": Bo4 == "" ? "nan" : Bo4,
        "Demo-4": D4 == "" ? "nan" : D4
    })
    var URL = '/endpoints/pytorch-inference-2022-03-30-13-01-59-162/invocations';
    var canonical_querystring = '';
    var algorithm = 'AWS4-HMAC-SHA256';
    var host = 'runtime.sagemaker.us-west-2.amazonaws.com';
    var kSecret = "tejrNEWXx4NMlSC81rkXohy/d00xjTRjyCfmQ5hr";
    var SHA256 = require('crypto-js/sha256');
    var hasPayload = SHA256(body).toString();
    var signed_headers = 'content-type;host;x-amz-content-sha256;x-amz-date';
    var canonical_headers = 'content-type:' + 'application/json' + '\n' + 'host:' + host + '\n' + 'x-amz-content-sha256:' + hasPayload + '\n' + 'x-amz-date:' + replaceAllStr + '\n';
    var credentialScope = today + '/' + 'us-west-2' + '/' + 'sagemaker' + '/' + 'aws4_request';
    var hashCanonicalRequest = 'POST' + '\n' + URL + '\n' + canonical_querystring + '\n' + canonical_headers + '\n' + signed_headers + '\n' + hasPayload;
    var string_to_sign = algorithm + '\n' + replaceAllStr + '\n' + credentialScope + '\n' + SHA256(hashCanonicalRequest).toString();
    var kDate = crypto.HmacSHA256(today, 'AWS4' + kSecret);
    var kRegion = crypto.HmacSHA256('us-west-2', kDate);
    var kService = crypto.HmacSHA256('sagemaker', kRegion);
    var kSigning = crypto.HmacSHA256('aws4_request', kService);
    var signature = crypto.HmacSHA256(string_to_sign, kSigning);
    var authorization_header = algorithm + ' ' + 'Credential=' + "AKIA4LBKETVWEYHNZK5C" + '/' + credentialScope + ', ' + 'SignedHeaders=' + signed_headers + ', ' + 'Signature=' + signature;

    return new Promise((resolve, reject) => {
        fetch("https://runtime.sagemaker.us-west-2.amazonaws.com/endpoints/pytorch-inference-2022-03-30-13-01-59-162/invocations", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                "X-Amz-Content-Sha256": hasPayload,
                "X-Amz-Date": replaceAllStr,
                "Authorization": authorization_header,
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
export function FinalOutro(pName1, useCase1, intro, BO1, SBO2, SBO3, SBO4,) {
    let PNAME = pName1.trim();
    let USECASE = useCase1.trim();
    let Bo1 = BO1.trim();
    let Bo2 = SBO2.trim();
    let Bo3 = SBO3.trim();
    let Bo4 = SBO4.trim();
    var newDate = new Date()
    var today = new Date().getFullYear() + ("0" + (new Date().getMonth() + 1)).slice(-2) + ("0" + new Date().getDate()).slice(-2)
    var getDate = newDate.toISOString().substring(0, 19) + 'Z'
    var replaceStr = getDate.replaceAll("-", "");
    var replaceAllStr = replaceStr.replaceAll(":", "");
    var crypto = require("crypto-js");
    var body = JSON.stringify({
        "PN": PNAME == "" ? "nan" : PNAME,
        "Use Case": USECASE == "" ? "nan" : USECASE,
        "Intro": intro == "" ? "nan" : intro,
        "BO-1": Bo1 == "" ? "nan" : Bo1.at(-1) == "." ? Bo1.slice(0, -1) : Bo1,
        "BO-2": Bo2 == "" ? "nan" : Bo2.at(-1) == "." ? Bo2.slice(0, -1) : Bo2,
        "BO-3": Bo3 == "" ? "nan" : Bo3.at(-1) == "." ? Bo3.slice(0, -1) : Bo3,
        "BO-4": Bo4 == "" ? "nan" : Bo4.at(-1) == "." ? Bo4.slice(0, -1) : Bo4,
    })
    var URL = '/endpoints/pytorch-inference-2022-04-13-09-44-57-544/invocations';
    var canonical_querystring = '';
    var algorithm = 'AWS4-HMAC-SHA256';
    var host = 'runtime.sagemaker.us-west-2.amazonaws.com';
    var kSecret = "tejrNEWXx4NMlSC81rkXohy/d00xjTRjyCfmQ5hr";
    var SHA256 = require('crypto-js/sha256');
    var hasPayload = SHA256(body).toString();
    var signed_headers = 'content-type;host;x-amz-content-sha256;x-amz-date';
    var canonical_headers = 'content-type:' + 'application/json' + '\n' + 'host:' + host + '\n' + 'x-amz-content-sha256:' + hasPayload + '\n' + 'x-amz-date:' + replaceAllStr + '\n';
    var credentialScope = today + '/' + 'us-west-2' + '/' + 'sagemaker' + '/' + 'aws4_request';
    var hashCanonicalRequest = 'POST' + '\n' + URL + '\n' + canonical_querystring + '\n' + canonical_headers + '\n' + signed_headers + '\n' + hasPayload;
    var string_to_sign = algorithm + '\n' + replaceAllStr + '\n' + credentialScope + '\n' + SHA256(hashCanonicalRequest).toString();
    var kDate = crypto.HmacSHA256(today, 'AWS4' + kSecret);
    var kRegion = crypto.HmacSHA256('us-west-2', kDate);
    var kService = crypto.HmacSHA256('sagemaker', kRegion);
    var kSigning = crypto.HmacSHA256('aws4_request', kService);
    var signature = crypto.HmacSHA256(string_to_sign, kSigning);
    var authorization_header = algorithm + ' ' + 'Credential=' + "AKIA4LBKETVWEYHNZK5C" + '/' + credentialScope + ', ' + 'SignedHeaders=' + signed_headers + ', ' + 'Signature=' + signature;

    return new Promise((resolve, reject) => {
        fetch("https://runtime.sagemaker.us-west-2.amazonaws.com/endpoints/pytorch-inference-2022-04-13-09-44-57-544/invocations", {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": "application/json",
                "X-Amz-Content-Sha256": hasPayload,
                "X-Amz-Date": replaceAllStr,
                "Authorization": authorization_header,
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
export function SaveScripts(extrasss5, extrasss6, BO1, SBO2, SBO3, SBO4, extrasss, extrasss2, extrasss3, extrasss4) {
    var body = JSON.stringify({
        "intro": extrasss5,
        "outro": extrasss6,
        "bo1": BO1,
        "bo2": SBO2,
        "bo3": SBO3,
        "bo4": SBO4,
        "demo1": extrasss,
        "demo2": extrasss2,
        "demo3": extrasss3,
        "demo4": extrasss4,
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