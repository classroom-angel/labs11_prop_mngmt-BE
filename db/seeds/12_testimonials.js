const testimonials = [];

testimonials.push({
    name: 'Holly Davidson',
    role: 'Teacher',
    text: 'This has been the easiest process submitting issues for my classroom, I have had great help right away!'
}, {
    name: 'Angela Clark',
    role: 'Admin',
    text: 'There has been much better communication with boardmembers and donors to help with school needs, thank you Classroom Angel!'
}, {
    name: 'Jack Barnes',
    role: 'Board Member',
    text: 'I could not be happier with the amazing experience the admins and teachers have with Classroom Angel, this has provided better communication!'
}, {
    name: 'Percy Jones',
    role: 'Admin',
    text: 'Classroom Angel came right to the rescue! After several months of students having to sit on pillows during class, we now have better desks.'
});

const {
    makeSeed
} = require('../dataHelpers/seeds');
exports.seed = makeSeed('testimonials', testimonials);