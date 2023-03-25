const swapi = require('./script2')

const fetchFunction = (url) => fetch(url)

it('calls swapi api to get people', () => {
    expect.assertions(1)
    return swapi.getPeople(fetchFunction).then(data => {
        expect(data.count).toEqual(87)
    })
})

it('calls swapi api to get people with promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetchFunction).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})

it('getPeople return count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [1,2,3,4,5]
            })
        }))
        expect.assertions(2)
        return swapi.getPeoplePromise(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1)
            expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people')
        })
})

