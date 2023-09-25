//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

/*

// V1

router.post('/find-answer', function(request, response) {

    var find = request.session.data['find']
    if (find == "AA3 1AB"){
        response.redirect("/v1/select-aa3-1ab")
    } else {
        response.redirect("/v1/not-found")
    }
})

// V2

router.post('/find-answer-v2', function(request, response) {

    var find = request.session.data['find']
    if (find == "Avon Court"){
        response.redirect("/v2/select-aa3-1ab")
    } else {
        response.redirect("/v2/not-found-name-postcode")
    }
})

router.post('/find-street-and-town-answer', function(request, response) {

    var find = request.session.data['find']
    if (find == "Avon Court"){
        response.redirect("/v2/select-aa3-1ab")
    } else {
        response.redirect("/v2/not-found-street-and-town")
    }
})

router.post('/find-building-name-and-city-answer', function(request, response) {

    var find = request.session.data['building-name']
    if (find == "Avon Court"){
        response.redirect("/v2/select-avon-court")
    } else {
        response.redirect("/v2/not-found-building-name-and-city")
    }
})

router.post('/find-postcode-answer', function(request, response) {

    var find = request.session.data['postcode']
    if (find == "W1A 1AB"){
        response.redirect("/v2/avon-court")
    } else {
        response.redirect("/v2/not-found-postcode")
    }
})

// V3

router.post('/find-street-and-town-answer', function(request, response) {

    var find = request.session.data['find']
    if (find == "Avon Court"){
        response.redirect("/v3/select-aa3-1ab")
    } else {
        response.redirect("/v3/not-found-street-and-town")
    }
})

router.post('/find-building-name-and-city-answer', function(request, response) {

    var find = request.session.data['building-name']
    if (find == "Avon Court"){
        response.redirect("/v3/select-avon-court")
    } else {
        response.redirect("/v3/not-found-building-name-and-city")
    }
})

router.post('/find-postcode-answer', function(request, response) {

    var find = request.session.data['postcode']
    if (find == "W1A 1AB"){
        response.redirect("/v3/avon-court")
    } else {
        response.redirect("/v3/not-found-postcode")
    }
})

*/

// V4

router.post('/find-postcode-answer', function(request, response) {

    var find = request.session.data['postcode']
    if (find == "W1A 1AB"){
        response.redirect("/v4/select-building")
//    } else if (find == "W1A"){
//        response.redirect("/v4/select-building")
    } else {
        response.redirect("/v4/not-found-postcode")
    }
})