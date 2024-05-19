
describe('Assesment', () => {

  it('Login with invalid password', () => 
    {
      cy.visit('https://demo.guru99.com/insurance/v1/index.php')
      cy.get('#email').type('demo@gmail.com')
      cy.get('#password').type('test@123')
      cy.get(':nth-child(3) > .btn').click()

      cy.contains('Enter your Email address and password correct').should('be.visible')
    })


//   it('Login with valid credential', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.get('#email').type('demo@gmail.com')
    cy.get('#password').type('testing@123')
    cy.get(':nth-child(3) > .btn').click()

//     //Request Quotation
    cy.get('#ui-id-2').click()
    cy.get('#quotation_windscreenrepair_t').click()
    cy.get('#quotation_incidents').type('Accident')
    cy.get('#quotation_vehicle_attributes_registration').type('40400')
    cy.get('#quotation_vehicle_attributes_mileage').type('25')
    cy.get('#quotation_vehicle_attributes_value').type('500000')
    cy.contains('Public Place')
    cy.get('#new_quotation > .actions > .btn-success').click()

//     //Retrive Quotation
    cy.get('form > [type="text"]').type('36041')
    cy.get('#getquote').click()

//     //Profile
    cy.get('#ui-id-4').click()

//     //Edit Profile
    cy.get('#ui-id-5').click()
    cy.get('#user_surname').type('Raj Joshi')
    cy.get('#user_firstname').type('Saransh')
    cy.get('#user_phone').type('9876543210')
    cy.get('#user_address_attributes_street').type('Sukedhara')
    cy.get('#user_address_attributes_city').type('Kathmandu')
    cy.get('#user_address_attributes_postcode').type('4000')
    cy.get('#edit_user_ > .actions > .btn').click()

//     //Logout
    cy.get('.button_to > .btn').click()

  })

 

