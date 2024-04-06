const btn = document.getElementById("submitBtn");

let handleVisible = async () => {
    console.log('is visible', document.visibilityState);
    try {
        if (document.visibilityState === 'visible') {
            let sl = await navigator.wakeLock.request('screen');
            btn.innerText = "y";
            console.log('sl is: ', sl);
        }
    } catch (e) {
        console.log('error is: ', e);
        btn.innerText = "n";
    }
}

btn.addEventListener("click", () => {
    document.addEventListener("visibilitychange", handleVisible);
    handleVisible()
})
