//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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

router.post('/find-answer', function(request, response) {

    var find = request.session.data['find']
    if (find == "AA3 1AB"){
        response.redirect("/v2/select-aa3-1ab")
    } else {
        response.redirect("/v2/not-found")
    }
})