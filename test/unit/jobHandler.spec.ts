import JobHandler from '../../src/logic/JobHandler'
import { JobModel } from '../../src/models/iJobModel'
import JsonExamples from '../mocks/json-examples'
import { notDeepEqual } from 'assert'

const jsonExamples = new JsonExamples
const jobHandler = new JobHandler
var jobs: JobModel[] = [];

beforeEach(() => {
    jobs = []
})

test('Test post data success', async () => {
    jobs = jsonExamples.jobsCorrectConnection
    var value = await jobHandler.postData()
    expect(value).toEqual("success")
})

test('Test post data failed connection error', () => {
    jobs = jsonExamples.jobsDeactive
    var value = jobHandler.postData()
    expect(value).not.toBe(200)
})

test('Test Job generator correct', () => {
    jobs = jsonExamples.jobsDeactive
    var value = jobHandler.jobGenerator(jobs)
    expect(value).toEqual("success")
})

// test('Test Job generator wrong syntax', () => {
//     var name = jobHandler.jobGenerator
//     expect(name).toEqual("cy2-autify-product-test-test")
// })

