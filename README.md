# FixHealth Landing Page
## Hosting Link - https://aquamarine-monstera-041df5.netlify.app/
## Description
Landing page for the Fix Health website with a focus on a dark theme, minimalistic design, and specific features. The landing page will include an attractive hero image,about section,doctors section a consultation booking form, and testimonials.

## Features

1. **Dark Theme:**
   - The landing page will be based on a dark theme for a modern and aesthetic look.

2. **Sections:**
   - An Attractive Hero Image
   - Consultation Booking Form
   - Testimonial
   - About Section
   - Doctors Section

3. **Booking Form:**
   - The booking form will follow these steps:
     1. Name + Phone Number
     2. Age + City + Company
     3. Chief Complaints
     4. Any Previous Experience with Physiotherapy
     5. Display the Best Available Doctors filtered for the patient's city
   
4. **Use Cases:**
   - If the age is less than 40 years, the form won't check for previous experience with physiotherapy.
   - If a `city` parameter is passed in the URL, it will override the city entered by the patient when filtering doctors.



## Installation
1. Clone the repository: `git clone https://github.com/your-username/fixhealth.git`  or download the zip file
2. Navigate to the project directory: `cd fixhealth`
3. Install dependencies: `npm install`

## Usage
1. Start the development server: `npm run dev
2. Open your browser and visit: `http://localhost:5173`

## Technologies Used
- React
- React Router
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome
- react-fontawesome

## API Used 
-  https://mocki.io/v1/e2d8c714-c596-41c3-a96a-3181c1752be2

## Contributing
If you'd like to contribute to FixHealth, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
