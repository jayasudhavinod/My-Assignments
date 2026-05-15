function launchbrowser(browser){
    if (browser==="chrome"){
        console.log("chrome browser launched successfully")
    }
    else {
        console.log("firefox browser launched successfully")
    }
}
function runtests(testType){
    switch(testType) 
    {
        case "smoke":
            console.log("smoke test is executing")
            break
        case "sanity":
            console.log("sanity test is executing")
            break
        case "Regression":
            console.log("Regression test is executing")
            break   
        default:
            console.log("smoke executing")
    }
}
launchbrowser("firefox")
runtests("Regression")