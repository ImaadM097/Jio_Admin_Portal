

async function fetcher(url, reqMethod, searchParamsList = [],token,bodyContent = {}) {

    

    if(searchParamsList.length !== 0) {
        searchParamsList.map((param)=>{
            return url.searchParams.append(param[0], param[1])
        })
        // console.log(url)
    }
    if(reqMethod !== 'GET') {
        const res = await fetch(url, {
            method: reqMethod,
            headers: {'content-type': 'application/json', 'authorization': token},
            body: JSON.stringify(bodyContent)
        })
        
        const result = await res.json()
        return result
    }
    else {
        const res = await fetch(url, {
            method: reqMethod,
            headers: {'content-type': 'application/json', 'authorization': token}
        })
        // console.log(res)
        const result = await res.json()
        // console.log(result)
        return result
    }

    
}

export default fetcher;