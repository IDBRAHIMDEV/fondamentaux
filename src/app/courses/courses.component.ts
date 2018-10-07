import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  

  courses = [
    {vote: {like: 2, disLike: 0}, id: 1, name: "Laravel", description: "Lorem ipsum dolor sit amet", price: 23.1, datePublish: new Date(), active: true },
    {vote: {like: 33, disLike: 10}, id: 2, name: "Angular", description: "Lorem ipsum dolor sit amet", price: 156.52, datePublish: new Date(), active: true },
    {vote: {like: 0, disLike: 12}, id: 3, name: "NodeJS", description: "Lorem ipsum dolor sit amet", price: 2311.46, datePublish: new Date(), active: false },
    {vote: {like: 44, disLike: 3}, id: 4, name: "VueJS", description: "Lorem ipsum dolor sit amet", price: 87.999, datePublish: new Date(), active: true },
  ];


  course = {
    id: this.courses.length + 1,
    name: '',
    description: '',
    price: 0,
    datePublish: new Date(),
    active: true,
    vote: {like: 0, disLike: 0}
  }

  index: number;

  etat: boolean = true;

  title = "Formation en angular";

  constructor() { }

  editCourse(course, i) {
    this.index = i;
    this.etat = false;
    this.course = course;
  }

  updateCourse() {
    this.courses[this.index] = this.course;
    this.etat = true;
    this.index = -1;
  }


  addCourse() {
    this.courses.unshift(this.course);
  }

  deleteCourse(index) {
    
    if(confirm('Are you sure to delete this item?')) {
      this.courses.splice(index, 1);
    }
    
  }

  updateVoteToCourse(data, course) {

    console.log('data:'+data.value, 'status: ' + data.status)
    
    if(!data.status) {
      course.vote.like = data.value;
    }else {
      course.vote.disLike = data.value;
    }
  }


}
