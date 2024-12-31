# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://jessthedev-mortgage-calculator.netlify.app/)
- Live Site URL: [Add live site URL here](https://github.com/jessiicacmoore/fem_mortgage-repayment-calculator)

## My process

### Built with

- React
- Typescript
- Tailwind CSS
- Custom hooks

### What I learned

Working on the mortgage calculator app provided me with valuable insights into React, form validation, and accessibility best practices. One of the key takeaways was how to manage real-time calculations while ensuring that the form inputs are validated correctly.

I implemented form validation using a custom hook to ensure that user inputs for the loan principal, interest rate, and term were valid and meaningful. If any of the conditions were violated, the app would provide specific error messages.

Accessibility was another significant focus for this project. I made sure that the form fields were properly labeled using `label` elements, and that interactive elements were keyboard accessible. Additionally, I incorporated ARIA attributes to announce changes in real-time. For example, I used `aria-live` regions to announce errors and successful form submissions resulting in calculated data.

This project has also deepened my understanding of React’s state management, real-time updates, and the importance of accessibility in creating inclusive user experiences.

### Continued development

As I reflect on this project, there are several areas I want to continue focusing on and improving in future projects:

1. **Form Validation & Error Handling**  
   While I’ve made great strides with form validation in this app, I want to further refine my understanding of more complex validation scenarios, such as handling different input formats (e.g., dates, currencies) and leveraging validation libraries to simplify the process.

2. **Testing**  
   I didn’t use testing in this project, but I recognize its importance in building reliable applications. Going forward, I aim to integrate unit and integration tests, especially for critical features like form validation and mortgage calculations. This will help ensure that the app functions as expected as it grows.

3. **State Management with Context or Redux**  
   I thought I could get away with useState, but as the complexity of applications grew, state management became more challenging. While I’ve used local state in this project within a custom hook, I feel like I could have planned better state management to avoid prop drilling.

4. **Performance Optimization**  
   Although this app is relatively simple, performance optimization is always an area for improvement. In future projects, I plan to dive deeper into techniques like memoization (`useMemo`, `React.memo`) and lazy loading to optimize rendering and reduce unnecessary re-renders in larger applications.

5. **Advanced Accessibility Features**  
   While I’ve focused on improving accessibility for screen reader users, I’d like to explore more advanced accessibility techniques, such as keyboard navigation for custom components, error handling for forms that are more inclusive, and ensuring compatibility with assistive technologies.

6. **Styling and Design Systems**  
   I enjoyed using CSS and making the app responsive, but I’d like to refine my approach to styling by learning more about design systems and component libraries (like Storybook). This will help me develop scalable, consistent designs for larger applications while maintaining flexibility and reusability.

By continuing to improve these areas, I hope to further develop my frontend skills and create more robust, user-friendly applications.

### Useful resources

- [A Guide To Accessible Form Validation](https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation/) - This article was incredibly comprehensive in showing me what options i had in accessibly implementing form validation.