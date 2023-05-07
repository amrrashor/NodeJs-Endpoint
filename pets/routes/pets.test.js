import supertest from 'supertest';
import server from '../../app';
const requestWithSupertest = supertest(server);

describe('GET "/"', () => {
    test('GET "/" returns all pets', async () => { 
        const res = await requestWithSupertest.get('/pets');
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type: 'dog',
                age: 3,
                breed:'labrador'
            },
            {
                id: 2,
                name: 'Vito',
                type: 'dog',
                age: 5,
                breed:'poodle'
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed:'tabby'
            },
        ])
    })
})

describe('GET "/:id"', () => {
    test('GET "/:id" returns specific pet', async () => {
        const res = await requestWithSupertest.get("/pets/1")
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining("json"))
        expect(res.body).toEqual([
            {
                id: 1,
                name: 'Rex',
                type:'dog',
                age: 3,
                breed:'labrador',
            }
        ])
    })
})

describe('POST "/"', () => {
    test('POST "/" add new pet', async () => {
        const res = await requestWithSupertest.post('/pets').send({
            id: 4,
            name: 'salame',
            type: 'cat',
            age: 3,
            breed:"tabby",
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'salame',
            type: 'cat',
            age: 3,
            breed:"tabby",
        })
    })
})

describe('PUT "/:id"', () => {
    test('PUT "/:id" edits single pet', async () => {
        const res = await requestWithSupertest.put('/pets/1').send({
            id: 4,
            name: 'salameeeeee',
            type: 'cat',
            age: 7,
            breed:"tabby",
        })
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({
            id: 4,
            name: 'salameeeeee',
            type: 'cat',
            age: 7,
            breed:"tabby",
        })
    })
})

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" delete single pet', async () => {
        const res = requestWithSupertest.delete('/pets/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {
                id: 2,
                name: 'Vito',
                type: 'dog',
                age: 5,
                breed:'poodle'
            },
            {
                id: 3,
                name: 'Mittens',
                type: 'cat',
                age: 2,
                breed:'tabby'
            },
        ])
    })
})