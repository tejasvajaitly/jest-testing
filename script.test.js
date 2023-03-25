const googleSearch = require('./script')

dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
] 

describe('google search', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello')
        // googleSearch('testtest', dbMock)
    })
    
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
    })
    
    it('is searching google', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('is searching google', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
}) 