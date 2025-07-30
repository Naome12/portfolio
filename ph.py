import phonenumbers
from phonenumbers import geocoder

def get_location(phone_number):
    number = phonenumbers.parse(phone_number)
    location = geocoder.description_for_number(number, "en")
    return location

if __name__ == "__main__":
    phone_number = input("Enter a phone number (with country code): ")
    try:
        location = get_location(phone_number)
        if location:
            print(f"The location for {phone_number} is: {location}")
        else:
            print("Location not found.")
    except phonenumbers.NumberParseException as e:
        print(f"Error parsing phone number: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
    else:
        print("Phone number processed successfully.")
        print("Please ensure the phone number is in the correct format.")
        print("Thank you for using the phone number location service.")
        print("Have a great day!")
        print("Exiting the program.")
        print("Goodbye!")
        exit(0)