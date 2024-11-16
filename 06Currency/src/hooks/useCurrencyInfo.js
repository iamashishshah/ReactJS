import { useEffect, useState} from 'react'

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/c1d64b8f08535699423d56da/latest/${currency}`)
        .then( (res) => res.json())
            .then((result) => setData(result["conversion_rates"]))
    }, [currency])

    console.log(data)
    return data
}

export default useCurrencyInfo;