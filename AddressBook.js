class Contact{
    constructor(first_name, last_name,address, city, state, zip, phone_number, email){
        this.first_name = first_name
        this.last_name = last_name
        this.address = address
        this.city = city
        this.state = state
        this.zip = zip
        this.phone_number = phone_number
        this.email = email
    }
    get FirstName() {
        return this.first_name;
    }
     get LastName() {
        return this.last_name
    }
     get Address() {
        return this.address
    }
     get Zip() {
        return this.zip
    }
     get City() {
        return this.city
    }
     get State() {
        return this.state
    }
     get PhoneNumber() {
        return this.phone_number
    }
     get Email() {
        return this.email
    }
}
let person1 = new Contact("Avani","Trivedi","Places","Indore","MP",4534,987654332,"avani@gmail.com")

console.log(person1.Address);
checkValidationForName(person1.FirstName)