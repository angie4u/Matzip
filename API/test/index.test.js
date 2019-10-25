const request = require('supertest');
const app = require('../server/app.js');

describe('GET /v1/venues', function(){
    it('return venue list with ID', function(){
        return request(app)
            .get('/v1/venues')
            .expect(200)
            .expect('Content-Type',/json/)
            .expect([
                {
                    "id": "8c6f775b-dc93-4f29-8dfc-599e3dfca774",
                    "name": "황생가 칼국수"
                },
                {
                    "id": "b1630165-cf04-4587-9c74-551f1fc3d898",
                    "name": "스윗밸런스",
                },
                {
                    "id": "deaecfd7-f35c-4230-b2a9-a9d9aab5b1a7",
                    "name": "광화문뚝감"
                },
                {
                    "id": "f094b14c-3cd4-47de-8ed1-532f73da3212",
                    "name": "비엣콴"
                }
            ])
    })
})

describe('GET /v1/venues/:id', function(){
    it('return venue info', function(){
        return request(app)
            .get('/v1/venues/8c6f775b-dc93-4f29-8dfc-599e3dfca774')
            .expect(200)
            .expect('Content-Type',/json/)
            .expect({ 
                "id": "8c6f775b-dc93-4f29-8dfc-599e3dfca774",
                "name": "황생가 칼국수",
                "rating": "3.5",
                "images": [
                    { "imageUrl": "https://t1.daumcdn.net/cfile/tistory/99A8E6455ADFE57633" }
                ],
                "category": "c01",
                "tags": [
                    "운치있는", "런닝맨맛집"
                ]
            })
    })
})

