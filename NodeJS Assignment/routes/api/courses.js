const express = require('express');
const router = express.Router();
const courses=require('../../Courses');

const idFilter = req => course => course.id === parseInt(req.params.id);


//Get all courses
router.get('/', (req, res) =>{
    console.log("abc");
    res.json(courses)
} );

// Get single course with ID
router.get('/:id', (req, res) => {
    const found = courses.some(idFilter(req));
    if (found) {
        const course = courses.find(idFilter(req));
        res.json(course);
      } else {
        res.status(404).json({ msg: `No course with the id of ${req.params.id}` });
      }
});

//Create a new course
router.post('/', (req, res) => {
    const newCourse = req.body;
    if (!newCourse.name || newCourse.name.trim()==='') {
      return res.status(400).json({ msg: 'Please include a name' });
    }
   courses.push(newCourse);
    res.status(200).json(courses);
  });

  module.exports = router;
