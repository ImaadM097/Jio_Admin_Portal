

async function fetcher(url, reqMethod, searchParamsList = [], bodyContent = {}) {

    if(searchParamsList.length !== 0) {
        searchParamsList.map((param)=>{
            url.searchParams.append(param[0], param[1])
        })
        console.log(url)
    }
    if(reqMethod !== 'GET') {
        const res = await fetch(url, {
            method: reqMethod,
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(bodyContent)
        })
        const result = await res.json()
        return result
    }
    else {
        const res = await fetch(url, {
            method: reqMethod,
            headers: {'content-type': 'application/json'}
        })
        const result = await res.json()
        return result
    }

    
}

export default fetcher;