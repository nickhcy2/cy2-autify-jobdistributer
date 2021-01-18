import JobBuilder from '../../src/logic/JobBuilder'

const jobBuilder = new JobBuilder

test('Test name-generator correct', () => {
    var name = jobBuilder.nameGenerator("test", "test")
    expect(name).toEqual("cy2-autify-product-test-test")
})
