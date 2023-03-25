const fetchFunction = (url) => fetch(url)

const getPeoplePromise = (fetchFunction) => {
    return fetchFunction('https://swapi.py4e.com/api/people')
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}


const getPeople = async (fetchFunction) => {
    const response = await fetchFunction('https://swapi.py4e.com/api/people')
    const data = await response.json()
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeoplePromise: getPeoplePromise,
    getPeople: getPeople
}